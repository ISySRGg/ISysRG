import React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  children?: React.ReactNode
}

const HoverableCard = React.forwardRef<HTMLDivElement, Props>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"

    return (
      <Comp
        className={cn(
          "group overflow-hidden rounded border-2 border-neutral-400/20 p-4 transition-all hover:border-primary/40 hover:bg-primary/10",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

HoverableCard.displayName = "HoverableCard"

export default HoverableCard
