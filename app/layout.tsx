import type { Metadata } from 'next'
import { Playfair_Display, JetBrains_Mono, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Dylan Gamero — Developer Portfolio',
  description: 'Full-Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${jetbrains.variable} ${dmSans.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}