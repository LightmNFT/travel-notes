import { useCallback, useEffect, useMemo, useState } from "react"
import { useAccount, useProvider, useSigner, useWebSocketProvider } from "wagmi"

import {
  LightmEquippableMultiAssetFacetABI__factory,
  LightmEquippableNestableFacetABI,
  LightmEquippableNestableFacetABI__factory,
  LightmEquippableRenderUtilsABI__factory,
  TravelNotesABI__factory,
} from "@/types/ethers-contracts"
import { IRMRKNestableEventsAndStruct } from "@/types/ethers-contracts/LightmEquippableABI"
import { LightmEquippableRenderUtils } from "@/types/ethers-contracts/LightmEquippableRenderUtilsABI"
import {
  LIGHTM_EQUIPPABLE_RENDER_UTILS_ADDRESS,
  TRAVEL_NOTES_ADDRESS,
} from "@/config/site"
import useGetTokensAndAssets, { IToken } from "./useGetTokensAndAssets"

export default function useTravelNotes(targetAddress?: string) {
  const { data: signer } = useSigner()
  const provider = useProvider()
  const wsProvider = useWebSocketProvider()

  const equippableRenderUtils = useMemo(
    () =>
      LightmEquippableRenderUtilsABI__factory.connect(
        LIGHTM_EQUIPPABLE_RENDER_UTILS_ADDRESS,
        wsProvider || provider
      ),
    [wsProvider, provider]
  )

  const { address } = useAccount()

  const toWatchAddress = targetAddress || address

  const [tokens, setTokens] = useState<IToken[]>([])
  const [activeCRA, setActiveCRA] = useState<
    LightmEquippableRenderUtils.ActiveCatalogRelatedAssetStructOutput[]
  >([])
  const [children, setChildren] = useState<
    IRMRKNestableEventsAndStruct.ChildStructOutput[]
  >([])

  const [isMinting, setIsMinting] = useState(false)
  const [isGettingActiveCRA, setIsGettingActiveCRA] = useState(true)

  const travelNotes = useMemo(() => {
    return TravelNotesABI__factory.connect(
      TRAVEL_NOTES_ADDRESS,
      wsProvider || provider
    )
  }, [provider, wsProvider])

  const travelNotesW = useMemo(() => {
    return signer ? travelNotes.connect(signer) : travelNotes
  }, [travelNotes, signer])

  const { functions } = useGetTokensAndAssets(
    LightmEquippableMultiAssetFacetABI__factory.connect(
      TRAVEL_NOTES_ADDRESS,
      wsProvider || provider
    )
  )

  const ownedNoteId = useMemo(() => {
    if (!toWatchAddress) return null

    const ownedNote = tokens.find((token) => token.owner === toWatchAddress)

    return ownedNote ? ownedNote.id : null
  }, [toWatchAddress, tokens])

  const getChildren = useCallback(async () => {
    if (ownedNoteId) {
      const travelNotesNestableFacet =
        LightmEquippableNestableFacetABI__factory.connect(
          TRAVEL_NOTES_ADDRESS,
          wsProvider || provider
        )
      const _children = await travelNotesNestableFacet.childrenOf(ownedNoteId)

      setChildren(_children)
    } else {
      setChildren([])
    }
  }, [ownedNoteId, provider, wsProvider])

  const getTokens = useCallback(async () => {
    const _tokens = await functions.getTokens()
    setTokens(_tokens)
  }, [functions])

  const getActiveCRA = useCallback(async () => {
    if (ownedNoteId) {
      setIsGettingActiveCRA(true)
      try {
        const _activeCRA =
          await equippableRenderUtils.getActiveCatalogRelatedAssets(
            travelNotes.address,
            ownedNoteId
          )

        setActiveCRA(_activeCRA)
        setIsGettingActiveCRA(false)
      } catch (e) {
        setIsGettingActiveCRA(false)
      }
    } else {
      setActiveCRA([])
    }
  }, [travelNotes.address, ownedNoteId, equippableRenderUtils])

  const getEquipStatus = useCallback(
    async (craId: number) => {
      if (ownedNoteId) {
        try {
          const _toBeRenderedParts =
            await equippableRenderUtils.getToBeRenderedParts(
              travelNotes.address,
              ownedNoteId,
              craId
            )

          return _toBeRenderedParts
        } catch (e) {
          return []
        }
      }
    },
    [equippableRenderUtils, ownedNoteId, travelNotes.address]
  )

  const claimTravelNote = useCallback(async () => {
    if (!travelNotesW) return

    setIsMinting(true)
    try {
      const tx = await travelNotesW.mint()
      await tx.wait()

      setIsMinting(false)
      getTokens()
    } catch (e) {
      setIsMinting(false)
      throw e
    }
  }, [getTokens, travelNotesW])

  useEffect(() => {
    getTokens()
  }, [])

  useEffect(() => {
    getActiveCRA()
  }, [getActiveCRA])

  useEffect(() => {
    getChildren()
  }, [getChildren])

  return {
    travelNotes,
    travelNotesW,
    state: { ownedNoteId, activeCRA, children },
    status: { isMinting, isGettingActiveCRA },
    functions: { claimTravelNote, getActiveCRA, getEquipStatus },
  }
}
