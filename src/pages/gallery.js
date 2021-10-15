import Image from 'next/image';
import dynamic from 'next/dynamic';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';
import Grid from '@/design-system/Grid';
import GridItem from '@/design-system/GridItem';
import Container from '@/design-system/Container';
import Text from '@/design-system/Text';

import Layout from '@/components/Layout';

const SEO = dynamic(() => import('@/components/SEO'));

import galleryData from '@/data/gallery';

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

const StyledImage = styled(Image, {
  borderRadius: '$sm',
});

const StyledCover = styled(Box, {
  width: '100%',
  maxWidth: '100%',
  // maxWidth: 350,
  height: '100%',
  maxHeight: '100%',
  // maxHeight: 350,
});

const StyledFooterInfo = styled(Box, {
  position: 'absolute',
  width: '100%',
  maxWidth: 250,
  marginTop: -25,
  zIndex: '$2',
  px: '$2',
  py: '$1',
  backgroundColor: '$colors$sage12',
  borderBottomLeftRadius: '$sm',
  //  borderTopRightRadius: '$2xl',

  '@phone': {
    marginTop: -40,
    maxWidth: 300,
    px: '$1',
  },
});

function GalleryPage({ gallery }) {
  return (
    <Container size="sm" css={{ mt: '$6' }}>
      <SEO title="Galeria" description="Un espacio para concentrar mi pasión por la fotografía." />

      <Grid columns={{ '@initial': 2, '@phone': 1 }} gapX={4} gapY={5}>
        {gallery?.map((gal) => (
          <GridItem key={gal.cover} colSpan={1}>
            <StyledCover>
              <StyledImage
                src={gal.cover}
                alt="Picture of the jorge lca"
                width={640}
                height={640}
                layout="responsive"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(640, 640))}`}
                quality="100"
              />
            </StyledCover>
            <StyledFooterInfo>
              <Text size="xs" css={{ fontWeight: '$semibold', color: '$sage1' }}>
                {gal.options}
              </Text>
            </StyledFooterInfo>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  return { props: { gallery: galleryData } };
}

GalleryPage.Layout = Layout;
export default GalleryPage;
