import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tw = (strings: TemplateStringsArray, ...values: any[]) =>
  String.raw({ raw: strings }, ...values)

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return date.toLocaleDateString(undefined, options)
}

export function truncateString(str: string, num: number = 60): string {
  return str.length <= num ? str : str.slice(0, num) + "..."
}

export const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
