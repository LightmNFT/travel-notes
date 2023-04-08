import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="fixed bottom-4 z-40 w-full">
      <div className="mx-auto flex h-16 max-w-[92%] items-center space-x-4 rounded-lg bg-amber-200 px-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-amber-700 dark:text-slate-400",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-amber-700 dark:text-slate-400",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <div className="flex items-baseline gap-1">
              <span>Developed by</span>
              <Link
                href={siteConfig.links.official}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={`/lightm_logo.svg`}
                  alt="logo"
                  width={32}
                  height={32}
                  className="inline"
                />
                <span>Lightm</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
