"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import ISysLogo from "../isys-logo"
import MenuButton from "../menu-button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible"

export default function MobileNavigation() {
  const [mobileNavigation, setMobileNavigation] = useState({ opened: false })

  const pathname = usePathname()

  function handleToggleMobileNavigation() {
    setMobileNavigation((prev) => {
      return {
        ...prev,
        opened: !mobileNavigation.opened,
      }
    })
  }

  function handleCloseMobileNavigation() {
    setMobileNavigation((prev) => {
      return {
        ...prev,
        opened: false,
      }
    })
  }

  useEffect(() => {
    handleCloseMobileNavigation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <MenuButton
        onClick={handleToggleMobileNavigation}
        opened={mobileNavigation.opened}
        className="md:hidden"
      />

      {mobileNavigation.opened && (
        <div
          className={cn(
            "no-doc-scroll fixed inset-x-0 top-0 z-50 flex h-dvh w-full flex-col bg-neutral-950 md:hidden"
          )}
        >
          <header className="border-y-2 border-white/10">
            <div className="container flex h-14 items-center justify-between sm:h-fit">
              <div className="flex items-center gap-6">
                <ISysLogo />
              </div>

              <MenuButton
                onClick={handleToggleMobileNavigation}
                opened={mobileNavigation.opened}
                className="md:hidden"
              />
            </div>
          </header>

          <div className="container flex flex-col gap-y-8 pt-6 text-xl text-white">
            {siteConfig.mainNav.map((navigation, key) => (
              <div key={key} className="w-full">
                {navigation.children ? (
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <button className="flex w-full flex-row items-center justify-between text-gray-100 [&[data-state=open]>svg]:-rotate-180">
                        <span>{navigation.label}</span>
                        <ChevronDown
                          size="1em"
                          className="transition-transform duration-200"
                        />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="ml-1 mt-6 flex flex-col gap-y-6 border-l-2 border-primary/40 pl-4">
                        {navigation.children.map(
                          (subnavigation, subkey: number) => (
                            <div key={subkey}>
                              <Link
                                onClick={handleCloseMobileNavigation}
                                href={subnavigation.href}
                                className="block focus:underline"
                              >
                                {subnavigation.label}
                              </Link>
                            </div>
                          )
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    onClick={handleCloseMobileNavigation}
                    href={navigation.href}
                    className="block focus:underline"
                  >
                    {navigation.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
