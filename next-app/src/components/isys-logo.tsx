import Image from "next/image"
import Link from "next/link"

export default function ISysLogo() {
  return (
    <Link href="/" className="group flex items-center gap-2">
      <Image
        src="/isysrg.svg"
        alt="IsysRG"
        width={32}
        height={32}
        className="mt-2 transition-all group-hover:grayscale"
      />
      <p className="flex flex-col">
        <span className="text-3xl font-bold">Isys</span>
        <span className="-mt-1 text-sm">Research Group</span>
      </p>
    </Link>
  )
}
