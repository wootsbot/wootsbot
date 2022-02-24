import { styled } from '@/stitches';

const Text = styled('p', {
  // Reset
  lineHeight: '$tall',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
        letterSpacing: '-.015em',
      },
      '2xl': {
        fontSize: '$2xl',
        letterSpacing: '-.016em',
      },
      '3xl': {
        fontSize: '$3xl',
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      '4xl': {
        fontSize: '$4xl',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '5xl': {
        fontSize: '$5xl',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
      '6xl': {
        fontSize: '$6xl',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
      '7xl': {
        fontSize: '$7xl',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
      '8xl': {
        fontSize: '$8xl',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
      '9xl': {
        fontSize: '$9xl',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },
    color: {
      red: {
        color: '$red11',
      },
      crimson: {
        color: '$crimson11',
      },
      pink: {
        color: '$pink11',
      },
      purple: {
        color: '$purple11',
      },
      violet: {
        color: '$violet11',
      },
      indigo: {
        color: '$indigo11',
      },
      blue: {
        color: '$blue11',
      },
      cyan: {
        color: '$cyan11',
      },
      teal: {
        color: '$teal11',
      },
      green: {
        color: '$green11',
      },
      lime: {
        color: '$lime11',
      },
      yellow: {
        color: '$yellow11',
      },
      orange: {
        color: '$orange11',
      },
      gold: {
        color: '$gold11',
      },
      bronze: {
        color: '$bronze11',
      },

      gray: {
        color: '$gray11',
      },

      contrast: {
        color: '$hiContrast',
      },

      primary: {
        color: '$textPrimary',
      },

      secondary: {
        color: '$textSecondary',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      color: 'red',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $red11, $crimson11)',
      },
    },
    {
      color: 'crimson',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $crimson11, $pink11)',
      },
    },
    {
      color: 'pink',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $pink11, $purple11)',
      },
    },
    {
      color: 'purple',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $purple11, $violet11)',
      },
    },
    {
      color: 'violet',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $violet11, $indigo11)',
      },
    },
    {
      color: 'indigo',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $indigo11, $blue11)',
      },
    },
    {
      color: 'blue',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $blue11, $cyan11)',
      },
    },
    {
      color: 'gray',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $gray11, $gray12)',
      },
    },
    {
      color: 'contrast',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $hiContrast, $gray12)',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'secondary',
  },
});

export default Text;
