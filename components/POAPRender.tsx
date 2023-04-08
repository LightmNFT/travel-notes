import { ReactNode, useCallback, useEffect, useMemo, useState } from "react"
import useGetMetdata from "@/hooks/useGetMetadata"
import { BigNumber } from "ethers"
import { useProvider, useWebSocketProvider } from "wagmi"

import { LightmEquippableMultiAssetFacetABI__factory } from "@/types/ethers-contracts"
import { IRMRKNestableEventsAndStruct } from "@/types/ethers-contracts/LightmEquippableABI"
import { cn, convertIpfs } from "@/lib/utils"
import { IRenderPart } from "./notes"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Separator } from "./ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface IPOAPRender {
  child: IRMRKNestableEventsAndStruct.ChildStructOutput
  equippedPart: IRenderPart | undefined
  idleSlots: BigNumber[]
  isOwner: boolean
  equip: (slotId: BigNumber) => void
  unequip: () => void
}

export default function POAPRender({
  child,
  equippedPart,
  idleSlots,
  isOwner,
  equip,
  unequip,
}: IPOAPRender) {
  const provider = useProvider()
  const wsProvider = useWebSocketProvider()

  const [tokenURI, setTokenURI] = useState("")

  const childContract = useMemo(() => {
    return LightmEquippableMultiAssetFacetABI__factory.connect(
      child.contractAddress,
      wsProvider || provider
    )
  }, [child.contractAddress, provider, wsProvider])

  const getMetadata = useCallback(async () => {
    const _tokenURI = await childContract.tokenURI(child.tokenId)

    setTokenURI(_tokenURI)
  }, [childContract, child.tokenId])

  useEffect(() => {
    getMetadata()
  }, [getMetadata])

  const unequipBtn = equippedPart ? (
    <Button disabled={!isOwner} onClick={unequip}>
      Unequip from{" "}
      <span className="ml-2 text-3xl">line {equippedPart.id.toString()}</span>
    </Button>
  ) : null

  const extraItems = [
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        From {child.contractAddress}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Token ID: {child.tokenId.toString()}
      </p>
    </div>,
    <Separator className="my-2" />,
    equippedPart ? (
      <Tooltip>
        <TooltipTrigger>{unequipBtn}</TooltipTrigger>
        <TooltipContent className={isOwner ? "hidden" : ""}>
          <p>No permission</p>
        </TooltipContent>
      </Tooltip>
    ) : idleSlots.length > 0 ? (
      <div>
        Equip at:
        <div className="flex flex-wrap gap-2">
          {idleSlots.map((slotId) => {
            const btn = (
              <Button
                size="sm"
                disabled={!isOwner}
                onClick={() => equip(slotId)}
              >
                Line {slotId.toString()}
              </Button>
            )

            return (
              <Tooltip>
                <TooltipTrigger>{btn}</TooltipTrigger>
                <TooltipContent className={isOwner ? "hidden" : ""}>
                  <p>No permission</p>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>
      </div>
    ) : null,
  ]

  return (
    <Picture
      src={tokenURI}
      extraItems={extraItems}
      className={equippedPart ? "border-dashed border-amber-400" : ""}
    />
  )
}

interface IPicture {
  src: string
  extraItems?: ReactNode[]
  className?: string
}

function Picture({ src, extraItems, className }: IPicture) {
  const { metadata, isLoading } = useGetMetdata(src)

  let extraCls = ""
  let tier

  if (metadata?.properties?.tier) {
    switch (metadata.properties.tier.value) {
      case 1: {
        extraCls =
          "text-amber-800 underline font-extrabold text-4xl lg:text-5xl"
        break
      }
      case 2: {
        extraCls = "text-amber-800 font-extrabold text-4xl lg:text-5xl"
        break
      }
      case 3: {
        extraCls = "text-amber-800"
        break
      }
    }

    tier = metadata.properties.tier.value
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex cursor-pointer items-center justify-center rounded-lg border-2 border-solid border-amber-200 p-1 hover:border-amber-400",
            className
          )}
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <img
              src={metadata?.mediaUri ? convertIpfs(metadata?.mediaUri) : ""}
              alt={metadata?.name}
              className="aspect-square"
            />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {metadata?.name}
        </h3>
        {tier ? (
          <h3
            className={cn(
              "scroll-m-20 rounded-lg text-2xl tracking-tight lg:text-3xl",
              extraCls
            )}
          >
            Tier: {tier}
          </h3>
        ) : null}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {metadata?.description}
        </p>
        <Separator className="my-2" />
        <p className="break-all text-sm text-slate-500 dark:text-slate-400">
          {`src: ${src}`}
        </p>
        {extraItems ? (
          <>
            <Separator className="my-2" />
            {extraItems}
          </>
        ) : null}
      </PopoverContent>
    </Popover>
  )
}
