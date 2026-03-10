import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/constants/site'
import { blogPosts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['es', 'en']
  const pages = ['', '/about', '/services', '/projects', '/faq', '/blog', '/contact']

  const staticPages = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${SITE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  )

  const blogPages = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${SITE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...staticPages, ...blogPages]
}
