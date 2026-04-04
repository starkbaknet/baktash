/**
 * Canonical origin for SEO (metadataBase, Open Graph, sitemap, JSON-LD).
 * Prefer NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 * On Vercel, VERCEL_URL is used when NEXT_PUBLIC_SITE_URL is unset.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '')
  if (explicit) return explicit
  const vercel = process.env.VERCEL_URL?.replace(/^https?:\/\//, '').replace(/\/$/, '')
  if (vercel) return `https://${vercel}`
  return 'http://localhost:3000'
}

export const SITE_NAME = 'Salim Baktash'

export const SITE_TAGLINE =
  'Backend & Full Stack Engineer — Go, TypeScript, NestJS, Next.js, microservices, and AI/ML'

export const SITE_DESCRIPTION =
  'Portfolio of Salim Baktash, backend and full-stack engineer with 4+ years building scalable APIs, microservices (Go, NestJS), and modern web apps (Next.js, TypeScript, PostgreSQL). Remote-ready; experience with jobs.af, AI tooling, vector search, and LLM engineering.'
