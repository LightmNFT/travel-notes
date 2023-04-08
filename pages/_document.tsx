import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-amber-100 font-sans text-slate-900 antialiased selection:bg-amber-300 dark:bg-slate-900 dark:text-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
