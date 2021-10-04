import { styled } from '@/stitches';
import Box from '@/design-system/Box';

const Container = styled(Box, {
  // Reset
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '896px',
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
