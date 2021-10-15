/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';
import Flex from '@/design-system/Flex';
import Text from '@/design-system/Text';
import Heading from '@/design-system/Heading';

const LinkTab = styled('a', {
  color: '$gray12',
});

const StyledAvatarWrapper = styled(Box, {
  width: '100%',
  maxWidth: 120,
  height: '100%',
  maxHeight: 120,

  '@phone': {
    width: 90,
    height: 90,
  },
});
const Avatar = styled(Image, {
  borderRadius: '$full',
});

function Banner() {
  return (
    <Flex
      as="section"
      alignItems={{ '@initial': 'center', '@phone': 'start' }}
      flexDirection={{ '@initial': 'row', '@phone': 'columnReverse' }}
      gap={5}
    >
      <Box>
        <Flex gap={2}>
          <Flex flexDirection="column" gap={2}>
            <Heading size="2xl">Hola, soy Jorge.</Heading>
            <Heading
              as="h2"
              size="md"
              css={{
                backgroundImage: 'linear-gradient(to left, $blue11, $violet11)',
                color: 'transparent',
                backgroundClip: 'text',
              }}
            >
              "Haciendo esto y aquello"
            </Heading>
          </Flex>
        </Flex>

        <Text css={{ mt: '$3', mb: '$1' }}>
          Frontend chapter lead en <b>spin by oxxo</b>, al que le apasiona diseñar, admirador del UX!, Constructor de
          cosas, Entusiasta del código abierto y los teclados mecánicos.
        </Text>

        <Text>
          Un fotógrafo apasionado y coautor de{` `}
          <LinkTab target="_blank" href="https://www.reactnextboilerplate.com/" rel="noopener noreferrer">
            React Next Boilerplate
          </LinkTab>
          .
        </Text>
      </Box>

      <StyledAvatarWrapper>
        <Avatar
          src="/static/images/avatar.webp"
          alt="Picture of the author"
          width={120}
          height={120}
          layout="responsive"
          quality="100"
        />
      </StyledAvatarWrapper>
    </Flex>
  );
}

export default Banner;
