import { createStitches } from '@stitches/react';
import {
  violet,
  violetDark,
  gray,
  grayDark,
  blue,
  blueDark,
  red,
  redDark,
  green,
  greenDark,
  indigo,
  indigoDark,
  yellow,
  yellowDark,
  purple,
  purpleDark,
  pink,
  pinkDark,
  mauve,
  mauveDark,
  slate,
  slateDark,
  mint,
  mintDark,
  sage,
  sageDark,
  gold,
  goldDark,
} from '@radix-ui/colors';

export const { styled, css, globalCss, keyframes, theme, createTheme, getCssText, config } = createStitches({
  prefix: 'wootsbot',
  media: {
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

  theme: {
    colors: {
      ...violet,
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...indigo,
      ...yellow,
      ...purple,
      ...pink,
      ...mauve,
      ...slate,
      ...mint,
      ...sage,
      ...gold,
      hiContrast: '$gray12',
      // loContrast: 'white',
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
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fonts: {
      system: 'system-ui',
      inter: 'Inter',
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'JetBrains Mono,Söhne Mono, menlo, monospace',
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

    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },

    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },

    sizes: {
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

    shadows: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
      code: `0 0 0 1.5px ${violet.violet3}`,
      cardBase: `0 0 0 1px ${gray.gray5}`,
      cardHover: `0 0 0 1.5px ${gray.gray6}`,
      cardSuccess: `0 0 0 1.5px ${green.green6}`,
      cardError: `0 0 0 1.5px ${red.red8}`,
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      none: 'none',
      'dark-lg':
        'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
    },

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

export const globalStyles = globalCss({
  html: { margin: 0, padding: 0, fontFamily: '$inter', fontSize: 16 },
  body: { margin: 0, padding: 0, backgroundColor: '$mauve1' },

  '::selection': {
    backgroundColor: '$violet11',
    color: '$gray1',
  },

  '.wootsbot-article>ul>li>:last-child': {
    marginBottom: '1.25em',
  },

  '.wootsbot-article>ul>li>:first-child': {
    marginTop: '1.25em',
  },

  '.wootsbot-article ul>li': {
    position: 'relative',
    paddingLeft: '1.75em',
    marginTop: '.5em',
    marginBottom: '.5em',
  },

  '.wootsbot-article ul>li:before': {
    content: '',
    position: 'absolute',
    backgroundColor: '$slate11',
    borderRadius: '50%',
    width: '.375em',
    height: '.375em',
    top: 'calc(.875em - .1875em)',
    left: '.25em',
  },
});

export const darkTheme = createTheme({
  colors: {
    ...violetDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...indigoDark,
    ...yellowDark,
    ...purpleDark,
    ...pinkDark,
    ...mauveDark,
    ...slateDark,
    ...mintDark,
    ...sageDark,
    ...goldDark,
  },
});
