import { Metadata } from 'next'
import './globals.css'
import { Pangolin } from 'next/font/google'

const mali = Pangolin({ subsets: ['latin'], weight:['400'] })

const name = "Bakegenie - AI Powered Assitant for Bakers"
const desc = 'Maximize efficiency and enhance customer satisfaction with Bakegenie, an advanced bakery software solution. Automate customer messaging, streamline order management, and effortlessly handle custom orders with the power of AI. Elevate your bakery business to new heights with Bakegenie.'

export const metadata: Metadata = {
  title: {
    default: name,
    template: `%s | Bakegenie`,
  },
  description:desc,
  icons: {
    apple: '/favicon/apple-touch-icon.png',
    icon: [
      '/favicon/favicon-16x16.png',
      '/favicon/favicon-32x32.png',
    ],
    shortcut: '/favicon/favicon.ico',
  },
  manifest: '/favicon/site.webmanifest',

  openGraph: {
    type: 'article',
    title: name,
    description: desc,
  },
  twitter: {
    card: 'summary_large_image',
    description: desc,
    title: name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mali.className}>{children}</body>
    </html>
  )
}
