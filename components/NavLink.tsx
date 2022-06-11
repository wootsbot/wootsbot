import * as React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '@/stitches';

// This creates a custom component that wraps an <a> tag
const StyledLink = styled('a', {
  textDecoration: 'none',
  color: '$mauve12',

  '&:hover': {
    color: '$violet10',
  },

  variants: {
    isActive: {
      true: {
        color: '$violet10',
      },
    },
  },
});

interface Href {
  pathname?: string | null;
}

export type NavLinkProps = {
  children: React.ReactNode;
  href: Href | string;
  name?: string;
  isDisableActive?: boolean;
  onClick?: () => void;
};

function NavLink({ href, name, isDisableActive, ...props }: NavLinkProps) {
  const { pathname } = useRouter();
  // @ts-ignore
  const isActive = pathname === href || pathname === href.pathname;

  return (
    <Link href={href} passHref>
      <StyledLink isActive={isActive && !isDisableActive} {...props} />
    </Link>
  );
}

export default NavLink;
