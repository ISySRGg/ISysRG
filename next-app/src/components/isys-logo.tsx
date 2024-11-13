import Image from "next/image"
import Link from "next/link"

export default function ISysLogo() {
  return (
    <Link href="/" className="group flex items-center gap-1.5 sm:gap-2">
      <Image
        src="/isysrg.svg"
        alt="ISysRG"
        width={32}
        height={32}
        className="mt-2 size-7 transition-all group-hover:grayscale sm:size-9"
      />
      <p className="flex flex-col">
        <span className="text-lg font-bold sm:text-3xl">ISys</span>
        <span className="-mt-1 text-xs sm:text-sm">Research Group</span>
      </p>
    </Link>
  )
}
