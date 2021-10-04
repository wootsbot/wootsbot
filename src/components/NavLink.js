import Link from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '@/stitches';

// This creates a custom component that wraps an <a> tag
const StyledLink = styled('a', {
  textDecoration: 'none',
  color: '$gray11',

  '&:hover': {
    color: '$violet11',
  },

  variants: {
    isActive: {
      true: {
        color: '$violet11',
      },
    },
  },
});

function NavLink({ href, name, ...props }) {
  const { pathname } = useRouter();
  const isActive = pathname === href || pathname === href.pathname;

  return (
    <Link href={href} passHref>
      <StyledLink isActive={isActive} {...props} />
    </Link>
  );
}

export default NavLink;
