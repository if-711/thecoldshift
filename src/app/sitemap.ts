import type { MetadataRoute } from 'next'
import { claims, sources } from '@/lib/content/schema'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thecoldshift.com'

  const staticPages = [
    { path: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
    // Field guide pages
    { path: '/field/signal/', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/field/notice/', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/field/input/', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/field/practice/', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/field/choice/', changeFrequency: 'monthly' as const, priority: 0.9 },
    // System
    { path: '/system/', changeFrequency: 'monthly' as const, priority: 0.9 },
    // Evidence
    { path: '/evidence/', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/evidence/claims/', changeFrequency: 'monthly' as const, priority: 0.8 },
    // Core pages
    { path: '/safety/', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/about/', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/editorial-standards/', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/contact/', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/privacy/', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms/', changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  // Dynamic evidence claim pages
  const claimPages = claims
    .filter((c) => c.approvalStatus === 'approved')
    .map((c) => ({
      path: `/evidence/claims/${c.id}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  // Dynamic source pages
  const sourcePages = sources.map((s) => ({
    path: `/evidence/sources/${s.id}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const allPages = [...staticPages, ...claimPages, ...sourcePages]

  return allPages.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString().slice(0, 10),
    changeFrequency,
    priority,
  }))
}
