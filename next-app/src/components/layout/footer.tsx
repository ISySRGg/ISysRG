import Link from "next/link"

import { siteConfig } from "@/config/site"

import IsysLogo from "../isys-logo"

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="rounded-t-[3rem] border-t-2 border-primary/30 bg-gradient-to-br from-neutral-50 from-40% to-primary/20 pb-10">
        <div className="container grid grid-cols-3 gap-10 py-10">
          <div>
            <IsysLogo />
            <p className="mt-1 max-w-prose text-xs text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-lg font-medium text-primary">Address</p>
              <p className="text-sm text-muted-foreground">
                Jl. Srijaya Negara, Bukit Besar, Kec. Ilir Bar. I, Kota
                Palembang, Sumatera Selatan 30128. Universitas Sriwijaya
              </p>
            </div>

            <div>
              <p className="text-lg font-medium text-primary">Contact</p>
              <p className="text-sm text-muted-foreground">(+62) 81224147003</p>
            </div>

            <div>
              <p className="text-lg font-medium text-primary">Opening Hour</p>
              <p className="text-sm text-muted-foreground">
                9 AM—4 PM every day
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-lg font-medium text-primary">Links</p>
              <ul className="flex flex-col gap-2 text-muted-foreground">
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
          <div className="container flex items-center justify-between py-3 text-background">
            <p className="text-sm text-muted-foreground">
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
