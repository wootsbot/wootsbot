import { styled } from '@/stitches';
import Box from '@/design-system/Box';

const Container = styled(Box, {
  // Reset
  flexShrink: 0,

  // Custom
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '$3',
  marginBottom: '$3',
  px: '$2',

  '@phone': {
    px: '$5',
  },

  variants: {
    size: {
      1: {
        maxWidth: '720px',
      },
      2: {
        maxWidth: '1024px',
      },
      3: {
        maxWidth: '10245px',
      },
      4: {
        maxWidth: 'none',
      },
    },
  },
  defaultVariants: {
    size: '4',
  },
});

export default Container;
