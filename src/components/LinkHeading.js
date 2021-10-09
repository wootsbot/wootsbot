import { FrameIcon } from '@radix-ui/react-icons';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';

const StyledIcon = styled(FrameIcon, {});

const LinkHeading = ({ id, children, css, iconSize = 24 }) => (
  <Box css={{ ...css }}>
    <Box
      as="a"
      href={`#${id}`}
      data-id={id}
      css={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        svg: {
          opacity: 0,
        },
        '&:hover svg': {
          opacity: 1,
        },
      }}
    >
      {children}
      <Box as="span" css={{ ml: '$1', color: '$slate9' }}>
        <StyledIcon css={{ width: iconSize, height: iconSize }} />
      </Box>
    </Box>
  </Box>
);

export default LinkHeading;
