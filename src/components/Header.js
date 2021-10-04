/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';

import { styled } from '@/stitches';

import Container from '@/design-system/Container';
import Flex from '@/design-system/Flex';
import Spacer from '@/design-system/Spacer';
import Box from '@/design-system/Box';
import NavLink from '@/components/NavLink';
import Wootsbot from '@/design-system/icons/Wootsbot';

const StyledLink = styled('a', {
  textDecoration: 'none',
  fontSize: '$4',
  color: '$gray12',
});

function Header() {
  return (
    <Container size={1}>
      <Flex as="header" css={{ backgroundColor: '#fff' }} flexDirection="row" alignItems="center">
        <Flex as="nav" css={{ height: 64, width: '100%' }} flexDirection="row" alignItems="center">
          <Link href="/" passHref>
            <StyledLink>
              <Flex alignItems="center" gap="1">
                <Wootsbot size={40} />
                <Box as="span">wootsbot</Box>
              </Flex>
            </StyledLink>
          </Link>
          <Spacer />
          <Flex
            flexDirection="row"
            alignItems="center"
            css={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
            gap={5}
          >
            <NavLink href="/">Sobre mi</NavLink>

            <NavLink href="/blog">Articulos</NavLink>
            <NavLink href="/3">Charlemos</NavLink>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Header;
