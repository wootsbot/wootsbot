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

function NavLink({ href, name, isDisableActive, ...props }) {
  const { pathname } = useRouter();
  const isActive = pathname === href || pathname === href.pathname;

  return (
    <Link href={href} passHref>
      <StyledLink isActive={isActive && !isDisableActive} {...props} />
    </Link>
  );
}

export default NavLink;
