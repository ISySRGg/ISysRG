import Image from "next/image"

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
    <figure className="flex flex-col items-center">
      <Image
        src={image.src}
        alt={image.alt}
        width={120}
        height={120}
        className="aspect-square size-[90px] rounded object-cover object-top md:size-[120px]"
      />
      <figcaption className="flex flex-col items-center pt-1">
        <h2 className="font-bold text-primary md:text-xl">{name}</h2>
        {role && (
          <div className="rounded bg-neutral-900/5 px-2 py-0.5 md:px-4">
            <p className="text-xs font-medium md:text-sm">{role}</p>
          </div>
        )}
      </figcaption>
    </figure>
  )
}
