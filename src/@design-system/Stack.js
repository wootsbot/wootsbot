import { css, config, styled } from '@/stitches';
import Box from '@/design-system/Box';

const { space } = config.theme;

const directionMargin = (options) => {
  const { flexDirection: direction } = options;

  const directionStyles = {
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

function Stack({ spacing, flexDirection, css, ...props }) {
  return (
    <StyledFlex
      flexDirection={flexDirection}
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
