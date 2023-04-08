import { useRouter } from "next/router"

import { Layout } from "@/components/layout"
import Notes from "@/components/notes"

export default function WatchAddressPage() {
  const { query } = useRouter()

  const { address } = query

  return (
    <Layout>
      <Notes ownerAddress={address as string} />
    </Layout>
  )
}
