import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

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
      <body className={`${rubik.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
