import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"

export default function DesktopNavigation() {
  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList className="divide-x-2 divide-white/10 border-x-2 border-white/10">
        {siteConfig.mainNav.map((nav, idxA) =>
          nav.children ? (
            <NavigationMenuItem key={idxA}>
              <NavigationMenuTrigger>{nav.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[680px]">
                  {nav.children.map((child, keyB) => (
                    <ListItem
                      key={keyB}
                      title={child.label}
                      href={child.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={idxA}>
              <Link href={nav.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {nav.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none rounded px-4 py-6 leading-none tracking-wide no-underline outline-none transition-colors hover:bg-primary/30 hover:text-white focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between text-lg leading-none">
            {title}{" "}
            <ChevronRight className="size-[0.8em] text-primary group-hover:text-white" />
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
