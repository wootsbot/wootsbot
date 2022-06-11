import * as React from 'react';

import { css, config, styled, VariantProps, CSS } from '@/stitches';
import Box from '@/design-system/Box';

const { space } = config.theme;

type Direction = 'column' | 'row' | 'column-reverse' | 'row-reverse';

type DirectionMargin = {
  flexDirection: Direction;
};

const directionMargin = (options: DirectionMargin) => {
  const { flexDirection: direction } = options;

  const directionStyles: Record<Direction, CSS> = {
    column: {
      mt: '$$stackSpacing',
      mar: 0,
      mb: 0,
      ml: 0,
    },

    row: {
      mt: 0,
      mr: 0,
      mb: 0,
      ml: '$$stackSpacing',
    },

    'column-reverse': {
      mt: 0,
      mar: 0,
      mb: '$$stackSpacing',
      ml: 0,
    },

    'row-reverse': {
      mt: 0,
      mar: '$$stackSpacing',
      mb: 0,
      ml: 0,
    },
  };

  return directionStyles[direction];
};

const spacing = Object.keys(space).reduce(
  (acc, cv) => ({
    ...acc,
    [cv]: { $$stackSpacing: `$space$${cv}` },
  }),
  {},
);

const StackCss = css({
  listStyleType: 'none',
  paddingLeft: 0,
  // '> * + *': {
  //   [typeMargin()]: '$$stackSpacing',
  // },

  variants: {
    spacing,
  },

  defaultVariants: {
    // @ts-ignore
    spacing: 8,
  },
});

const StyledFlex = styled(Box, {
  display: 'flex',
  variants: {
    flexDirection: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
      },
    },

    flexWrap: {
      nowrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      'wrap-reverse': {
        flexWrap: 'wrap-reverse',
      },
    },

    alignItems: {
      'flex-start': {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      'flex-end': {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },

    justifyContent: {
      'flex-start': {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      'flex-end': {
        justifyContent: 'flex-end',
      },
      'space-between': {
        justifyContent: 'space-between',
      },
      'space-evenly': {
        justifyContent: 'space-evenly',
      },
      'space-around': {
        justifyContent: 'space-around',
      },
    },
  },
  defaultVariants: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
  },
});

export type StyledStackVariants = VariantProps<typeof StyledFlex>;
export type CSSStackVariants = VariantProps<typeof StackCss>;

export type StackProps =
  | ({ children: React.ReactNode; css?: CSS; spacing?: number; flexDirection?: Direction } & Omit<
      StyledStackVariants,
      'spacing'
    >) &
      Omit<CSSStackVariants, 'spacing'>;

function Stack({ spacing, flexDirection = 'row', css, ...props }: StackProps) {
  return (
    <StyledFlex
      flexDirection={flexDirection}
      // @ts-ignore
      className={StackCss({ spacing })}
      css={{
        ...css,
        '> * + *': {
          ...directionMargin({ flexDirection }),
        },
      }}
      {...props}
    />
  );
}

export default Stack;
