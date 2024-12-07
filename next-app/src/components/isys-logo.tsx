import Image from "next/image"
import Link from "next/link"

import { poppins } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function ISysLogo() {
  return (
    <Link href="/" className="group flex items-center gap-1.5 sm:gap-1">
      <Image
        src="/isysrg.svg"
        alt="ISysRG"
        width={32}
        height={32}
        className="size-7 transition-all group-hover:grayscale sm:size-9"
      />
      <p className={cn(poppins.className, "flex flex-col")}>
        <span className="mt-1 text-lg font-semibold italic sm:text-4xl">
          ISys
        </span>
        <span className="-mt-1.5 ml-12 text-[8px] font-light uppercase">
          Research Group
        </span>
      </p>
    </Link>
  )
}
