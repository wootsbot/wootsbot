import { css, config, styled, VariantProps, CSS } from '@/stitches';

const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',
});

export type StyledBoxVariants = VariantProps<typeof Box>;
export default Box;
