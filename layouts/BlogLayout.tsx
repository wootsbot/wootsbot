import * as React from 'react';

import Image from 'next/image';

import dayjs from 'dayjs';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';
import Text from '@/design-system/Text';
import Flex from '@/design-system/Flex';
import Stack from '@/design-system/Stack';
import Heading from '@/design-system/Heading';
import Container from '@/design-system/Container';

import PostViewCounter from '@/components/PostViewCounter';

import type { Blog } from '@/contentlayer/generated';

import SEO from '@/components/SEO';

const editUrl = (slug: string) => `https://github.com/wootsbot/wootsbot/edit/main/data/blog/${slug}.mdx`;

const shimmer = (w?: string | number, h?: string | number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const Avatar = styled(Image, {
  borderRadius: '$full',
});

const StyledImage = styled(Image, {
  borderRadius: '$md',
});

const StyledCover = styled(Box, {
  width: '100%',
  maxWidth: '100%',
  height: '100%',
  maxHeight: '100%',
  mt: '$3',
});

export type BlogLayout = {
  children: React.ReactNode;
  post: Blog;
};

function BlogLayout({ children, post }: BlogLayout) {
  const { title, readingTime, publishedAt, image, summary } = post;

  const minutesRead = Math.round(readingTime.minutes);
  const publishedAtFormate = dayjs(publishedAt).format('MMMM D, YYYY');

  return (
    <Container css={{ mt: '$6', mb: '$5' }} size="sm">
      <SEO
        title={title}
        description={summary}
        openGraph={{
          images: [
            {
              url: `https://www.wootsbot.dev${image}`,
              width: 1852,
              height: 640,
              alt: title,
            },
          ],
        }}
      />

      {/* <BlogSeo
        title={title}
        authorName="Jorge Luis Calleja Alavardo"
        description={summary}
        datePublished={publishedAtFormate}
      /> */}

      <article>
        <Box css={{ mb: '$3' }}>
          <Heading size="2xl" css={{ textAlign: 'center' }}>
            {title}
          </Heading>
        </Box>

        <Text size="2xl" css={{ lineHeight: 1.625, textAlign: 'center', 'text-size-adjust': '100%', mb: 40, mt: 40 }}>
          {summary}
        </Text>

        <Flex
          flexDirection={{ '@initial': 'row', '@phone': 'column' }}
          alignItems={{ '@initial': 'center', '@phone': 'start' }}
          justifyContent="between"
          gap={1}
        >
          <Flex alignItems="center" gap={1}>
            <Avatar alt="wootsbot" height={30} width={30} src="/static/images/yoV2.jpg" />
            <Stack spacing={1}>
              <Text as="span" size="sm" css={{ fontWeight: '$light' }}>
                {'wootsbot / '}
              </Text>

              <Text as="span" size="sm" css={{ fontWeight: '$light' }}>
                {publishedAtFormate}
              </Text>
            </Stack>
          </Flex>

          <Flex gap={1}>
            <Text as="span" size="sm" css={{ fontWeight: '$light' }}>
              {minutesRead} min de lectura
            </Text>
            {` • `}
            <PostViewCounter slug={post.slug} />
          </Flex>
        </Flex>

        {image && (
          <StyledCover>
            <StyledImage
              src={image}
              alt={`Picture of ${title}`}
              width={1852}
              height={640}
              layout="responsive"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 300))}`}
              quality="100"
            />
          </StyledCover>
        )}

        <Box css={{ mt: '$5' }} className="wootsbot-article">
          {children}
        </Box>

        <a href={editUrl(post.slug)} target="_blank" rel="noopener noreferrer">
          {'Edit on GitHub'}
        </a>
      </article>
    </Container>
  );
}

export default BlogLayout;
