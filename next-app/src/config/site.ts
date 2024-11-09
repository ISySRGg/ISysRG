import { Facebook, Instagram, Linkedin } from "lucide-react"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: "IsysRG",
  description:
    "The Intelligent Systems Research Group (ISysRG) is based at the Faculty of Computer Science, Universitas Sriwijaya. This research group specializes in the theory and application of systems that understand, reason, learn, and act intelligently.",
  mainNav: [
    {
      label: "About Us",
      children: [
        {
          label: "Research Team",
          href: "/team",
        },
        {
          label: "Infrascructure",
          href: "/infrascructure",
        },
      ],
    },
    {
      label: "Products",
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
    { label: "Activity", href: "/activity" },
  ],
  socialMedia: [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
    },
  ],
}
