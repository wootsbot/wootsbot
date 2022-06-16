import { useState } from 'react';
import Link from 'next/link';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
// import { Rss } from 'react-feather';
import { Rss } from '@icons-pack/react-simple-icons';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';
import Flex from '@/design-system/Flex';
import NavLink from '@/components/NavLink';
import Spacer from '@/design-system/Spacer';
import IconButton from '@/design-system/IconButton';
import Wootsbot from '@/design-system/icons/Wootsbot';

const Container = styled(Box, {
  flexShrink: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '$3',
  marginBottom: '$3',
  width: '100%',
  maxWidth: 720,
  px: '$2',

  '@phone': {
    px: '$3',
  },
});

const StyledMoonIcon = styled(MoonIcon, {
  color: '$gold11',
});

const StyledSunIcon = styled(SunIcon, {
  color: '$yellow11',
});

const StyledLink = styled('a', {
  textDecoration: 'none',
  fontSize: '$xl',
  color: '$gray12',
});

const DrawerMobile = styled(Box, {
  position: 'fixed',
  backgroundColor: '$mauve1',
  height: '100%',
  width: '100%',
  zIndex: '$max',
  marginTop: -48,
  px: '$2',
  '@phone': {
    px: '$3',
  },
});

function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const renderLinks = () => (
    <>
      <NavLink href="/" onClick={() => setIsOpenDrawer(false)}>
        Sobre mi
      </NavLink>
      <NavLink href="/blog" onClick={() => setIsOpenDrawer(false)}>
        Articulos
      </NavLink>
      <NavLink href="/gallery" onClick={() => setIsOpenDrawer(false)}>
        Galeria
      </NavLink>
    </>
  );

  return (
    <>
      {!isOpenDrawer && (
        <Container>
          <Flex
            as="header"
            css={{
              width: '100%',
              backgroundColor: '$mauve1',
            }}
            flexDirection="row"
            alignItems="center"
          >
            <Flex as="nav" css={{ height: 64, width: '100%' }} flexDirection="row" alignItems="center">
              <Link href="/" passHref>
                <StyledLink>
                  <Flex alignItems="center" gap="1">
                    <Wootsbot size={40} />
                    <Box
                      as="span"
                      css={{
                        '@initial': { display: 'block' },
                        '@phone': { display: 'none' },
                      }}
                    >
                      wootsbot
                    </Box>
                  </Flex>
                </StyledLink>
              </Link>
              <Spacer />

              <Flex
                flexDirection="row"
                alignItems="center"
                gap={5}
                css={{
                  '@initial': { display: 'block' },
                  '@phone': { display: 'none' },
                }}
              >
                {renderLinks()}
                <IconButton
                  onClick={() => openInNewTab('/feed.xml')}
                  size="lg"
                  variant="raised"
                  name="theme"
                  aria-label="change mode theme"
                >
                  <Rss size={15} />
                </IconButton>

                <IconButton
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  size="lg"
                  variant="raised"
                  name="theme"
                  aria-label="change mode theme"
                >
                  {theme === 'light' ? <StyledMoonIcon /> : <StyledSunIcon />}
                </IconButton>
              </Flex>

              <IconButton
                size="lg"
                variant="raised"
                name="theme"
                aria-label="show navigation"
                css={{ display: 'none', '@phone': { display: 'block' } }}
                onClick={() => setIsOpenDrawer(!isOpenDrawer)}
              >
                <HamburgerMenuIcon />
              </IconButton>
            </Flex>
          </Flex>
        </Container>
      )}

      {isOpenDrawer && (
        <DrawerMobile>
          <Flex
            as="header"
            css={{
              width: '100%',
              backgroundColor: '$mauve1',
              marginTop: '$3',
              marginBottom: '$3',
            }}
            flexDirection="row"
            alignItems="center"
          >
            <Flex as="nav" css={{ height: 64, width: '100%' }} flexDirection="row" alignItems="center">
              <Link href="/" passHref>
                <StyledLink>
                  <Flex alignItems="center" gap="1">
                    <Wootsbot size={40} />
                  </Flex>
                </StyledLink>
              </Link>

              <Spacer />

              <IconButton
                size="lg"
                variant="raised"
                name="theme"
                aria-label="show navigation"
                css={{ display: 'none', '@phone': { display: 'block' } }}
                onClick={() => setIsOpenDrawer(!isOpenDrawer)}
              >
                <Cross1Icon />
              </IconButton>
            </Flex>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={5}>
            {renderLinks()}

            <IconButton
              onClick={() => openInNewTab('/feed.xml')}
              size="lg"
              variant="raised"
              name="theme"
              aria-label="change mode theme"
            >
              <Rss size={15} />
            </IconButton>

            <IconButton
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              size="lg"
              variant="raised"
              name="theme"
              aria-label="change mode theme"
            >
              {theme === 'light' ? <StyledMoonIcon /> : <StyledSunIcon />}
            </IconButton>
          </Flex>
        </DrawerMobile>
      )}
    </>
  );
}

export default Header;
