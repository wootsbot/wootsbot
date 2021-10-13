import Image from 'next/image';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';
import Grid from '@/design-system/Grid';
import GridItem from '@/design-system/GridItem';
import Container from '@/design-system/Container';
import Text from '@/design-system/Text';

import Layout from '@/components/Layout';

const StyledImage = styled(Image, {
  borderRadius: '$sm',
});

const StyledFooterInfo = styled(Box, {
  position: 'absolute',
  width: '100%',
  maxWidth: 290,
  marginTop: -25,
  zIndex: '$2',
  px: '$2',
  py: '$1',
  backgroundColor: '$colors$sage12',
  borderBottomLeftRadius: '$sm',
  borderTopRightRadius: '$2xl',

  '@phone': {
    marginTop: -40,
    maxWidth: 180,
    px: '$1',
    borderTopRightRadius: '$none',
  },
});

const StyledCover = styled(Box, {
  width: '100%',
  maxWidth: '100%',
  // maxWidth: 350,
  height: '100%',
  maxHeight: '100%',
  // maxHeight: 350,
});

function GalleryPage() {
  return (
    <Container size="sm" css={{ mt: '$6' }}>
      <Grid columns={2} gapX={4} gapY={5}>
        <GridItem colSpan={1}>
          <StyledCover>
            <StyledImage
              src="/static/images/gallery/w-08.jpeg"
              alt="Picture of the author"
              width={640}
              height={640}
              layout="responsive"
              quality="100"
            />
          </StyledCover>
          <StyledFooterInfo>
            <Text size="xs" css={{ fontWeight: '$semibold', color: '$sage1' }}>
              Canon / EOS 5D Mark III / EF 24-105mm f/4L IS USM / 35mm f/1.4
            </Text>
          </StyledFooterInfo>
        </GridItem>

        <GridItem colSpan={1}>
          <StyledCover>
            <StyledImage
              src="/static/images/gallery/w-01.jpeg"
              alt="Picture of the author"
              width={640}
              height={640}
              layout="responsive"
              quality="100"
            />
          </StyledCover>
          <StyledFooterInfo>
            <Text size="xs" css={{ fontWeight: '$semibold', color: '$sage1' }}>
              Canon / EOS 5D Mark III / EF 24-105mm f/4L IS USM / 35mm f/1.4
            </Text>
          </StyledFooterInfo>
        </GridItem>

        <GridItem colSpan={1}>
          <StyledCover>
            <StyledImage
              src="/static/images/gallery/w-02.jpeg"
              alt="Picture of the author"
              width={640}
              height={640}
              layout="responsive"
              quality="100"
            />
          </StyledCover>
          <StyledFooterInfo>
            <Text size="xs" css={{ fontWeight: '$semibold', color: '$sage1' }}>
              Canon / EOS 5D Mark III / EF 24-105mm f/4L IS USM / 35mm f/1.4
            </Text>
          </StyledFooterInfo>
        </GridItem>

        <GridItem colSpan={1}>
          <StyledCover>
            <StyledImage
              src="/static/images/gallery/w-03.jpeg"
              alt="Picture of the author"
              width={640}
              height={640}
              layout="responsive"
              quality="100"
            />
          </StyledCover>

          <StyledFooterInfo>
            <Text size="xs" css={{ fontWeight: '$semibold', color: '$sage1' }}>
              Canon / EOS 5D Mark III / EF 24-105mm f/4L IS USM / 35mm f/1.4
            </Text>
          </StyledFooterInfo>
        </GridItem>

        <GridItem colSpan={1}>
          <StyledCover>
            <StyledImage
              src="/static/images/gallery/w-04.jpeg"
              alt="Picture of the author"
              width={640}
              height={640}
              layout="responsive"
              quality="100"
            />
          </StyledCover>
          <StyledFooterInfo>
            <Text size="xs" css={{ fontWeight: '$semibold', color: '$sage1' }}>
              Canon / EOS 5D Mark III / EF 24-105mm f/4L IS USM / 35mm f/1.4
            </Text>
          </StyledFooterInfo>
        </GridItem>

        <GridItem colSpan={1}>
          <StyledCover>
            <StyledImage
              src="/static/images/gallery/w-05.jpeg"
              alt="Picture of the author"
              width={640}
              height={640}
              layout="responsive"
              quality="100"
            />
          </StyledCover>
          <StyledFooterInfo>
            <Text size="xs" css={{ fontWeight: '$semibold', color: '$sage1' }}>
              Canon / EOS 5D Mark III / EF 24-105mm f/4L IS USM / 35mm f/1.4
            </Text>
          </StyledFooterInfo>
        </GridItem>

        <GridItem colSpan={1}>
          <StyledCover>
            <StyledImage
              src="/static/images/gallery/w-06.jpeg"
              alt="Picture of the author"
              width={640}
              height={640}
              layout="responsive"
              quality="100"
            />
          </StyledCover>
          <StyledFooterInfo>
            <Text size="xs" css={{ fontWeight: '$semibold', color: '$sage1' }}>
              Canon / EOS 5D Mark III / EF 24-105mm f/4L IS USM / 35mm f/1.4
            </Text>
          </StyledFooterInfo>
        </GridItem>

        <GridItem colSpan={1}>
          <StyledCover>
            <StyledImage
              src="/static/images/gallery/w-07.jpeg"
              alt="Picture of the author"
              width={640}
              height={640}
              layout="responsive"
              quality="100"
            />
          </StyledCover>
          <StyledFooterInfo>
            <Text size="xs" css={{ fontWeight: '$semibold', color: '$sage1' }}>
              Canon / EOS 5D Mark III / EF 24-105mm f/4L IS USM / 35mm f/1.4
            </Text>
          </StyledFooterInfo>
        </GridItem>
      </Grid>
    </Container>
  );
}

GalleryPage.Layout = Layout;
export default GalleryPage;
