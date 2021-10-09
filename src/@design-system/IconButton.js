import { styled } from '@/stitches';

const IconButton = styled('button', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontSize: '14px',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  color: '$hiContrast',

  backgroundColor: '$gray5',

  '&::before': {
    boxSizing: 'border-box',
  },

  '&::after': {
    boxSizing: 'border-box',
  },

  '&:hover': {
    cursor: 'pointer',
    boxShadow: '0 0 0 1.5px $colors$gray8',
  },

  '&:active': {
    boxShadow: '0 0 0 1.5px $colors$gray8',
  },

  '&:focus': {
    boxShadow: '0 0 0 1.5px $colors$gray8',
  },

  '&:disabled': {
    pointerEvents: 'none',
    color: '$slate6',
    boxShadow: 'none',
  },

  variants: {
    size: {
      sm: {
        borderRadius: '$sm',
        height: '$2',
        width: '$2',
      },

      md: {
        borderRadius: '$sm',
        height: '$3',
        width: '$3',
      },

      lg: {
        borderRadius: '$md',
        height: '$4',
        width: '$4',
      },

      xl: {
        borderRadius: '$md',
        height: '$5',
        width: '$5',
      },
    },

    variant: {
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: '0',
        '&:hover': {},
        '&:focus': {},
        '&:active': {},
      },
      raised: {
        '&:hover': {},
        '&:focus': {},
        '&:active': {},
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'ghost',
  },
});

export default IconButton;
