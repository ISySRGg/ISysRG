import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import * as demo from "@/sanity/demo"
import { settingsQuery } from "@/sanity/queries"
import { toPlainText } from "next-sanity"

import { Settings } from "@/types/sanity.types"
import Statcounter from "@/app/statcounter"

import ISysLogo from "../isys-logo"
import SocialMedia from "./social-media"

const options = { next: { revalidate: 30 } }

export default async function Footer() {
  const settings = await client.fetch<Settings>(settingsQuery, {}, options)

  const description = settings?.description || demo.description

  const links = [
    {
      label: "Research Team",
      href: "/team",
    },
    {
      label: "Infrastructure",
      href: "/infrastructure",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "International Journals",
      href: "/journals",
    },
    {
      label: "International Conferences (Proceedings)",
      href: "/proceedings",
    },
    {
      label: "Intellectual Property Rights (IPR)",
      href: "/ipr",
    },
    {
      label: "Books",
      href: "/books",
    },
    {
      label: "Activities",
      href: "/activities",
    },
  ]

  return (
    <footer className="mt-4 lg:mt-10">
      <div className="border-primary/30 to-primary/20 border-t-2 bg-linear-to-br from-neutral-50 from-40% pb-10">
        <div className="container grid gap-6 py-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="rounded bg-neutral-900 px-1.5 py-1">
                <Image
                  src="/assets/images/aimed.png"
                  alt="AIMED"
                  width={400}
                  height={400}
                  className="h-8 w-auto sm:h-9"
                />
              </div>
              <ISysLogo />
            </div>
            <p className="text-muted-foreground mt-1 max-w-prose text-xs">
              {toPlainText(description)}
            </p>
            <Statcounter />
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-primary font-medium md:text-lg">Address</p>
              <p className="text-muted-foreground text-xs md:text-sm">
                {settings.address}
              </p>
            </div>

            <div>
              <p className="text-primary font-medium md:text-lg">Contact</p>
              <p className="text-muted-foreground text-xs md:text-sm">
                {settings.contact}
              </p>
            </div>

            <div>
              <p className="text-primary font-medium md:text-lg">
                Opening Hour
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">
                {settings.openingHour}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-primary font-medium md:text-lg">Links</p>
              <ul className="text-muted-foreground grid grid-cols-1 gap-1 text-xs md:text-sm">
                {links.map((nav, idx) => (
                  <li key={idx}>
                    <Link href={nav.href} className="hover:underline">
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-primary/10 border-y-2">
          <div className="text-background container flex flex-col-reverse items-center justify-between gap-2 py-3 sm:flex-row">
            <p className="text-muted-foreground text-xs md:text-sm">
              ©{new Date().getFullYear()} ISys Research Group
            </p>
            <SocialMedia socialMedia={settings.socialMedia} />
          </div>
        </div>
      </div>
    </footer>
  )
}
