import { useMemo } from 'react';

import Layout from '@/components/Layout';
import BlogLayout from '@/components/BlogLayout';
import Container from '@/design-system/Container';

import { getFiles, getFileBySlug } from '@/libs/mdx';
import { getMDXComponent } from 'mdx-bundler/client';

import SEO from '@/components/SEO';
import components from '@/components/MDXComponents';

function BlogSlugPage({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Container css={{ mt: '$6', mb: '$5' }} size="sm">
      <SEO title={frontMatter?.title} description={frontMatter?.summary} />

      <BlogLayout frontMatter={frontMatter}>
        <Component components={{ ...components }} />
      </BlogLayout>
    </Container>
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

BlogSlugPage.Layout = Layout;
export default BlogSlugPage;
