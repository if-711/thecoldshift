import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thecoldshift.com'

  const pages = [
    { path: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/field/', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/system/', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/evidence/', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/safety/', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/about/', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/contact/', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/editorial-standards/', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/privacy/', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms/', changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString().slice(0, 10),
    changeFrequency,
    priority,
  }))
}
