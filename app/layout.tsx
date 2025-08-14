import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FitnessPro - Premium Gym & Fitness Center',
  description: 'Transform your body and mind at FitnessPro. Premium gym facilities with live crowd tracking, personalized training plans, and comprehensive fitness management.',
  keywords: 'gym, fitness, workout, training, health, wellness, live tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-300 text-white`}>
        {children}
      </body>
    </html>
  )
}