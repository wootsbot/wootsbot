import dayjs from 'dayjs';
import Image from 'next/image';

import { styled } from '@/stitches';

import Link from '@/components/Link';
import Text from '@/design-system/Text';
import Flex from '@/design-system/Flex';
import Box from '@/design-system/Box';
import Grid from '@/design-system/Grid';
import GridItem from '@/design-system/GridItem';
import Heading from '@/design-system/Heading';

const StyledAvatarWrapper = styled(Box, {
  width: '100%',
  maxWidth: 800,
  height: '100%',
  maxHeight: 800,

  '@tablet': {
    width: '100%',
    height: '100%',
  },
});

const StyledImage = styled(Image, {
  borderRadius: '$md',
});

export type BlogPreviewProps = {
  image: string;
  publishedAt: string;
  slug: string;
  summary: string;
  title: string;
};

export default function BlogPreview({ title, summary, slug, publishedAt, image }: BlogPreviewProps) {
  return (
    <Grid columns={3} gap={2}>
      <GridItem colSpan={3}>
        <Flex flexDirection="column" gap={1}>
          <Link href={`/blog/${slug}`} isIcon={false}>
            <StyledAvatarWrapper>
              <StyledImage
                src={image}
                alt="Picture of the author"
                width={1852}
                height={640}
                layout="responsive"
                quality="100"
              />
            </StyledAvatarWrapper>
          </Link>
          <Text as="time" size="xs" color="gray">
            {dayjs(publishedAt).format('MMMM D, YYYY')}
          </Text>
          {/* <Flex flexDirection="row" gap={1} css={{ flexWrap: 'wrap' }}>
            {tags?.map((t, _id) => (
              <Text size="xs" key={`${t}-${_id}`} css={{ background: '$gold4', p: 2 }}>
                {t}
              </Text>
            ))}
          </Flex> */}
        </Flex>
      </GridItem>

      <GridItem colSpan={3}>
        <Flex flexDirection="column" gap={2}>
          <Link href={`/blog/${slug}`} isIcon={false}>
            <Heading as="h4" size="md">
              {title}
            </Heading>
          </Link>

          <Text color="gray" size="sm">
            {summary}
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}
