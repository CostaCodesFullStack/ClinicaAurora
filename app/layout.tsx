import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['300','400','500','600'], style: ['normal','italic'] })
import './globals.css'

export const metadata: Metadata = {
  title: 'Clínica Aurora | Estética Avançada',
  description: 'Clínica Aurora — estética avançada, atendimento personalizado e tratamentos pensados para realçar sua essência.',
  generator: 'Blaze System™',
  openGraph: {
    title: 'Clínica Aurora | Estética Avançada',
    description: 'Estética avançada para realçar sua essência.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F3EFEA' },
    { media: '(prefers-color-scheme: dark)', color: '#1D1B19' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
