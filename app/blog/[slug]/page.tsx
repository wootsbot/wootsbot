import type { Metadata } from 'next';
import Link from 'next/link';

import { notFound } from 'next/navigation';
import Image from 'next/image';

import PhotoIcon from '@heroicons/react/24/outline/PhotoIcon';
import ArrowLeftIcon from '@heroicons/react/24/outline/ArrowLeftIcon';

import { intlFormat } from 'date-fns';

import Balancer from 'react-wrap-balancer';

import ViewCounter from '@/components/PostViewCounter';

import { Mdx } from '@/components/mdx';

import { allBlogs } from '@/contentlayer/generated';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, publishedAt: publishedTime, summary: description, image, slug, tags } = post;

  let ogImage = image ? `https://wootsbot.dev${image}` : `https://wootsbot.dev/api/og?title=${title}`;
  const tagsList = tags?.split(',');

  return {
    title,
    description,
    creator: 'Jorge Luis Calleja Alvarado',
    keywords: tagsList,
    bookmarks: [`https://wootsbot.dev/blog/${slug}`],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://wootsbot.dev/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: 'Jorge Luis Calleja Alvarado',
    },
  };
}

function BlogPage({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const minutesRead = Math.round(post?.readingTime.minutes);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script type="application/ld+json">{JSON.stringify(post.structuredData)}</script>

      <div className="mb-16">
        <Link
          aria-label="Link to Articulos"
          className="cursor-pointer flex items-center gap-4"
          rel="noopener noreferrer"
          href="/blog"
        >
          <div className="px-3 py-1 text-sm font-black border-2 border-white rounded-full gap-x-1 hover-scale">
            <ArrowLeftIcon className="w-5" />
          </div>

          <span className="text-base font-normal">Blog</span>
        </Link>
      </div>

      <div className="mb-8 lg:mb-16">
        <h1 className="text-2xl lg:text-3xl">
          <Balancer>{post.title}</Balancer>
        </h1>
      </div>

      <div className="mb-8 lg:mb-16">
        <div>
          <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-4 font-mono text-sm max-w-[650px]">
            <div className="flex flex-row space-x-3">
              <div className="bg-neutral-950 rounded-md border border-white px-2 py-1 tracking-tighter">
                {intlFormat(
                  new Date(post?.publishedAt),
                  {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  },
                  {
                    locale: 'es-MX',
                  },
                )}
              </div>

              {post?.updatedAt && (
                <div className="bg-green-800 rounded-md px-2 py-1 tracking-tighter">
                  {intlFormat(
                    new Date(post?.updatedAt),
                    {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    },
                    {
                      locale: 'es-MX',
                    },
                  )}
                </div>
              )}
            </div>
            <div className="h-[0.15em] bg-white/20 mx-2" />

            <div className="flex flex-row items-center">
              <p className="mr-2">{minutesRead} min de lectura</p>
              <span className="mr-2">{` • `}</span>
              <div>
                <ViewCounter slug={post.slug} isDetails />
              </div>
            </div>
          </div>

          {post.image && (
            <Image
              className="rounded-lg"
              src={post.image}
              alt={`Picture of ${post.title}`}
              width={1024}
              height={686}
              quality={85}
            />
          )}
          <figcaption className="flex flex-row items-center space-x-2 mt-2 justify-end">
            <PhotoIcon className="w-4 text-gray-600" />
            <p className="text-gray-600 text-xs">{post?.creditImage ?? 'Crédito de la imagen por Jorge L. Calleja'}</p>
          </figcaption>
        </div>
      </div>

      <Mdx code={post.body.code} />
    </section>
  );
}

export default BlogPage;
