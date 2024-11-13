import Image from "next/image"
import { User } from "lucide-react"

interface Props {
  name: string
  role?: string
  image: {
    src: string
    alt: string
  }
}

export default function ResearcherFigure({ name, role, image }: Props) {
  return (
    <figure className="flex grow flex-col items-center md:basis-1/5">
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={120}
          height={120}
          className="aspect-square size-[90px] rounded object-cover object-top md:size-[120px]"
        />
      ) : (
        <div className="flex size-[90px] flex-none items-center justify-center rounded bg-primary/10 text-primary md:size-[120px]">
          <User className="size-[50%]" />
        </div>
      )}

      <figcaption className="flex flex-col items-center pt-1 text-center">
        <h2 className="font-bold text-primary">{name}</h2>
        {role && (
          <div className="rounded bg-neutral-900/5 px-2 py-0.5 md:px-4">
            <p className="text-xs font-medium md:text-sm">{role}</p>
          </div>
        )}
      </figcaption>
    </figure>
  )
}
