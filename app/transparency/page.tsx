import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { Mdx } from '@/components/mdx';
import HeaderPage from '@/components/headerPage';

import { allOtherPages } from '@/contentlayer/generated';

export async function generateMetadata(): Promise<Metadata | undefined> {
  const transparency = allOtherPages.find((page) => page.slug === 'transparency')!;

  if (!transparency) {
    return;
  }

  const { title, summary: description, image, slug } = transparency;
  const ogImage = image ? `https://wootsbot.dev${image}` : `https://wootsbot.dev/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://wootsbot.dev/transparency/${slug}`,
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

function TransparencyPage() {
  const transparency = allOtherPages.find((page) => page.slug === 'transparency')!;

  if (!transparency) {
    notFound();
  }

  return (
    <section>
      <HeaderPage title={transparency.title} summary={transparency.summary as string} />
      <Mdx code={transparency.body.code} />
    </section>
  );
}

export default TransparencyPage;
