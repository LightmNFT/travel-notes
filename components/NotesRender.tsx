import useGetMetdata from "@/hooks/useGetMetadata"

import { cn } from "@/lib/utils"

interface ILineAndMetadataUri {
  line: number
  metadataUri: string
}

interface INotesRender {
  tier: number
  noteLineAndMetadataUris: ILineAndMetadataUri[]
}

export default function NotesRender({
  tier,
  noteLineAndMetadataUris,
}: INotesRender) {
  let extraCls: string = ""
  let toRenderLines = 3

  switch (tier) {
    case 3: {
      extraCls = "md:grid-cols-2 md:grid-rows-5 grid-rows-10 bg-amber-50"
      toRenderLines = 10
      break
    }
    case 2: {
      extraCls = "grid-rows-5 notes-shadow-lg bg-amber-200"
      toRenderLines = 5
      break
    }
    default: {
      extraCls = "notes-shadow-xl bg-scroll"
    }
  }

  return (
    <div
      className={cn(
        "notes-shadow mx-[10%] grid h-full grid-cols-1 grid-rows-3 items-center justify-items-center rounded-sm",
        extraCls
      )}
    >
      {new Array(toRenderLines).fill(0).map((_, i) => {
        const target = noteLineAndMetadataUris.find(
          ({ line }) => line === i + 1
        )

        return target ? (
          <NoteRender
            key={`${i}-:${target.metadataUri}`}
            metadataUri={target.metadataUri}
          />
        ) : (
          <div key={i}></div>
        )
      })}
    </div>
  )
}

interface INoteRender {
  metadataUri: string
}

function NoteRender({ metadataUri }: INoteRender) {
  const { metadata } = useGetMetdata(metadataUri)
  let extraCls = ""

  if (metadata?.properties?.tier) {
    switch (metadata.properties.tier.value) {
      case 1: {
        extraCls =
          "text-amber-800 underline font-extrabold text-6xl lg:text-7xl"
        break
      }
      case 2: {
        extraCls = "text-amber-800 font-extrabold text-6xl lg:text-7xl"
        break
      }
      case 3: {
        extraCls = "text-amber-800"
        break
      }
    }
  }

  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl tracking-tight underline-offset-[16px] lg:text-5xl",
        extraCls
      )}
    >
      {metadata?.name}
    </h1>
  )
}
