import { useState } from 'react';

import { getAllFilesFrontMatter } from '@/libs/mdx';
import BlogPreview from '@/components/BlogPreview';
import Container from '@/design-system/Container';
import Flex from '@/design-system/Flex';
import Layout from '@/components/Layout';

function BlogsPage({ posts }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter?.title?.toLowerCase()?.includes(searchValue?.toLowerCase()));

  return (
    <Container css={{ mt: '$6' }} size="sm">
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
