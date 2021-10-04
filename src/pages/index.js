/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import { ExternalLink } from 'react-feather';

import { styled } from '@/stitches';

import Flex from '@/design-system/Flex';
import Text from '@/design-system/Text';
import Grid from '@/design-system/Grid';
import Heading from '@/design-system/Heading';
import GridItem from '@/design-system/GridItem';
import Container from '@/design-system/Container';
import Box from '@/design-system/Box';
import Layout from '@/components/Layout';

const Avatar = styled(Image, {
  borderRadius: '$full',
});

const Banner = styled(Image, {
  borderRadius: '$sm',
});

const LinkTab = styled('a', {
  color: '$gray12',
});

const StyledCardProject = styled(Box, {
  py: '$1',
  px: '$2',
  borderRadius: '$2',
  variants: {
    bgcolor: {
      blue: {
        backgroundColor: '$blue3',
      },
      tomato: {
        backgroundColor: '$tomato3',
      },
      gray: {
        backgroundColor: '$gray3',
      },
      red: {
        backgroundColor: '$red3',
      },
    },
  },
});

const StyledExternalLink = styled(ExternalLink, {
  variants: {
    color: {
      blue: {
        color: '$blue11',
      },
      tomato: {
        color: '$tomato11',
      },
      gray: {
        color: '$gray11',
      },
      red: {
        color: '$red11',
      },
    },
  },
});

function HomePage() {
  return (
    <Layout>
      <Container size={1} css={{ mt: '$6' }}>
        <Grid columns={5} gap={4}>
          <GridItem colSpan={3}>
            <Flex gap={2}>
              <Flex flexDirection="column" gap={2}>
                <Heading size={3}>Hola, soy Jorge.</Heading>
                <Heading size={1}>"Haciendo esto y aquello"</Heading>
              </Flex>

              <Avatar
                src="/static/images/avatar.jpg"
                alt="Picture of the author"
                width={75}
                height={75}
                layout="fixed"
                quality="100"
              />
            </Flex>

            <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
              Desarrollador JavaScript al que le apaciona diseñar!, vivo en México🇲🇽, coautor de{` `}
              <LinkTab target="_blank" href="https://www.reactnextboilerplate.com/" rel="noopener noreferrer">
                React Next Boilerplate
              </LinkTab>
            </Text>

            <Text as="p" css={{ mt: '$1', lineHeight: '20px' }}>
              Constructor de cosas, Entusiasta del código abierto y un fotógrafo apasionado.
            </Text>
          </GridItem>

          <GridItem colSpan={{ '@initial': 2 }}>
            <Flex flexDirection="column" gap={2}>
              <StyledCardProject bgcolor="gray">
                <Flex alignItems="center" justifyContent="between">
                  <Text css={{ color: '$gray11' }}>React Next Boilerplate</Text>
                  <a target="_blank" href="https://www.reactnextboilerplate.com/" rel="noopener noreferrer">
                    <ExternalLink size={16} color="gray" />
                  </a>
                </Flex>
              </StyledCardProject>

              <StyledCardProject bgcolor="blue">
                <Flex alignItems="center" justifyContent="between">
                  <Text css={{ color: '$blue11' }}>@icons-pack/react-simple-icons</Text>
                  <a target="_blank" href="https://github.com/icons-pack/react-simple-icons" rel="noopener noreferrer">
                    <StyledExternalLink size={16} color="blue" />
                  </a>
                </Flex>
              </StyledCardProject>

              <StyledCardProject bgcolor="red">
                <Flex alignItems="center" justifyContent="between">
                  <Text css={{ color: '$red11' }}>@icons-pack/svelte-simple-icons</Text>
                  <a target="_blank" href="https://github.com/icons-pack/svelte-simple-icons" rel="noopener noreferrer">
                    <StyledExternalLink size={16} color="red" />
                  </a>
                </Flex>
              </StyledCardProject>
            </Flex>
          </GridItem>
        </Grid>

        <Box css={{ mt: '$10' }}>
          <Heading size="1" css={{ lineHeight: '32px', fontWeight: '$bold', mb: '$3' }}>
            Mi lugar
          </Heading>
          <Flex flexDirection="column" gap={8}>
            <Grid columns={2} gap={4}>
              <GridItem colSpan={1}>
                <Banner
                  src="/static/images/espace.jpeg"
                  alt="Picture of the author"
                  width={500}
                  height={300}
                  layout="intrinsic"
                  quality="100"
                />
              </GridItem>

              <GridItem colSpan={1}>
                <Flex flexDirection="column" gap={2}>
                  <Heading size="1" css={{ lineHeight: '32px', fontWeight: '$semibold' }}>
                    Un lugar donde materializo las ideas
                  </Heading>
                  <Text size="4" css={{ lineHeight: '24px' }}>
                    Connect the keyboard with up to 3 devices via Bluetooth or to a single device with the USB Type-C
                    wired option. Pair it up with your smartphone, laptop and iPad, and switch amongst the devices
                    swiftly, that is best for home, office and light gaming uses.
                  </Text>
                </Flex>
              </GridItem>
            </Grid>

            <Grid columns={2} gap={4}>
              <GridItem colSpan={1}>
                <Flex flexDirection="column" gap={2}>
                  <Heading size="1" css={{ lineHeight: '32px', fontWeight: '$semibold' }}>
                    Keychron Keyboard Keychron Q1 Article Review - August 2021
                  </Heading>
                  <Text size="4" css={{ lineHeight: '24px' }}>
                    Keychron is one of the few mechanical keyboards that features macOS media keys (F1 to F12) in a Mac
                    layout with the same as conventional Mac systems.
                  </Text>
                </Flex>
              </GridItem>

              <GridItem colSpan={1}>
                <Banner
                  src="/static/images/teclado.png"
                  alt="Picture of the author"
                  width={500}
                  height={300}
                  layout="intrinsic"
                  quality="100"
                />
              </GridItem>
            </Grid>
          </Flex>
        </Box>
      </Container>
    </Layout>
  );
}

export default HomePage;
