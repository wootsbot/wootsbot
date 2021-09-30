import { createStitches, defaultThemeMap } from '@stitches/react';
import { gray, blue, red, green, grayDark, blueDark, redDark, greenDark, blackA, whiteA } from '@radix-ui/colors';

export const { styled, css, globalCss, keyframes, theme, createTheme, getCssText, config } = createStitches({
  themeMap: {
    ...defaultThemeMap,
  },
  prefix: 'wootsbot',
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...blackA,
      ...whiteA,
      accent1: '$blue1',
      accent2: '$blue2',
      accent3: '$blue3',
      accent4: '$blue4',
      accent5: '$blue5',
      accent6: '$blue6',
      accent7: '$blue7',
      accent8: '$blue8',
      accent9: '$blue9',
      accent10: '$blue10',
      accent11: '$blue11',
      accent12: '$blue12',

      success1: '$green1',
      success2: '$green2',
      // repeat for all steps

      warning1: '$yellow1',
      warning2: '$yellow2',
      // repeat for all steps

      danger1: '$red1',
      danger2: '$red2',
    },
    space: {
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
    },
    fonts: {
      system: 'system-ui',
      inter: 'Inter',
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
});
