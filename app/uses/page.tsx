import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import Balancer from 'react-wrap-balancer';

import { Mdx } from '@/components/mdx';

import { allOtherPages } from '@/contentlayer/generated';

export async function generateMetadata(): Promise<Metadata | undefined> {
  const usesData = allOtherPages.find((page) => page.slug === 'uses')!;

  if (!usesData) {
    return;
  }

  const { title, summary: description, image, slug } = usesData;
  const ogImage = image ? `https://wootsbot.dev${image}` : `https://wootsbot.dev/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://wootsbot.dev/uses/${slug}`,
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

function UsesPage() {
  const usesData = allOtherPages.find((page) => page.slug === 'uses')!;

  if (!usesData) {
    notFound();
  }

  return (
    <section>
      <div className="mb-12 lg:mb-24">
        <h1 className="font-black text-3xl lg:text-6xl uppercase">
          <Balancer>{usesData.title}</Balancer>
        </h1>
      </div>

      <Mdx code={usesData.body.code} />
    </section>
  );
}

export default UsesPage;
