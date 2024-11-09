import Link from "next/link"

import { siteConfig } from "@/config/site"

import IsysLogo from "../isys-logo"

export default function Footer() {
  return (
    <footer className="ms:mt-10 mt-4">
      <div className="rounded-t-xl border-t-2 border-primary/30 bg-gradient-to-br from-neutral-50 from-40% to-primary/20 pb-10 sm:rounded-t-[3rem]">
        <div className="container grid gap-6 py-10 sm:grid-cols-3 sm:gap-10">
          <div>
            <IsysLogo />
            <p className="mt-1 max-w-prose text-xs text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="font-medium text-primary sm:text-lg">Address</p>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Jl. Srijaya Negara, Bukit Besar, Kec. Ilir Bar. I, Kota
                Palembang, Sumatera Selatan 30128. Universitas Sriwijaya
              </p>
            </div>

            <div>
              <p className="font-medium text-primary sm:text-lg">Contact</p>
              <p className="text-xs text-muted-foreground sm:text-sm">
                (+62) 81224147003
              </p>
            </div>

            <div>
              <p className="font-medium text-primary sm:text-lg">
                Opening Hour
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">
                9 AM—4 PM every day
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="font-medium text-primary sm:text-lg">Links</p>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground sm:text-base">
                <li>
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Datasets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Activity
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-y-2 border-primary/10">
          <div className="container flex flex-col-reverse items-center justify-between gap-2 py-3 text-background sm:flex-row">
            <p className="text-xs text-muted-foreground sm:text-sm">
              ©{new Date().getFullYear()} Isys Research Group
            </p>
            <ul className="flex gap-2">
              {siteConfig.socialMedia.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="block rounded-full p-1.5 text-sm text-primary hover:bg-primary/30"
                  >
                    <item.icon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
