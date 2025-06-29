import Image from "next/image"
import Link from "next/link"
import { NavigationItem } from "@/types"

import ISysLogo from "../isys-logo"
import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"

export default function Header({
  navigationData,
}: {
  navigationData: NavigationItem[]
}) {
  return (
    <header className="z-40 border-y-2 border-white/10">
      <div className="container flex h-14 items-center justify-between sm:h-fit">
        <div className="flex items-center divide-x-2 divide-neutral-500/50">
          <div className="pr-3 sm:pr-4">
            <Link href="https://unsri.ac.id">
              <Image
                src="/unsri.svg"
                alt="Unsri"
                width={44}
                height={44}
                className="size-9 object-contain sm:size-12"
              />
            </Link>
          </div>
          <div className="pl-3 sm:pl-4">
            <ISysLogo />
          </div>
        </div>

        <DesktopNavigation navigation={navigationData} />
        <MobileNavigation navigation={navigationData} />
      </div>
    </header>
  )
}
