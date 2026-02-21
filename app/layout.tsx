import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Zuetech - SLDB",
=======
  title: "Zuetech - UCCS",
>>>>>>> caa565f15aaa528d4a5e6f1175b65fb9fccba39f
  description: "Created with Zuetech",
  generator: "Zuetech.com",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
