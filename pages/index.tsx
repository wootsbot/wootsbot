import Image from 'next/image';
import dynamic from 'next/dynamic';

import dayjs from 'dayjs';

import { styled } from '@/stitches';

import { pick } from 'contentlayer/utils';
import { allBlogs } from '@/contentlayer/generated';
import type { Blog } from '@/contentlayer/generated';

import Flex from '@/design-system/Flex';
import Text from '@/design-system/Text';
import Grid from '@/design-system/Grid';
import Heading from '@/design-system/Heading';
import GridItem from '@/design-system/GridItem';
import Container from '@/design-system/Container';
import Box from '@/design-system/Box';
import Spacer from '@/design-system/Spacer';

import Layout from '@/layouts/Layout';
import Link from '@/components/Link';

import WorkSpace from '../public/static/images/personal/Dst.jpg';

const SEO = dynamic(() => import('@/components/SEO'));
const Banner = dynamic(() => import('@/components/Banner'));

const StyledImage = styled(Image, {
  borderRadius: '$sm',
});

const CardPost = styled(Link, {
  height: '100%',
  p: '$3',
  width: '100%',
  backgroundColor: '$mauve1',
  borderRadius: '$md',
});

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

type HomePageProps = {
  posts?: Blog[] | [];
};

function HomePage({ posts = [] }: HomePageProps) {
  const lastPosts = posts?.sort((a, b) => dayjs(b.publishedAt).valueOf() - dayjs(a.publishedAt).valueOf())?.slice(0, 3);

  return (
    <Container size="sm" css={{ mt: '$6' }}>
      <SEO
        title="Jorge L. Calleja – Arquitecto + DX (Experiencia del desarrollador) Front-End at Digital@FEMSA - Spin By Oxxo"
        description="Desarrollador JavaScript al que le apaciona diseñar y gran admirador de UX!. Entusiasta del código abierto + Teclados mecánicos + State Machines. Un fotógrafo apasionado, coautor de React Next Boilerplate y Constructor de cosas."
        openGraph={{
          images: [
            {
              url: 'https://www.wootsbot.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDst.86ee8fdf.jpg&w=1080&q=100',
              width: 800,
              height: 600,
              alt: 'wootsbot',
            },
          ],
        }}
      />

      <Banner />

      <Box css={{ mt: '$10' }}>
        <Flex flexDirection="column" gap={2}>
          <Grid columns={{ '@initial': 2, '@phone': 1 }} gap={4}>
            <GridItem colSpan={1}>
              <StyledImage
                src={WorkSpace}
                alt="Picture work space"
                width={1280}
                height={960}
                placeholder="blur"
                layout="intrinsic"
                quality="100"
              />
            </GridItem>

            <GridItem colSpan={1}>
              <Flex flexDirection="column" gap={2}>
                <Heading as="h3" size="lg">
                  Esta es mi pila de tecnologías
                </Heading>
                <Text size="lg">
                  Creo que es importante crear un ambiente donde aumente tu creatividad y te sientas cómodo, estas son
                  algunas de las cosas que he recopilado en los últimos años.
                </Text>

                <Spacer />

                <Link href="/uses" color="primary">
                  Ver toda la pila
                </Link>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Box>

      <Box css={{ mt: '$10' }}>
        <Heading as="h3" size="lg" css={{ mb: '$3' }}>
          Eche un vistazo a mi escritura.
        </Heading>

        <Flex flexDirection="column" gap={4}>
          {lastPosts?.map((post) => (
            <Grid key={post?.title} columns={3} gap={2}>
              <GridItem colSpan={{ '@initial': 1, '@phone': 3 }}>
                <Link href={`/blog/${post?.slug}`} isIcon={false}>
                  <StyledAvatarWrapper>
                    <StyledImage
                      src={post?.image}
                      alt={`Picture ${post?.title}`}
                      width={1852}
                      height={640}
                      layout="responsive"
                      quality="100"
                    />
                  </StyledAvatarWrapper>
                </Link>
              </GridItem>

              <GridItem colSpan={{ '@initial': 2, '@phone': 3 }}>
                <Link href={`/blog/${post?.slug}`} isIcon={false}>
                  <Text size="md">{post?.title}</Text>
                </Link>
              </GridItem>
            </Grid>
          ))}

          <Link href="/blog" color="primary">
            Ver todas las publicaciones
          </Link>
        </Flex>
      </Box>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt', 'image']))
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

  return { props: { posts } };
}

HomePage.Layout = Layout;
export default HomePage;
