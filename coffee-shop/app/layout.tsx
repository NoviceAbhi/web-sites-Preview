import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brew Haven - Premium Coffee Experience',
  description: 'Discover the finest coffee beans and artisanal brewing at Brew Haven',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}