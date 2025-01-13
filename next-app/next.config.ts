import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "c.statcounter.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/pendaftaran-batch7",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSeBki719pOSn-eyZdzwQ9WcEkSpfY3UlwtRwTZ4c6QvFVG_pg/viewform?usp=sharing",
        permanent: false,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
