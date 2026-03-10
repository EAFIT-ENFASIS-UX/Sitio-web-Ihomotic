import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { ROUTES } from '@/constants/routes'
import { blogPosts } from '@/data/blog-posts'
import { SITE_NAME, SITE_URL } from '@/constants/site'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const t = await getTranslations({ locale })
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Not Found' }
  }

  const title = t(post.title)

  return {
    title: `${title} | ${SITE_NAME}`,
    description: t(post.excerpt),
    openGraph: {
      title,
      description: t(post.excerpt),
      images: [post.image],
      type: 'article',
    },
    twitter: { card: 'summary_large_image' },
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog/${slug}`,
      languages: {
        es: `${SITE_URL}/es/blog/${slug}`,
        en: `${SITE_URL}/en/blog/${slug}`,
      },
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale })
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <article className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4">
        {/* Hero */}
        <div className="mb-8 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-brand-green/20 to-brand-navy/20" />

        <span className="inline-block rounded-full bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">
          {post.category}
        </span>

        <h1 className="mt-4 font-heading text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl">
          {t(post.title)}
        </h1>

        <div className="mt-4 flex items-center gap-4 font-body text-sm text-brand-navy/50">
          <span>{post.author}</span>
          <span>·</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>

        {/* Content */}
        <div className="prose prose-lg mt-10 max-w-none">
          {t(post.content)
            .split('\n\n')
            .map((paragraph, i) => (
              <p key={i} className="mb-4 font-body leading-relaxed text-brand-navy/80">
                {paragraph}
              </p>
            ))}
        </div>

        {/* Related posts */}
        <div className="mt-16 border-t border-brand-light pt-12">
          <h2 className="mb-8 font-heading text-2xl font-bold text-brand-navy">
            {t('blog.related_posts')}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`${ROUTES.blog}/${related.slug}`}
                className="group rounded-xl bg-brand-light p-4 transition-colors hover:bg-brand-green/10"
              >
                <span className="text-xs font-medium text-brand-green">{related.category}</span>
                <h3 className="mt-2 font-heading text-sm font-semibold text-brand-navy group-hover:text-brand-green">
                  {t(related.title)}
                </h3>
                <p className="mt-1 text-xs text-brand-navy/50">{related.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
