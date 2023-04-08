import type { AppProps } from "next/app"
import local from "next/font/local"
import {
  Chain,
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import twColors from "tailwindcss/colors"
import { WagmiConfig, configureChains, createClient } from "wagmi"
import { hardhat, scrollTestnet } from "wagmi/chains"

import "@/styles/globals.css"
import { Toaster } from "@/components/ui/toaster"

const chains: [Chain] =
  process.env.NODE_ENV === "development" ? [hardhat] : [scrollTestnet]
const projectId = "f8aeec38f8522256ceb258045f279909"

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

const travelNotesFont = local({
  src: [{ path: "../fonts/Caveat.ttf" }, { path: "../fonts/kaishu.ttf" }],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-travel-notes: ${travelNotesFont.style.fontFamily};
        }
      `}</style>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
        <Toaster />
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-font-family": travelNotesFont.style.fontFamily,
          "--w3m-accent-color": twColors.amber[800],
          "--w3m-background-color": twColors.amber[800],
        }}
      />
    </>
  )
}
