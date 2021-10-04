import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getFiles, getFileBySlug } from '@/libs/mdx';

import Container from '@/design-system/Container';
import components from '@/components/MDXComponents';
import BlogLayout from '@/components/BlogLayout';
import Layout from '@/components/Layout';

export default function BlogPage({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout>
      <Container css={{ mt: '$6', mb: '$5' }} size={1}>
        <BlogLayout frontMatter={frontMatter}>
          <Component components={{ ...components }} />
        </BlogLayout>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: { ...post } };
}
