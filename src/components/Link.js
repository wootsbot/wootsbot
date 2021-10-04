import LinkNext from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '@/stitches';

// This creates a custom component that wraps an <a> tag
const StyledLink = styled('a', {
  textDecoration: 'none',

  variants: {
    isActive: {
      true: {
        color: '$violet11',
      },
    },
    color: {
      primary: {
        color: '$violet11',
        '&:hover': {
          color: '$red11',
        },
      },
      secondary: {
        color: '$gray11',
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
