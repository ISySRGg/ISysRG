interface Props {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function BasePage({ title, subtitle, children }: Props) {
  return (
    <main className="container min-h-[calc(100dvh-10rem)] pt-10 md:pt-20">
      <header>
        <h1 className="text-4xl font-medium text-primary md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="uppercase text-muted-foreground">{subtitle}</p>
        )}
      </header>

      {children}
    </main>
  )
}
