/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
  },
  env: {
    TRAVEL_NOTES_ADDRESS: process.env.TRAVEL_NOTES_ADDRESS,
    LIGHTM_EQUIPPABLE_RENDER_UTILS_ADDRESS:
      process.env.LIGHTM_EQUIPPABLE_RENDER_UTILS_ADDRESS,
    START_BLOCK: process.env.START_BLOCK,
  },
}

export default nextConfig
