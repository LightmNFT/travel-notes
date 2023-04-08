import { useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import useTravelNotes from "@/hooks/useTravelNotes"
import { BigNumber, BigNumberish } from "ethers"
import { Backpack } from "lucide-react"
import { useAccount } from "wagmi"

import {
  LightmEquippableABI__factory,
  LightmEquippableMultiAssetFacetABI__factory,
  LightmImplABI__factory,
} from "@/types/ethers-contracts"
import { LightmEquippableRenderUtils } from "@/types/ethers-contracts/LightmEquippableRenderUtilsABI"
import { parseInterfaceError } from "@/lib/utils"
import NotesRender from "./NotesRender"
import POAPRender from "./POAPRender"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { ScrollArea } from "./ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { TooltipProvider } from "./ui/tooltip"

interface INotes {
  ownerAddress?: string
}

interface IEvo {
  id: number
  name: string
  src: string
  disabled: boolean
  upgradable?: boolean
  default?: boolean
}

export interface IRenderPart {
  id: BigNumber
  origin: LightmEquippableRenderUtils.OriginStruct
}

export default function Notes({ ownerAddress }: INotes) {
  const {
    travelNotesW,
    state: { ownedNoteId, activeCRA, children },
    status: { isGettingActiveCRA },
    functions: { getEquipStatus, getActiveCRA },
  } = useTravelNotes(ownerAddress)
  const { toast } = useToast()

  const { address: operator } = useAccount()

  const [selectedEvo, setSelectedEvo] = useState<IEvo>()
  const [originToBeRenderedParts, setOriginToBeRenderedParts] =
    useState<LightmEquippableRenderUtils.ToBeRenderedPartStructOutput[]>()
  const [toBeRenderedParts, setToBeRenderedParts] = useState<IRenderPart[]>()
  const [openSheet, setOpenSheet] = useState(false)

  const isOwner = ownerAddress !== undefined ? operator === ownerAddress : true

  const notesEvos = useMemo(() => {
    const originEvos: IEvo[] = [
      {
        id: 1,
        name: "Broken Parchment",
        src: "/broken-parchment.png",
        disabled: true,
      },
      { id: 2, name: "Parchment", src: "/new-parchment.png", disabled: true },
      { id: 3, name: "Travel Notes", src: "/notepad.png", disabled: true },
    ]

    let defaultCra:
      | LightmEquippableRenderUtils.ActiveCatalogRelatedAssetStructOutput
      | undefined
    let defaultEvo: IEvo | undefined

    for (const cra of activeCRA) {
      const { id } = cra

      const evo = originEvos.find((evo) => evo.id === id.toNumber())

      if (!defaultCra || defaultCra.priority > cra.priority) {
        defaultCra = cra
        defaultEvo = originEvos.find((evo) => evo.id === cra.id.toNumber())
      }

      if (evo) {
        evo.disabled = false
      }
    }

    if (defaultEvo) {
      defaultEvo.default = true
    }

    if (children.length >= 3 && originEvos[1].disabled) {
      originEvos[1].upgradable = true
    }

    if (children.length >= 5 && originEvos[2].disabled) {
      originEvos[2].upgradable = true
    }

    return originEvos
  }, [activeCRA, children])

  const equipmentChanges = useMemo(() => {
    if (originToBeRenderedParts && toBeRenderedParts) {
      const removes = []
      const adds = []

      const partsCopy = [...toBeRenderedParts]

      for (const part of originToBeRenderedParts) {
        const targetPartIndex = partsCopy.findIndex(
          (_part) =>
            _part.id.eq(part.id) &&
            _part.origin.contractAddress === part.origin.contractAddress &&
            (_part.origin.tokenId as BigNumber).eq(part.origin.tokenId) &&
            (_part.origin.assetId as BigNumber).eq(part.origin.assetId)
        )

        // if find means no change
        if (targetPartIndex > -1) {
          partsCopy.splice(targetPartIndex, 1)
        } else {
          // if not find means be removed
          removes.push(part)
        }
      }

      // if still has rest in partsCopy means new added
      adds.push(...partsCopy)

      return adds.length || removes.length
        ? {
            adds,
            removes,
          }
        : undefined
    }
  }, [originToBeRenderedParts, toBeRenderedParts])

  const selectedCra = useMemo(() => {
    return activeCRA.find((cra) => cra.id.toNumber() === selectedEvo?.id)
  }, [activeCRA, selectedEvo])

  const fetchEquipStatus = useCallback(async () => {
    if (selectedEvo) {
      const _toBeRenderedParts = await getEquipStatus(selectedEvo?.id)

      setOriginToBeRenderedParts(_toBeRenderedParts)
      setToBeRenderedParts(_toBeRenderedParts)
    }
  }, [getEquipStatus, selectedEvo])

  const modifyToBeRenderedParts = useCallback(
    (type: "add" | "remove", part: IRenderPart | BigNumber) => {
      if (type === "add") {
        setToBeRenderedParts((prev) => {
          if (prev) {
            return [...prev, part as IRenderPart]
          }

          return [part as IRenderPart]
        })
      } else if (type === "remove") {
        setToBeRenderedParts((prev) => {
          if (prev) {
            return prev.filter((p) => p.id !== (part as BigNumber))
          }

          return []
        })
      }
    },
    []
  )

  const upgradeNotes = useCallback(
    async (newAssetId: BigNumberish) => {
      if (ownedNoteId) {
        let toastRef

        try {
          toastRef = toast({ title: "📜", description: "Upgrading..." })

          const tx = await travelNotesW.claimNewAsset(ownedNoteId, newAssetId)
          await tx.wait()

          toastRef.update({
            id: toastRef.id,
            title: "📜",
            description: "Upgrade Successfully!",
          })

          await getActiveCRA()
        } catch (e: any) {
          const errorInfo = parseInterfaceError(travelNotesW.interface, e)

          toast({
            title: "📜",
            description:
              typeof errorInfo === "string" ? errorInfo : errorInfo.join(""),
            variant: "destructive",
          })
        }
      }
    },
    [ownedNoteId, toast, travelNotesW, getActiveCRA]
  )

  const setDefault = useCallback(
    async (assetId: BigNumber) => {
      if (ownedNoteId) {
        const travelNotesMultiAssetFacet =
          LightmEquippableMultiAssetFacetABI__factory.connect(
            travelNotesW.address,
            travelNotesW.signer
          )
        const targetAssetIndex = activeCRA.findIndex((cra) =>
          cra.id.eq(assetId)
        )

        const newPriorities = activeCRA.map((cra, i) =>
          targetAssetIndex === i ? 0 : cra.priority + 1
        )

        let toastRef
        try {
          toastRef = toast({ title: "📜", description: "Set Default..." })

          const tx = await travelNotesMultiAssetFacet.setPriority(
            ownedNoteId,
            newPriorities
          )
          await tx.wait()

          toastRef.update({
            id: toastRef.id,
            title: "📜",
            description: "Done!",
          })
          getActiveCRA()
        } catch (e: any) {
          const errorInfo = parseInterfaceError(
            travelNotesMultiAssetFacet.interface,
            e
          )

          toast({
            title: "📜",
            description:
              typeof errorInfo === "string" ? errorInfo : errorInfo.join(""),
            variant: "destructive",
          })
        }
      }
    },
    [activeCRA, getActiveCRA, ownedNoteId, toast, travelNotesW]
  )

  const confirmEquip = useCallback(async () => {
    if (equipmentChanges && ownedNoteId && selectedCra) {
      const { adds, removes } = equipmentChanges
      const travelNotesEquippableFacet = LightmEquippableABI__factory.connect(
        travelNotesW.address,
        travelNotesW.signer
      )

      const removeData = removes.length
        ? travelNotesEquippableFacet.interface.encodeFunctionData(
            "removeSlotEquipments(uint256,uint64,uint64[])",
            [ownedNoteId, selectedCra.id, removes.map((part) => part.id)]
          )
        : null
      const addData = adds.length
        ? travelNotesEquippableFacet.interface.encodeFunctionData(
            "addSlotEquipments",
            [
              ownedNoteId,
              selectedCra.id,
              adds.map((part) => {
                return {
                  tokenId: ownedNoteId,
                  catalogRelatedAssetId: selectedCra.id,
                  slotId: part.id,
                  childCatalogRelatedAssetId: part.id,
                  child: part.origin,
                }
              }),
              false,
            ]
          )
        : null

      const multicallData = []

      if (removeData) multicallData.push(removeData)
      if (addData) multicallData.push(addData)

      const travelNotesImplFacet = LightmImplABI__factory.connect(
        travelNotesW.address,
        travelNotesW.signer
      )

      let toastRef

      try {
        toastRef = toast({ title: "📜", description: "Equipping..." })

        const tx = await travelNotesImplFacet.multicall(multicallData)
        await tx.wait()

        toastRef.update({
          id: toastRef.id,
          title: "📜",
          description: "Equip Successfully!",
        })
        setOpenSheet(false)
        fetchEquipStatus()
      } catch (e: any) {
        const errorInfo = parseInterfaceError(travelNotesW.interface, e)

        toastRef?.update({
          id: toastRef.id,
          title: "📜",
          description:
            typeof errorInfo === "string" ? errorInfo : errorInfo.join(""),
          variant: "destructive",
        })
      }
    }
  }, [
    equipmentChanges,
    ownedNoteId,
    selectedCra,
    toast,
    travelNotesW,
    fetchEquipStatus,
  ])

  const idleSlots = useMemo(() => {
    return selectedCra
      ? selectedCra.partIds.filter(
          (id) => !toBeRenderedParts?.some((part) => part.id.eq(id))
        )
      : []
  }, [selectedCra, toBeRenderedParts])

  const notesEvoStageBar = useMemo(() => {
    const items = notesEvos.map((evo) => {
      const checked = evo.id === selectedEvo?.id

      return (
        <DropdownMenuCheckboxItem
          key={evo.id}
          checked={checked}
          onClick={() => {
            if (!evo.disabled) {
              setSelectedEvo(evo)
            }
          }}
          disabled={
            isOwner ? (evo.upgradable ? false : evo.disabled) : evo.disabled
          }
        >
          {evo.name}
          {evo.default ? " (Default)" : ""}
          {isOwner ? (
            evo.upgradable ? (
              <Button
                className="ml-2"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  upgradeNotes(evo.id)
                }}
              >
                Upgrade
              </Button>
            ) : !evo.default && !evo.disabled ? (
              <Button
                className="ml-2"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setDefault(BigNumber.from(evo.id))
                }}
              >
                Set Default
              </Button>
            ) : null
          ) : null}
        </DropdownMenuCheckboxItem>
      )
    })

    return (
      <div className="fixed bottom-24 left-[4%] flex items-center gap-2 rounded-lg bg-amber-800 p-2">
        {selectedEvo ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex cursor-pointer items-center gap-2">
                <Avatar>
                  <AvatarImage src={selectedEvo.src} />
                </Avatar>
                <span className="text-lg text-amber-100">
                  {selectedEvo.name}
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>{items}</DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <span>Loading...</span>
        )}
        <SheetTrigger asChild>
          <Button>
            <Backpack />
          </Button>
        </SheetTrigger>
      </div>
    )
  }, [selectedEvo, notesEvos, isOwner, upgradeNotes, setDefault])

  const bag = useMemo(() => {
    return (
      <>
        <SheetContent position="top" size="xl" className="bg-amber-100">
          <TooltipProvider>
            <h1 className="mb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Check Note
            </h1>
            <div className="flex gap-2">
              {children.map((child) => {
                const equippedPart = toBeRenderedParts?.find(
                  (part) =>
                    part.origin.contractAddress === child.contractAddress &&
                    (part.origin.tokenId as BigNumber).eq(child.tokenId)
                )

                const equip = (slotId: BigNumber) => {
                  modifyToBeRenderedParts("add", {
                    id: slotId,
                    origin: {
                      contractAddress: child.contractAddress,
                      tokenId: child.tokenId,
                      assetId: slotId,
                    },
                  })
                }

                const unequip = () => {
                  if (equippedPart) {
                    modifyToBeRenderedParts("remove", equippedPart.id)
                  }
                }

                return (
                  <div className="max-w-[128px]">
                    <POAPRender
                      child={child}
                      equippedPart={equippedPart}
                      idleSlots={idleSlots}
                      equip={equip}
                      unequip={unequip}
                      isOwner={isOwner}
                    />
                  </div>
                )
              })}
            </div>
            {equipmentChanges ? (
              <div className="mt-4 flex flex-col">
                <div className="my-2 flex gap-8">
                  {equipmentChanges.adds.length > 0 ? (
                    <div>
                      <span className="text-2xl font-extrabold">Equips:</span>
                      <ScrollArea>
                        {equipmentChanges.adds.map((part) => {
                          const indexInChildren = children.findIndex(
                            (child) =>
                              child.contractAddress ===
                                part.origin.contractAddress &&
                              child.tokenId.eq(part.origin.tokenId as BigNumber)
                          )

                          return (
                            <div>
                              <span className="text-xl font-bold">
                                No.{indexInChildren + 1}{" "}
                                <span className="font-base text-base">at</span>{" "}
                                line {part.id.toString()}
                              </span>
                            </div>
                          )
                        })}
                      </ScrollArea>
                    </div>
                  ) : null}
                  {equipmentChanges.removes.length > 0 ? (
                    <div>
                      <span className="text-2xl font-extrabold">Unequips:</span>
                      <ScrollArea>
                        {equipmentChanges.removes.map((part) => {
                          const indexInChildren = children.findIndex(
                            (child) =>
                              child.contractAddress ===
                                part.origin.contractAddress &&
                              child.tokenId.eq(part.origin.tokenId as BigNumber)
                          )

                          return (
                            <div>
                              <span className="text-xl font-bold">
                                No.{indexInChildren + 1}{" "}
                                <span className="font-base text-base">
                                  from
                                </span>{" "}
                                line {part.id.toString()}
                              </span>
                            </div>
                          )
                        })}
                      </ScrollArea>
                    </div>
                  ) : null}
                </div>
                <div className="flex max-w-sm gap-2">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setToBeRenderedParts(originToBeRenderedParts)
                    }
                  >
                    Cancel
                  </Button>
                  <Button onClick={confirmEquip}>Confirm</Button>
                </div>
              </div>
            ) : null}
          </TooltipProvider>
        </SheetContent>
      </>
    )
  }, [
    isOwner,
    originToBeRenderedParts,
    children,
    idleSlots,
    equipmentChanges,
    toBeRenderedParts,
    modifyToBeRenderedParts,
    confirmEquip,
  ])

  useEffect(() => {
    if (!isGettingActiveCRA) {
      let defaultEvo: IEvo | undefined
      let defaultCra:
        | LightmEquippableRenderUtils.ActiveCatalogRelatedAssetStructOutput
        | undefined

      for (const cra of activeCRA) {
        if (!defaultCra || defaultCra.priority > cra.priority) {
          defaultCra = cra
          defaultEvo = notesEvos.find((evo) => evo.id === cra.id.toNumber())
        }
      }

      setSelectedEvo(defaultEvo)
    }
  }, [activeCRA, notesEvos, isGettingActiveCRA])

  useEffect(() => {
    fetchEquipStatus()
  }, [fetchEquipStatus])

  return ownedNoteId ? (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      {notesEvoStageBar}
      {bag}
      {originToBeRenderedParts ? (
        originToBeRenderedParts.length > 0 ? (
          <NotesRender
            tier={selectedEvo?.id || 1}
            noteLineAndMetadataUris={originToBeRenderedParts.map((part) => ({
              line: part.id.toNumber(),
              metadataUri: part.metadataURI,
            }))}
          />
        ) : (
          <div className="flex h-full items-center justify-center gap-2 text-3xl md:text-4xl">
            <span>No honors found, check</span>{" "}
            <SheetTrigger asChild>
              <Button>
                <Backpack />
              </Button>
            </SheetTrigger>
            <span>to equip them!</span>
          </div>
        )
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          <span>Loading...</span>
        </div>
      )}
    </Sheet>
  ) : (
    <div className="flex h-full flex-col items-center justify-center">
      <p className="text-2xl md:text-3xl">
        Looks like {isOwner ? "you" : "this user"} have not claim your Travel
        Notes,
      </p>
      <Link className="text-4xl text-amber-800 md:text-6xl" href="/">
        Go to claim
      </Link>
    </div>
  )
}
