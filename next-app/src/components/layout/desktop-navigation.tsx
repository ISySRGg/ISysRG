import React from "react"
import Link from "next/link"
import { NavigationItem } from "@/types"
import { ChevronRight } from "lucide-react"

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

interface Props {
  navigation: NavigationItem[]
}

export default function DesktopNavigation({ navigation }: Props) {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="divide-x-2 divide-white/10 border-x-2 border-white/10">
        {navigation.map((navigationItem) =>
          "children" in navigationItem ? (
            <NavigationMenuItem key={navigationItem.label}>
              <NavigationMenuTrigger>
                {navigationItem.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] p-4 lg:w-[680px] lg:grid-cols-2">
                  {navigationItem.children.map(
                    (navigationChild) =>
                      "href" in navigationChild && (
                        <ListItem
                          key={navigationChild.label}
                          title={navigationChild.label}
                          description={navigationChild.description}
                          href={navigationChild.href}
                        />
                      )
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={navigationItem.label}>
              <Link href={navigationItem.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navigationItem.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  description,
  href,
}: {
  title: string
  description?: string
  href: string
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "group block select-none rounded px-4 py-6 leading-none tracking-wide no-underline outline-none transition-colors hover:bg-primary/10 hover:text-white focus:bg-accent focus:text-accent-foreground"
          )}
          href={href}
        >
          <div className="flex h-full items-center justify-between gap-2 text-lg leading-none">
            <div>
              <p>{title}</p>
              {description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
            <div>
              <ChevronRight className="size-[0.8em] text-primary group-hover:text-white" />
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
