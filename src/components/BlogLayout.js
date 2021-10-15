import Image from 'next/image';

import dayjs from 'dayjs';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';
import Text from '@/design-system/Text';
import Flex from '@/design-system/Flex';
import Stack from '@/design-system/Stack';
import Heading from '@/design-system/Heading';

const shimmer = (w, h) => `
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

const toBase64 = (str) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str));

const Avatar = styled(Image, {
  borderRadius: '$full',
});

const StyledImage = styled(Image, {
  borderRadius: '$sm',
});

const StyledCover = styled(Box, {
  width: '100%',
  maxWidth: '100%',
  height: '100%',
  maxHeight: '100%',
  mt: '$3',
});

function BlogLayout({ children, frontMatter }) {
  const minutesRead = Math.round(frontMatter.readingTime.minutes, 1);
  const publishedAt = dayjs(frontMatter?.publishedAt).format('MMMM D, YYYY');

  return (
    <article>
      <Box css={{ mb: '$3' }}>
        <Heading size="2xl">{frontMatter.title}</Heading>
      </Box>

      <Flex alignItems="center" justifyContent="between">
        <Flex alignItems="center" gap={1}>
          <Avatar alt="wootsbot" height={24} width={24} src="/static/images/avatar.jpg" />
          <Stack spacing={1}>
            <Text as="span" size="xs" css={{ fontWeight: '$light' }}>
              {'wootsbot /'}
            </Text>

            <Text as="span" size="xs" css={{ fontWeight: '$light' }}>
              {publishedAt}
            </Text>
          </Stack>
        </Flex>

        <Text as="span" size="xs" css={{ fontWeight: '$light' }}>
          {minutesRead} min de lectura
        </Text>
      </Flex>

      {frontMatter.image && (
        <StyledCover>
          <StyledImage
            src={frontMatter.image}
            alt={`Picture of ${frontMatter.title}`}
            width={500}
            height={300}
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
    </article>
  );
}

export default BlogLayout;
