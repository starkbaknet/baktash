import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '@/lib/site'

export function StructuredData() {
  const base = getSiteUrl()

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        url: base,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: 'en',
        publisher: { '@id': `${base}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${base}/#webpage`,
        url: base,
        name: `${SITE_NAME} — Portfolio`,
        description: SITE_TAGLINE,
        isPartOf: { '@id': `${base}/#website` },
        mainEntity: { '@id': `${base}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${base}/#person`,
        name: SITE_NAME,
        url: base,
        image: `${base}/avatar.png`,
        jobTitle: 'Backend & Full Stack Engineer',
        description: SITE_DESCRIPTION,
        email: 'baktash@starkbak.net',
        sameAs: [
          'https://github.com/starkbaknet',
          'https://www.linkedin.com/in/mohammad-salim-8453a729b',
          'https://twitter.com/StarkBakTec',
          'https://www.instagram.com/starkbaktec',
        ],
        knowsAbout: [
          'Go',
          'TypeScript',
          'JavaScript',
          'Python',
          'NestJS',
          'Next.js',
          'PostgreSQL',
          'Microservices',
          'REST API',
          'Docker',
          'Kubernetes',
          'Machine Learning',
          'Vector databases',
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'AF',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
