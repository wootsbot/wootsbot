import Image from 'next/image';

import dayjs from 'dayjs';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';
import Text from '@/design-system/Text';
import Flex from '@/design-system/Flex';
import Stack from '@/design-system/Stack';
import Heading from '@/design-system/Heading';

const Avatar = styled(Image, {
  borderRadius: '$full',
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

      <Box css={{ mt: '$5' }} className="wootsbot-article">
        {children}
      </Box>
    </article>
  );
}

export default BlogLayout;
