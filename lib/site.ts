/**
 * Canonical origin for SEO (metadataBase, Open Graph, sitemap, JSON-LD).
 * Prefer NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 * On Vercel, VERCEL_URL is used when NEXT_PUBLIC_SITE_URL is unset.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
    ?.trim()
    .replace(/\/$/, '')

  if (explicit) return explicit

  const vercel = process.env.VERCEL_URL
    ?.replace(/^https?:\/\//, '')
    .replace(/\/$/, '')

  if (vercel) return `https://${vercel}`

  return 'http://localhost:3000'
}

export const SITE_NAME = 'Salim Baktash'

export const SITE_TAGLINE =
  'Backend & Full Stack Engineer — Go, TypeScript, NestJS, Next.js, TanStack Start, microservices, and AI/ML'

export const SITE_DESCRIPTION =
  "I'm Salim Baktash, a backend and full-stack engineer with 5+ years of experience building scalable APIs, microservices with Go and NestJS, and modern web applications using Next.js and TypeScript. I focus on performance, clean architecture, and real-world impact—working with PostgreSQL, distributed systems, AI tooling, vector search, and LLM-powered applications. I'm remote-ready and experienced in delivering production-grade systems."