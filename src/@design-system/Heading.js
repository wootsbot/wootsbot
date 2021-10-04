import { forwardRef } from 'react';
import Text from './Text';

import merge from 'lodash.merge';

const DEFAULT_TAG = 'h1';

const Heading = forwardRef((props, forwardedRef) => {
  // '2' here is the default heading size variant
  const { size = '1', ...textProps } = props;
  // This is the mapping of Heading Variants to Text variants
  const textSize = {
    1: { '@initial': '4', '@desktop': '5' },
    2: { '@initial': '6', '@desktop': '7' },
    3: { '@initial': '7', '@desktop': '8' },
    4: { '@initial': '8', '@desktop': '9' },
  };

  // This is the mapping of Heading Variants to Text css
  const textCss = {
    1: { fontWeight: 500, lineHeight: '20px', '@desktop': { lineHeight: '23px' } },
    2: { fontWeight: 700, lineHeight: '25px', '@desktop': { lineHeight: '30px' } },
    3: { fontWeight: 500, lineHeight: '33px', '@desktop': { lineHeight: '41px' } },
    4: { fontWeight: 500, lineHeight: '35px', '@desktop': { lineHeight: '55px' } },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontVariantNumeric: 'proportional-nums',
        ...merge(textCss[size], props.css),
      }}
    />
  );
});

Heading.displayName = 'Heading';
export default Heading;
