import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { DocsPageHeader } from "#/components/markdown/layout/page-header";
import { MDXContent } from "#/components/markdown/mdx";
import { formatDate } from "#/lib/date";
import { posts } from "#/velite";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await props.params;
  const doc = getPageBySlug(slug);

  if (!doc) {
    return notFound();
  }

  return (
    <div className="mx-auto w-full min-w-0">
      <DocsPageHeader
        heading={doc.title}
        text={doc.description}
        readingTime={doc.metadata?.readingTime}
        publishedAt={formatDate(doc.publishedAt)}
      />
      <MDXContent code={doc.code} />
    </div>
  );
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const page = getPageBySlug(params.slug);

  if (page) {
    return { title: page.title, description: page.description };
  }
  return {};
};

const getPageBySlug = (slug: string[]) => {
  return posts.find((post) => post.slug === slug.join("/"));
};
