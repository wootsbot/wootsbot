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
    px: '$3',
  },

  variants: {
    size: {
      xs: {
        maxWidth: 480,
      },
      sm: {
        maxWidth: 720,
      },
      md: {
        maxWidth: 1024,
      },
      lg: {
        maxWidth: 1280,
      },
      xl: {
        maxWidth: 1440,
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
