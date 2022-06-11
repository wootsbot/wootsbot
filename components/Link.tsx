import * as React from 'react';

import LinkNext from 'next/link';
import { useRouter } from 'next/router';

import { ArrowRightIcon } from '@radix-ui/react-icons';

import { styled, VariantProps } from '@/stitches';

// This creates a custom component that wraps an <a> tag
const StyledLink = styled('a', {
  textDecoration: 'none',
  fontWeight: '$medium',

  '&:hover': {
    color: '$mauve12',
    // textDecoration: 'underline',
    // textDecorationColor: '$mauve9',
  },

  variants: {
    isIcon: {
      true: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
    },

    isActive: {
      true: {
        color: '$violet11',
      },
    },
    color: {
      primary: {
        color: '$mauve12',
      },
      secondary: {
        color: '$violet11',
      },
    },
  },
});

const StyledIcon = styled(ArrowRightIcon, {
  ml: '$1',
  color: '$mauve12',

  '&:hover': {
    color: '$mauve12',
  },
});

export type StyledLinkVariants = VariantProps<typeof StyledLink>;
interface Href {
  pathname?: string | null;
}

export type LinkProps = {
  href: Href | string;
  name?: string;
  isIcon?: boolean;
  children?: React.ReactNode;
} & StyledLinkVariants;

function Link({ href, name, children, isIcon = true, ...props }: LinkProps) {
  const { pathname } = useRouter();
  // @ts-ignore
  const isActive = pathname === href || pathname === href.pathname;

  return (
    <LinkNext href={href} passHref>
      <StyledLink isActive={isActive} isIcon={isIcon} {...props}>
        {children}
        {isIcon && <StyledIcon />}
      </StyledLink>
    </LinkNext>
  );
}

export default Link;
