import useSWR from "swr"

import { IMetadata } from "@/types/metadata"
import { convertIpfs } from "@/lib/utils"

type ExtendedError = Error & { info?: string; status?: number }

const fetcher = async (url: URL) => {
  const res = await fetch(url)

  if (!res.ok) {
    let errorStr = "An error occurred while fetching the data."

    if (res.status === 404 || res.status === 400) {
      errorStr = "Invalid URL, please check"
    }

    const error: ExtendedError = new Error(errorStr)

    error.status = res.status

    throw error
  }

  return res.json()
}

export default function useGetMetdata<E extends IMetadata = IMetadata>(
  ipfsLikeLink: string
) {
  const { data, error } = useSWR<Partial<E>>(
    convertIpfs(ipfsLikeLink),
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404 || error.status === 400) return
        if (retryCount >= 3) return
      },
    }
  )

  return {
    metadata: data,
    isLoading: ipfsLikeLink !== "" && !error && !data,
    error,
  }
}
