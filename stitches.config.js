import { createStitches, defaultThemeMap } from '@stitches/react';
import {
  violet,
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  blackA,
  whiteA,
  tomato,
  tomatoA,
  indigo,
  yellow,
  yellowA,
  purple,
  pink,
} from '@radix-ui/colors';

export const { styled, css, globalCss, keyframes, theme, createTheme, getCssText, config } = createStitches({
  media: {
    // phone: '(min-width: 520px)',
    // tablet: '(min-width: 900px)',
    // desktop: '(min-width: 1200px)',
    // wide: '(min-width: 1800px)',
    phone: '(width < 720px)',
    tablet: '(720px <= width < 1024px)',
    desktop: '(1024px <= width < 1536px)',
    wide: '(1536px <= width)',
  },
  utils: {
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
  // themeMap: {
  //   ...defaultThemeMap,
  // },
  prefix: 'wootsbot',
  theme: {
    colors: {
      ...violet,
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...blackA,
      ...whiteA,
      ...tomato,
      ...tomatoA,
      ...indigo,
      ...yellow,
      ...yellowA,
      ...purple,
      ...pink,
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

      hiContrast: '$gray12',

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
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px',
      11: '88px',
      12: '96px',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '40px',
      8: '48px',
      9: '56px',
      10: '64px',
      11: '72px',
      12: '80px',
      13: '88px',
    },
    fonts: {
      system: 'system-ui',
      inter: 'Inter',
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      none: '0',
      sm: '4px',
      base: '8px',
      md: '8px',
      lg: '16px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '48px',
      round: '50%',
      full: '9999px',
    },
    shadows: {},
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
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
