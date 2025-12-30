import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Desert Spray Foaming | Top-Quality Insulation Solutions in Seminole, TX',
  description: 'At Desert Spray Foaming, we prioritize your comfort and well-being. Our expert insulation services allow you to enjoy a cozy, energy-efficient, and healthy indoor environment year-round.',
  keywords: 'spray foam insulation, attic insulation, commercial insulation, insulation removal, Seminole TX, West Texas insulation',
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
