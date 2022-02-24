import { forwardRef } from 'react';
import Text from './Text';

import merge from 'lodash.merge';

const DEFAULT_TAG = 'h1';

const Heading = forwardRef((props, forwardedRef) => {
  // '2' here is the default heading size variant
  const { size = 'xl', ...textProps } = props;
  // This is the mapping of Heading Variants to Text variants
  const textSize = {
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
  const textCss = {
    xs: { fontWeight: '$bold', lineHeight: 1.2, '@desktop': { lineHeight: '23px' } },
    sm: { fontWeight: '$bold', lineHeight: 1.2, '@desktop': { lineHeight: '30px' } },
    md: { fontWeight: '$bold', lineHeight: 1.2, '@desktop': { lineHeight: '41px' } },
    lg: { fontWeight: '$bold', lineHeight: 1.2, '@desktop': { lineHeight: '41px' } },
    xl: { fontWeight: '$bold', lineHeight: 1.2, '@desktop': { lineHeight: '55px' } },
    '2xl': { fontWeight: '$bold', lineHeight: 1, '@desktop': { lineHeight: '55px' } },
    '3xl': { fontWeight: '$bold', lineHeight: 1, '@desktop': { lineHeight: '55px' } },
    '4xl': { fontWeight: '$bold', lineHeight: 1, '@desktop': { lineHeight: '55px' } },
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
