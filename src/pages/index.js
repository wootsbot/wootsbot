import Image from 'next/image';
import dynamic from 'next/dynamic';

import dayjs from 'dayjs';

import { styled } from '@/stitches';

import Flex from '@/design-system/Flex';
import Text from '@/design-system/Text';
import Grid from '@/design-system/Grid';
import Heading from '@/design-system/Heading';
import GridItem from '@/design-system/GridItem';
import Container from '@/design-system/Container';
import Box from '@/design-system/Box';
import Stack from '@/design-system/Stack';

import Layout from '@/components/Layout';
import Link from '@/components/Link';

const SEO = dynamic(() => import('@/components/SEO'));
const Banner = dynamic(() => import('@/components/Banner'));

import { getAllFilesFrontMatter } from '@/libs/mdx';

const StyledImage = styled(Image, {
  borderRadius: '$sm',
});

const CardPost = styled(Link, {
  height: '100%',
  p: '$2',
});

function HomePage({ posts }) {
  const lastPosts = posts?.sort((a, b) => dayjs(b.publishedAt).valueOf() - dayjs(a.publishedAt).valueOf())?.slice(0, 3);

  return (
    <Container size="sm" css={{ mt: '$6' }}>
      <SEO
        title="Jorge L. Calleja – Developer"
        description="Desarrollador JavaScript al que le apaciona diseñar y gran admirador de UX!, coautor de React Next Boilerplate. Constructor de cosas, Entusiasta del código abierto y un fotógrafo apasionado."
      />

      <Banner />

      <Box css={{ mt: '$10' }}>
        <Flex flexDirection="column" gap={2}>
          <Grid columns={{ '@initial': 2, '@phone': 1 }} gap={4}>
            <GridItem colSpan={1}>
              <StyledImage
                src="/static/images/espace.jpeg"
                alt="Picture of the author"
                width={500}
                height={400}
                layout="intrinsic"
                quality="100"
              />
            </GridItem>

            <GridItem colSpan={1}>
              <Stack flexDirection="column" spacing={1}>
                <Heading as="h3" size="lg">
                  Que usa wootsbot
                </Heading>
                <Text size="lg">
                  Lo que más utilizo para codificación y video. Esto son algunas de las cosas que he acumulado en los
                  últimos años.
                </Text>
              </Stack>
            </GridItem>
          </Grid>

          <Link href="/uses" color="primary">
            Ver todo mi equipo
          </Link>
        </Flex>
      </Box>

      <Box css={{ mt: '$10' }}>
        <Heading as="h3" size="lg" css={{ mb: '$3' }}>
          Eche un vistazo a mi escritura.
        </Heading>

        <Flex flexDirection="column" gap={2}>
          <Flex flexDirection={{ '@initial': 'row', '@phone': 'column' }} gap={2}>
            {lastPosts?.map((post) => (
              <Box
                key={post?.title}
                css={{
                  display: 'flex',
                  width: '100%',
                  height: 'auto',
                  backgroundColor: '$gray1',
                  borderRadius: '$md',
                  boxShadow: '$cardBase',

                  '&:hover': {
                    boxShadow: '$cardHover',
                  },
                }}
              >
                <CardPost href={`/blog/${post.slug}`} isIcon={false}>
                  <Text size="lg">{post?.title}</Text>
                </CardPost>
              </Box>
            ))}
          </Flex>

          <Link href="/blog" color="primary">
            Ver todas las publicaciones
          </Link>
        </Flex>
      </Box>

      <Box css={{ mt: '$10' }}>
        <Flex flexDirection="column" gap={2}>
          <Grid columns={{ '@initial': 2, '@phone': 1 }} gap={4}>
            <GridItem colSpan={1}>
              <StyledImage
                src="/static/images/referencia-drone.jpeg"
                alt="Picture of the author"
                width={500}
                height={350}
                layout="intrinsic"
                quality="100"
              />
            </GridItem>

            <GridItem colSpan={1}>
              <Stack flexDirection="column" spacing={1}>
                <Heading as="h3" size="lg">
                  Jugando con mi drone y coche electrico RC Wltoys escala 1:18
                </Heading>
                <Text size="lg">
                  Suelo ir a los parques a correr un rato mi Wltoys A959-B. Tomar fotos desde las alturas al campo es
                  algo que suelo hacer con mi DJI Drone Mavic Mini 2
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

HomePage.Layout = Layout;
export default HomePage;
