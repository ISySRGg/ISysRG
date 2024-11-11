export default function PublicationList({
  children,
}: {
  children: React.ReactNode
}) {
  return <ul className="divide-y pt-10 md:pt-20">{children}</ul>
}
