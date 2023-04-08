import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    official: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Travel Notes",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "My Notes",
      href: "/mine",
    },
    {
      title: "Watch",
      href: "/watch",
    },
  ],
  links: {
    twitter: "https://twitter.com/LightmNFT",
    github: "https://github.com/LightmNFT/Lightm-evm",
    official: "https://lightm.xyz",
  },
}

export const TRAVEL_NOTES_ADDRESS =
  process.env.TRAVEL_NOTES_ADDRESS ||
  "0x5e0E8ddef7b637641F85b9e29Fe477c4c17e633D"

export const LIGHTM_EQUIPPABLE_RENDER_UTILS_ADDRESS =
  process.env.LIGHTM_EQUIPPABLE_RENDER_UTILS_ADDRESS ||
  "0x26512c68Dfd77Be7c396da9d77894a8425a4dF9A"
