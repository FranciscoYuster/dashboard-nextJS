import type React from "react"
import "@/app/globals.css"
import { inter } from "@/app/ui/fonts/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
