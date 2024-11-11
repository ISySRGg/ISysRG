export type NavigationItem = {
  label: string
  description?: string
} & ({ href: string } | { children: NavigationItem[] })
