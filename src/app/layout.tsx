import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lungscan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased dark`}>{children}</body>
    </html>
  )
}
