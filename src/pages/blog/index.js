import { useState } from 'react';
import dynamic from 'next/dynamic';

import Flex from '@/design-system/Flex';
import Container from '@/design-system/Container';
import BlogPreview from '@/components/BlogPreview';

import { getAllFilesFrontMatter } from '@/libs/mdx';

import Layout from '@/components/Layout';

const SEO = dynamic(() => import('@/components/SEO'));

function BlogsPage({ posts }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter?.title?.toLowerCase()?.includes(searchValue?.toLowerCase()));

  return (
    <Container css={{ mt: '$6' }} size="sm">
      <SEO
        title="Blog – wootsbot dev"
        description="Creo que entre más compartas, más aprendes, La idea es brindar herramientas a los estudiantes para crear un mejor software."
      />

      <Flex flexDirection="column" gap={6}>
        {filteredBlogPosts?.map((blog) => (
          <BlogPreview key={blog.title} {...blog} />
        ))}
      </Flex>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

BlogsPage.Layout = Layout;
export default BlogsPage;
