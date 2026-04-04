import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ThemeProvider from '@/components/theme-provider'
import { StructuredData } from '@/components/structured-data'
import {
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
} from '@/lib/site'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'] })

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | Backend & Full Stack Engineer`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: siteUrl }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    'Salim Baktash',
    'Mohammad Salim',
    'backend engineer',
    'full stack developer',
    'Go developer',
    'Golang',
    'TypeScript developer',
    'NestJS developer',
    'Next.js developer',
    'microservices',
    'REST API',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'remote software engineer',
    'API development',
    'jobs.af',
    'vector search',
    'pgvector',
    'LLM engineering',
    'machine learning',
    'software engineer portfolio',
    'starkbaknet',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/avatar.png',
        width: 1200,
        height: 1200,
        alt: `${SITE_NAME} — Backend & Full Stack Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    creator: '@StarkBakTec',
    images: ['/avatar.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} font-sans antialiased`}>
        <StructuredData />
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
