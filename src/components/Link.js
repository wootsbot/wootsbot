import LinkNext from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '@/stitches';

// This creates a custom component that wraps an <a> tag
const StyledLink = styled('a', {
  textDecoration: 'none',
  fontWeight: '$medium',

  '&:hover': {
    color: '$mauve12',
    textDecoration: 'underline',
    textDecorationColor: '$mauve9',
  },

  variants: {
    isActive: {
      true: {
        color: '$violet11',
      },
    },
    color: {
      primary: {
        color: '$mauve11',
      },
      secondary: {
        color: '$violet11',
      },
    },
  },
});

function Link({ href, name, ...props }) {
  const { pathname } = useRouter();
  const isActive = pathname === href || pathname === href.pathname;

  return (
    <LinkNext href={href} passHref>
      <StyledLink isActive={isActive} {...props} />
    </LinkNext>
  );
}

export default Link;
