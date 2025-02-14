import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn, tw } from "@/lib/utils"

const buttonVariants = cva(
  tw`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default: tw`bg-primary text-primary-foreground shadow-sm hover:bg-primary/90`,
        destructive: tw`bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90`,
        outline: tw`border border-input shadow-xs hover:bg-accent hover:text-accent-foreground`,
        secondary: tw`bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80`,
        ghost: tw`hover:bg-accent hover:text-accent-foreground`,
        link: tw`text-primary no-underline underline-offset-4 hover:underline`,
      },
      size: {
        default: tw`h-9 px-4 py-2`,
        sm: tw`h-8 px-3 text-xs`,
        lg: tw`h-10 px-8`,
        xl: tw`h-12 px-10 text-base`,
        icon: tw`h-9 w-9`,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
