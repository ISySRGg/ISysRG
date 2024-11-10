export type SiteConfig = typeof siteConfig

export const siteConfig = {
  navigation: [
    {
      label: "About Us",
      children: [
        {
          label: "Research Team",
          href: "/team",
        },
        {
          label: "Infrastructure",
          href: "/infrastructure",
        },
      ],
    },
    {
      label: "Products",
      href: "/products",
      children: [
        {
          label: "Cardiacare",
          href: "/products/cardiacare",
        },
        {
          label: "Tele-OTIVA",
          href: "/products/tele-otiva",
        },
      ],
    },
    {
      label: "Datasets",
      href: "/datasets",
      children: [
        {
          label: "ECG Signal Database",
          href: "/datasets/ecg",
        },
        {
          label: "Fetal",
          href: "/datasets/fetal",
        },
        {
          label: "Infant",
          href: "/datasets/infant",
        },
        {
          label: "Pre-Cancer",
          href: "/datasets/pre-cancer",
        },
      ],
    },
    {
      label: "Publication",
      href: "publication",
      children: [
        {
          label: "Books",
          href: "/publication/books",
        },
        {
          label: "Intelectual Property Rights (IPR)",
          href: "/publication/ipr",
        },
        {
          label: "International Conference (Proceedings)",
          href: "/publication/proceedings",
        },
        {
          label: "International Journals",
          href: "/publication/journals",
        },
      ],
    },
    { label: "Activity", href: "/activities" },
  ],
}
