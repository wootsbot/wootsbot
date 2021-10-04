import Link from '@/components/Link';
import Text from '@/design-system/Text';
import Flex from '@/design-system/Flex';
import Heading from '@/design-system/Heading';

export default function BlogPreview({ title, summary, slug }) {
  return (
    <Link href={`/blog/${slug}`}>
      <Flex flexDirection="column" gap={2}>
        <Heading size={1}>{title}</Heading>
        <Text as="p">{summary}</Text>
      </Flex>
    </Link>
  );
}
