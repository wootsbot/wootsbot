import type { Metadata } from 'next';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { ArrowUpLeft } from 'react-feather';

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

  const { title, publishedAt: publishedTime, summary: description, image, slug } = post;
  const ogImage = image ? `https://wootsbot.dev${image}` : `https://wootsbot.dev/api/og?title=${title}`;

  return {
    title,
    description,
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
    },
  };
}

function BlogPage({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const minutesRead = Math.round(post?.readingTime.minutes);

  console.log('post', { post });

  if (!post) {
    notFound();
  }

  return (
    <section className="antialiased px-8 max-w-[65ch] mx-auto py-10">
      <script type="application/ld+json">{JSON.stringify(post.structuredData)}</script>

      <Link href="/blog" className="flex flex-row items-center all-blogs">
        <ArrowUpLeft className="mr-2" />
        Todos los artículos
      </Link>

      <div className="mb-12 lg:mb-20">
        <h1 className="font-black text-3xl lg:text-6xl uppercase mb-5">
          <Balancer>{post.title}</Balancer>
        </h1>

        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
          <div className="bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">{post.publishedAt}</div>
          <div className="h-[0.2em] bg-neutral-800 mx-2" />

          <div className="flex flex-row items-center">
            <p className="mr-2">{minutesRead} min de lectura</p>
            <span className="mr-2">{` • `}</span>
            <div>
              <ViewCounter slug={post.slug} />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 lg:mb-20">
        <p className="text-xl mb-5">{post.summary}</p>

        {post.image && (
          <Image
            className="rounded-lg"
            src={post.image}
            alt={`Picture of ${post.title}`}
            width={1852}
            height={640}
            //placeholder="blur"
            quality="100"
          />
        )}
      </div>

      <Mdx code={post.body.code} />
    </section>
  );
}

export default BlogPage;
