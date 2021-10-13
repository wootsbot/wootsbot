/* eslint-disable react/no-unescaped-entities */
import dayjs from 'dayjs';

import { Github, Twitter } from '@icons-pack/react-simple-icons';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';
import Text from '@/design-system/Text';
import Flex from '@/design-system/Flex';
import Container from '@/design-system/Container';

import NavLink from '@/components/NavLink';

const StyledLink = styled('a', {
  textDecoration: 'underline',
  textDecorationColor: '$sage9',
  color: '$mauve11',
  fontWeight: '$medium',

  '&:hover': {
    color: '$sage12',
  },

  '&:active': {
    color: '$sage11',
  },
});

const StyledHr = styled('hr', {
  borderColor: '$slate8',
  borderTopWidth: 1,
  width: '100%',
  mb: '$7',
});

function Footer() {
  return (
    <Container as="footer" size="sm" css={{ mb: '$12', mt: '$10' }}>
      <StyledHr />
      <Flex flexDirection={{ '@initial': 'row', '@phone': 'column' }} gap={9}>
        <Flex flexDirection="column" gap={2}>
          <Text as="span" size="xl" css={{ fontWeight: '$semibold' }}>
            Jorge Luis Calleja A.
          </Text>
          <Text
            size="xl"
            css={{
              maxWidth: 250,
              fontWeight: '$light',
              lineHeight: '$8',
              backgroundImage: 'linear-gradient(to left, $blue11, $violet11)',
              color: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Creo que "entre más compartas, más aprendes".
          </Text>

          <Flex gap={2}>
            <StyledLink target="_blank" rel="noopener noreferrer" href="https://github.com/wootsbot">
              <Github size={20} />
            </StyledLink>

            <StyledLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/wootsbot">
              <Twitter size={20} />
            </StyledLink>
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap={2}>
          <NavLink href="/" isDisableActive>
            Sobre mi
          </NavLink>

          <NavLink href="/uses" isDisableActive>
            Uses
          </NavLink>

          <NavLink href="/blog" isDisableActive>
            Articulos
          </NavLink>

          <NavLink href="/gallery" isDisableActive>
            Galeria
          </NavLink>
        </Flex>
      </Flex>

      <Box css={{ mt: '$4' }}>
        <Flex css={{ fontSize: '$2', fontWeight: '$thin' }}>
          All rights reserved © wootsbot.dev {` ${dayjs().year()}.`}
        </Flex>
      </Box>
    </Container>
  );
}

export default Footer;
