import React from "react"

import ISysLogo from "../isys-logo"
import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"

export default function Header() {
  return (
    <header className="border-y-2 border-white/10">
      <div className="container flex h-14 items-center justify-between sm:h-fit">
        <div className="flex items-center gap-6">
          <ISysLogo />
        </div>

        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  )
}
