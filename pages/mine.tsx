import Head from "next/head"

import { Layout } from "@/components/layout"
import Notes from "@/components/notes"

export default function MinePage() {
  return (
    <>
      <Head>
        <title>My Notes | Travel Notes</title>
      </Head>
      <Layout>
        <Notes />
      </Layout>
    </>
  )
}
