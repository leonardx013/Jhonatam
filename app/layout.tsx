import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jhonatan Willians",
  description: "Especialista em tráfego pago",
  openGraph: {
    title: "Jhonatan Willians",
    description: "Especialista em tráfego pago",
    url: "https://jhonatanwillians.com",
    siteName: "Jhonatan Willians",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jhonatan Willians - Especialista em tráfego pago",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhonatan Willians",
    description: "Especialista em tráfego pago",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://jhonatanwillians.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/og-image.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
