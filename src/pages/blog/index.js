import { useState } from 'react';

import { getAllFilesFrontMatter } from '@/libs/mdx';
import BlogPreview from '@/components/BlogPreview';
import Container from '@/design-system/Container';
import Layout from '@/components/Layout';

function BlogsPage({ posts }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Layout>
      <Container css={{ mt: '$6' }} size={1}>
        {filteredBlogPosts?.map((blog) => (
          <BlogPreview key={blog.title} {...blog} />
        ))}
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default BlogsPage;
