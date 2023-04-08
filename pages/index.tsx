import { useCallback } from "react"
import Head from "next/head"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import useTravelNotes from "@/hooks/useTravelNotes"
import { useWeb3Modal } from "@web3modal/react"
import { useAccount } from "wagmi"

import { parseInterfaceError } from "@/lib/utils"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  const { address } = useAccount()
  const {
    travelNotes,
    state: { ownedNoteId },
    status: { isMinting, isGettingTokens },
    functions: { claimTravelNote },
  } = useTravelNotes()
  const { toast } = useToast()
  const { open, isOpen } = useWeb3Modal()

  const claim = useCallback(async () => {
    try {
      toast({ title: "📜", description: "Claiming Travel Notes..." })

      await claimTravelNote()

      toast({ title: "Claiming success" })
    } catch (e: any) {
      const errorInfo = parseInterfaceError(travelNotes.interface, e)

      toast({
        title: "📜",
        description:
          typeof errorInfo === "string" ? errorInfo : errorInfo.join(""),
        variant: "destructive",
      })
    }
  }, [claimTravelNote, toast, travelNotes.interface])

  const tips = address ? (
    isGettingTokens ? (
      "Loading..."
    ) : ownedNoteId ? (
      <>
        You have claimed your Travel Notes.
        <br />
        <Button
          size="lg"
          variant="link"
          className="px-2 text-6xl tracking-tighter text-amber-800"
        >
          <Link href={"/mine"}>Check it now</Link>
        </Button>
      </>
    ) : (
      <>
        <Button
          size="lg"
          variant="link"
          className="px-2 text-6xl text-amber-800"
          onClick={claim}
          disabled={isMinting}
        >
          Claim
        </Button>{" "}
        your Travel Notes
      </>
    )
  ) : (
    <>
      <Button
        size="lg"
        variant="link"
        className="px-2 text-6xl text-amber-800"
        onClick={() => open()}
        disabled={isOpen}
      >
        Connect Wallet
      </Button>{" "}
      to check your on-chain honor!
    </>
  )

  return (
    <Layout>
      <Head>
        <title>Travel Notes</title>
        <meta
          name="description"
          content="An on-chain honor record application based on next gen NFT standard"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container flex h-full flex-col items-center justify-center gap-2">
        <h1 className="pb-8 text-center text-6xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-8xl">
          Record your on-chain honor on <br />
          <span className="text-amber-800">📜 Travel Notes</span>
        </h1>
        <p className="text-center text-3xl tracking-tighter dark:text-slate-400 sm:text-5xl">
          {tips}
        </p>
      </div>
    </Layout>
  )
}
