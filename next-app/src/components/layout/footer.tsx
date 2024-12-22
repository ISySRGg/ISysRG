import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import * as demo from "@/sanity/demo"
import { settingsQuery } from "@/sanity/queries"
import { toPlainText } from "next-sanity"

import { Settings } from "@/types/sanity.types"

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
      <div className="border-t-2 border-primary/30 bg-gradient-to-br from-neutral-50 from-40% to-primary/20 pb-10">
        <div className="container grid gap-6 py-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <ISysLogo />
            <p className="mt-1 max-w-prose text-xs text-muted-foreground">
              {toPlainText(description)}
            </p>
            <div className="statcounter">
              <a
                title="Web Analytics Made Easy - Statcounter"
                href="https://statcounter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="statcounter"
                  src="https://c.statcounter.com/13071556/0/5359c3b5/0/"
                  alt="Web Analytics Made Easy - Statcounter"
                  width={100}
                  height={100}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="font-medium text-primary md:text-lg">Address</p>
              <p className="text-xs text-muted-foreground md:text-sm">
                {settings.address}
              </p>
            </div>

            <div>
              <p className="font-medium text-primary md:text-lg">Contact</p>
              <p className="text-xs text-muted-foreground md:text-sm">
                {settings.contact}
              </p>
            </div>

            <div>
              <p className="font-medium text-primary md:text-lg">
                Opening Hour
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">
                {settings.openingHour}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="font-medium text-primary md:text-lg">Links</p>
              <ul className="grid grid-cols-1 gap-1 text-xs text-muted-foreground md:text-sm">
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
        <div className="border-y-2 border-primary/10">
          <div className="container flex flex-col-reverse items-center justify-between gap-2 py-3 text-background sm:flex-row">
            <p className="text-xs text-muted-foreground md:text-sm">
              ©{new Date().getFullYear()} ISys Research Group
            </p>
            <SocialMedia socialMedia={settings.socialMedia} />
          </div>
        </div>
      </div>
    </footer>
  )
}
