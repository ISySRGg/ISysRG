interface Props {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function BasePage({ title, subtitle, children }: Props) {
  return (
    <main className="min-h-[calc(100dvh-10rem)]">
      <header className="mb-1 border-b-2 border-primary/30 pt-8 md:pb-2 md:pt-14">
        <div className="container">
          {subtitle && (
            <p className="uppercase text-muted-foreground">{subtitle}</p>
          )}
          <div className="max-w-prose">
            <h1 className="text-3xl font-medium text-neutral-700 md:text-4xl">
              {title}
            </h1>
          </div>
        </div>
      </header>

      {children}
    </main>
  )
}
