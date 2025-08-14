import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Roasted Dreams - Premium Coffee Experience',
  description: 'Discover the finest coffee beans and artisanal brewing at Roasted Dreams. Where every cup tells a story.',
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