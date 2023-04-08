import { useRouter } from "next/router"

import { Layout } from "@/components/layout"
import { Input } from "@/components/ui/input"

export default function WatchPage() {
  const router = useRouter()

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const address = e.currentTarget.value

      router.push(`/watch/${address}`)
    }
  }

  return (
    <Layout>
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Watch
        </h1>
        <Input
          className="mx-auto w-[75%] lg:w-[45%]"
          placeholder="Input the address you wanna watch"
          onKeyDown={onKeyDown}
        />
      </div>
    </Layout>
  )
}
