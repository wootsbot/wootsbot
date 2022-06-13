import Image from 'next/image';
import dynamic from 'next/dynamic';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';
import Grid from '@/design-system/Grid';
import GridItem from '@/design-system/GridItem';
import Container from '@/design-system/Container';

import Layout from '@/layouts/Layout';

const SEO = dynamic(() => import('@/components/SEO'));

import galleryData from '@/data/gallery';

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

type Gallery = {
  cover: string;
  options: string;
};

export type GalleryPageProps = {
  gallery?: Gallery[];
};

function GalleryPage({ gallery }: GalleryPageProps) {
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