import dayjs from 'dayjs';

import { styled } from '@/stitches';

import Link from '@/components/Link';
import Text from '@/design-system/Text';
import Flex from '@/design-system/Flex';
import Heading from '@/design-system/Heading';

export default function BlogPreview({ title, summary, slug, publishedAt }) {
  return (
    <Flex flexDirection="column" gap={1}>
      <Link href={`/blog/${slug}`}>
        <Heading as="h4" size="md">
          {title}
        </Heading>
      </Link>

      <Text as="time" size="xs" color="gray">
        {dayjs(publishedAt).format('MMMM D, YYYY')}
      </Text>

      <Text color="gray" size="sm">
        {summary}
      </Text>
    </Flex>
  );
}
