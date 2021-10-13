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
    px: '$4',
  },

  variants: {
    size: {
      xs: {
        maxWidth: '480px',
      },
      sm: {
        maxWidth: '720px',
      },
      md: {
        maxWidth: '1024px',
      },
      lg: {
        maxWidth: '1280px',
      },
      xl: {
        maxWidth: '1440px',
      },
      none: {
        maxWidth: 'none',
      },
    },
  },
  defaultVariants: {
    size: 'none',
  },
});

export default Container;
