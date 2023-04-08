import { useCallback, useEffect, useState } from "react"
import { useLiveQuery } from "dexie-react-hooks"
import { BigNumber, ethers } from "ethers"

import { ICollectionRecord, TNDB } from "../db"
import {
  AssetSetEvent,
  LightmEquippableMultiAssetFacetABI,
  TransferEvent,
} from "../types/ethers-contracts/LightmEquippableMultiAssetFacetABI"

const START_BLOCK = Number(process.env.START_BLOCK) || 10

export interface IToken {
  id: BigNumber
  owner: string
}

export default function useGetTokensAndAssets(
  contract: LightmEquippableMultiAssetFacetABI,
  {
    listenTokens = false,
    listenAssets = false,
  }: {
    listenTokens?: boolean
    listenAssets?: boolean
  } = { listenTokens: false, listenAssets: false }
) {
  const [tokens, setTokens] = useState<IToken[]>([])
  const [assetEntries, setAssetEntries] = useState<BigNumber[]>([])

  const [isGetTokens, setIsGetTokens] = useState(false)
  const [isGetAssetEntries, setIsGetAssetEntries] = useState(false)

  const record = useLiveQuery(async () => {
    const _records = await TNDB.collectionRecord
      .filter(
        (record) => record.collectionAddress === (contract?.address || "")
      )
      .toArray()

    return _records.length ? _records[0] : ({} as ICollectionRecord)
  })

  const _getTokens = useCallback(
    async (pure: boolean = true) => {
      if (contract) {
        const mintEventFilter = contract.filters[
          "Transfer(address,address,uint256)"
        ](ethers.constants.AddressZero)
        const burnEventFilter = contract.filters[
          "Transfer(address,address,uint256)"
        ](null, ethers.constants.AddressZero)

        if (!pure) setIsGetTokens(true)

        const latestBlock = await contract.provider.getBlockNumber()

        let mintEvents: TransferEvent[] = [],
          burnEvents: TransferEvent[] = []

        for (
          let nextBlock = record?.tokens?.lastBlock || START_BLOCK;
          nextBlock < latestBlock;
          nextBlock += 3000
        ) {
          const [_mintEvents, _burnEvents] = await Promise.all([
            contract.queryFilter(mintEventFilter, nextBlock, nextBlock + 2999),
            contract.queryFilter(burnEventFilter, nextBlock, nextBlock + 2999),
          ])

          mintEvents.push(..._mintEvents)
          burnEvents.push(..._burnEvents)
        }

        const sortedTokenEvents = [...mintEvents, ...burnEvents]
        sortedTokenEvents.sort((a, b) => {
          if (a.blockNumber === b.blockNumber) {
            return a.transactionIndex - b.transactionIndex
          } else {
            return a.blockNumber - b.blockNumber
          }
        })

        const _tokens: IToken[] = []

        const mergedTokenEvents = [
          ...(record?.tokens?.events || []),
          ...sortedTokenEvents,
        ]

        for (let i = 0; i < mergedTokenEvents.length; i++) {
          const event = mergedTokenEvents[i]

          const { args } = event
          const { 0: from, 1: to, 2: tokenId } = args

          const recoveredTokenId = BigNumber.from(tokenId)

          if (from === ethers.constants.AddressZero) {
            _tokens.push({ id: recoveredTokenId, owner: to })
          }
          if (to === ethers.constants.AddressZero) {
            const idx = _tokens.findIndex(
              (token) => token.id === recoveredTokenId
            )

            if (idx >= 0) {
              _tokens.splice(idx, 1)
            }
          }
        }

        if (!pure) {
          setTokens(_tokens)
          setIsGetTokens(false)
        }

        if (
          record &&
          mergedTokenEvents.length &&
          (record.tokens?.lastBlock || 0) <
            mergedTokenEvents[mergedTokenEvents.length - 1].blockNumber
        ) {
          const lastTokenEventBlockNumber =
            mergedTokenEvents[mergedTokenEvents.length - 1].blockNumber

          const shouldUpdate = !!record.collectionAddress

          const data = {
            collectionAddress: contract.address,
            tokens: {
              lastBlock: lastTokenEventBlockNumber + 1,
              events: mergedTokenEvents.map((e) => {
                return {
                  blockNumber: e.blockNumber,
                  args: e.args,
                }
              }),
            },
          }

          if (shouldUpdate) {
            await TNDB.collectionRecord.update(record.collectionAddress!, data)
          } else {
            await TNDB.collectionRecord.put(data)
          }
        }

        return _tokens
      }

      return []
    },
    [contract, record]
  )

  const _getAssetEntries = useCallback(
    async (pure: boolean = true) => {
      if (contract) {
        const assetSetEventFilter = contract.filters.AssetSet()

        if (!pure) setIsGetAssetEntries(true)

        const latestBlock = await contract.provider.getBlockNumber()

        let assetSetEvents: AssetSetEvent[] = []

        for (
          let nextBlock = record?.assets?.lastBlock || START_BLOCK;
          nextBlock < latestBlock;
          nextBlock += 500
        ) {
          const _assetSetEvents = await contract.queryFilter(
            assetSetEventFilter,
            nextBlock,
            nextBlock + 499
          )

          assetSetEvents.push(..._assetSetEvents)
        }

        const _assetEntries = []

        const mergedAssetSetEvents = [
          ...(record?.assets?.events || []),
          ...assetSetEvents,
        ]

        for (let i = 0; i < mergedAssetSetEvents.length; i++) {
          const event = mergedAssetSetEvents[i]

          const { args } = event
          const { 0: assetId } = args

          const recoveredAssetId = BigNumber.from(assetId)

          _assetEntries.push(recoveredAssetId)
        }

        if (!pure) {
          setAssetEntries(_assetEntries)
          setIsGetAssetEntries(false)
        }

        if (
          record &&
          mergedAssetSetEvents.length &&
          (record?.assets?.lastBlock || 0) <
            mergedAssetSetEvents[mergedAssetSetEvents.length - 1].blockNumber
        ) {
          const lastAssetSetEventBlockNumber =
            mergedAssetSetEvents[mergedAssetSetEvents.length - 1].blockNumber

          const shouldUpdate = !!record.collectionAddress

          const data = {
            collectionAddress: contract.address,
            assets: {
              lastBlock: lastAssetSetEventBlockNumber + 1,
              events: mergedAssetSetEvents.map((e) => {
                return {
                  blockNumber: e.blockNumber,
                  args: e.args,
                }
              }),
            },
          }

          if (shouldUpdate) {
            await TNDB.collectionRecord.update(record.collectionAddress!, data)
          } else {
            await TNDB.collectionRecord.put(data)
          }
        }

        return _assetEntries
      }

      return []
    },
    [contract, record]
  )

  const internalGetTokens = useCallback(async () => {
    await _getTokens(false)
  }, [_getTokens])

  const internalGetAssetEntries = useCallback(async () => {
    await _getAssetEntries(false)
  }, [_getAssetEntries])

  const getTokens = useCallback(async () => {
    return _getTokens()
  }, [_getTokens])

  const getAssetEntries = useCallback(async () => {
    return _getAssetEntries()
  }, [_getAssetEntries])

  const mintOrBurnListen = useCallback(() => {
    if (contract) {
      internalGetTokens()

      const mintEventFilter = contract.filters[
        "Transfer(address,address,uint256)"
      ](ethers.constants.AddressZero)
      const burnEventFilter = contract.filters[
        "Transfer(address,address,uint256)"
      ](null, ethers.constants.AddressZero)

      contract.on(mintEventFilter, internalGetTokens)
      contract.on(burnEventFilter, internalGetTokens)

      return () => {
        contract.off(mintEventFilter, internalGetTokens)
        contract.off(burnEventFilter, internalGetTokens)
      }
    }
  }, [contract, internalGetTokens])

  const assetSetListen = useCallback(() => {
    if (contract) {
      internalGetAssetEntries()

      const assetSetEventFilter = contract.filters.AssetSet()

      contract.on(assetSetEventFilter, internalGetAssetEntries)

      return () => {
        contract.off(assetSetEventFilter, internalGetAssetEntries)
      }
    }
  }, [contract, internalGetAssetEntries])

  useEffect(() => {
    if (listenTokens) {
      return mintOrBurnListen()
    }
  }, [listenTokens, mintOrBurnListen])

  useEffect(() => {
    if (listenAssets) {
      return assetSetListen()
    }
  }, [listenAssets, assetSetListen])

  return {
    state: { tokens, assetEntries },
    status: { isGetTokens, isGetAssetEntries },
    functions: {
      getTokens,
      getAssetEntries,
    },
  }
}
