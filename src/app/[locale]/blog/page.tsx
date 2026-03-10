import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { ROUTES } from '@/constants/routes'
import { generatePageMetadata } from '@/lib/metadata'
import { blogPosts } from '@/data/blog-posts'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.blog' })
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/blog',
    locale,
  })
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title={t('blog.title')} subtitle={t('blog.subtitle')} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden p-0">
              <div className="aspect-video bg-gradient-to-br from-brand-green/20 to-brand-navy/20" />
              <div className="p-6">
                <span className="inline-block rounded-full bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">
                  {post.category}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-brand-navy">
                  {t(post.title)}
                </h3>
                <p className="mt-2 font-body text-sm text-brand-navy/70">
                  {t(post.excerpt)}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-body text-xs text-brand-navy/50">
                    {post.date} · {post.author}
                  </span>
                  <Link
                    href={`${ROUTES.blog}/${post.slug}`}
                    className="text-sm font-medium text-brand-green transition-colors hover:text-brand-green/80"
                  >
                    {t('blog.read_more')} →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
