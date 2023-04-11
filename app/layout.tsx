import './globals.css'
import '@/node_modules/flag-icons/css/flag-icons.min.css'

import type { Metadata } from 'next'

import Navbar from '@/components/navbar/navbar'

import AnalyticsWrapper from './components/analytics'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    default: 'Bruno Gurgel',
    template: '%s | Bruno Gurgel'
  },
  description:
    "Bruno Gurgel's personal website. I'm a software engineer, currently working at @smarthis.",
  openGraph: {
    title: 'Bruno Gurgel',
    description:
      "Bruno Gurgel's personal website. I'm a software engineer, currently working at @smarthis.",
    url: 'https://brunogurgel.com',
    siteName: 'Bruno Gurgel',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Bruno Gurgel',
    card: 'summary_large_image'
  }
}
