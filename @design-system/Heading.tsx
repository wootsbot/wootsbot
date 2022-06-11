import * as React from 'react';

import merge from 'lodash.merge';

import { VariantProps, CSS } from '@/stitches';

import Text, { StyledTextVariants } from './Text';

const DEFAULT_TAG = 'h1';

type TextSizeVariants = Pick<StyledTextVariants, 'size'>;
type HeadingSizeVariants = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<StyledTextVariants, 'size'>;
export type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> & HeadingVariants & { css?: CSS; as?: any };

const Heading = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, HeadingProps>((props, forwardedRef) => {
  const { size = 'xl', ...textProps } = props;
  const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
    xs: { '@initial': 'sm', '@phone': 'sm' },
    sm: { '@initial': 'md', '@phone': 'md' },
    md: { '@initial': 'xl', '@phone': 'xl' },
    lg: { '@initial': '3xl', '@phone': '2xl' },
    xl: { '@initial': '4xl', '@phone': '3xl' },
    '2xl': { '@initial': '5xl', '@phone': '4xl' },
    '3xl': { '@initial': '6xl', '@phone': '5xl' },
    '4xl': { '@initial': '7xl', '@phone': '6xl' },
  };

  // This is the mapping of Heading Variants to Text css
  const textCss: Record<HeadingSizeVariants, CSS> = {
    xs: {
      fontWeight: '$bold',
      lineHeight: 1.2,
      '@desktop': { lineHeight: '23px' },
    },
    sm: {
      fontWeight: '$bold',
      lineHeight: 1.2,
      '@desktop': { lineHeight: '30px' },
    },
    md: {
      fontWeight: '$bold',
      lineHeight: 1.2,
      '@desktop': { lineHeight: '41px' },
    },
    lg: {
      fontWeight: '$bold',
      lineHeight: 1.2,
      '@desktop': { lineHeight: '41px' },
    },
    xl: {
      fontWeight: '$bold',
      lineHeight: 1.2,
      '@desktop': { lineHeight: '55px' },
    },
    '2xl': {
      fontWeight: '$bold',
      lineHeight: 1,
      '@desktop': { lineHeight: '55px' },
    },
    '3xl': {
      fontWeight: '$bold',
      lineHeight: 1,
      '@desktop': { lineHeight: '55px' },
    },
    '4xl': {
      fontWeight: '$bold',
      lineHeight: 1,
      '@desktop': { lineHeight: '55px' },
    },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      color="primary"
      css={{
        fontVariantNumeric: 'proportional-nums',
        ...merge(textCss[size], props.css),
      }}
    />
  );
});

Heading.displayName = 'Heading';
export default Heading;
