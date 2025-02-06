import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aganitha',
  description: 'Aganitha Cognitive Solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
