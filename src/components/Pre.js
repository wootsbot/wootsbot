import { styled } from '@/stitches';

const Pre = styled('pre', {
  $$background: '$colors$violet2',
  $$text: '$colors$gray12',
  $$outline: '0 0 0 1.5px $colors$violet3',
  $$syntax0: '$colors$pink11',
  $$syntax1: '$colors$blue11',
  $$syntax2: '$colors$cyan11',
  $$syntax3: '$colors$blue11',
  $$syntax4: '$colors$blue11',
  $$syntax5: '$colors$violet11',
  $$comment: '$colors$slate10',
  $$removed: '$colors$red11',
  $$added: '$colors$green11',
  $$lineNumbers: '$colors$indigo5',
  $$fadedLines: '$colors$slate10',
  $$highlightedWord1Bg: '$colors$violet4',
  $$highlightedWord1BgActive: '$colors$violet6',
  $$highlightedWord1Text: '$colors$violet11',
  $$highlightedWord2Bg: '$colors$red3',
  $$highlightedWord2BgActive: '$colors$red5',
  $$highlightedWord2Text: '$colors$red11',
  $$highlightedWord3Bg: '$colors$green3',
  $$highlightedWord3BgActive: '$colors$green5',
  $$highlightedWord3Text: '$colors$green11',

  boxSizing: 'border-box',
  borderRadius: '$sm',
  padding: '$3',
  overflow: 'auto',
  fontFamily: '$mono',
  fontSize: '$sm',
  lineHeight: '$base',
  whiteSpace: 'pre',
  position: 'relative',
  backgroundColor: '$$background',
  color: '$$text',
  boxShadow: '$$outline',

  '& > code': {
    display: 'block',
  },

  '.token.variable': {
    color: '$$syntax5',
  },

  '.token.parameter': {
    color: '$$text',
  },

  '.token.class-name': {
    color: '$$syntax0',
  },

  '.token.tag, .token.selector, .token.selector .class, .token.function': {
    color: '$$syntax1',
  },

  '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
    color: '$$syntax2',
  },

  '.token.attr-name': {
    color: '$$syntax5',
  },

  '.token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
    color: '$$syntax3',
  },

  '.token.punctuation, .token.module, .token.property': {
    color: '$$syntax4',
  },

  '.token.comment': {
    color: '$$comment',
  },

  '.token.atapply .token:not(.rule):not(.important)': {
    color: 'inherit',
  },

  '.language-shell .token:not(.comment)': {
    color: 'inherit',
  },

  '.language-css .token.function': {
    color: 'inherit',
  },

  '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
    display: 'block',
    px: '$4',
    mx: '-20px',
  },

  '.token.deleted:not(.prefix)': {
    color: '$$removed',
  },

  '.token.inserted:not(.prefix)': {
    color: '$$added',
  },

  '.token.deleted.prefix, .token.inserted.prefix': {
    userSelect: 'none',
  },

  // Styles for highlighted word
  '.highlight-word': {
    $$bgAndShadow: '$$highlightedWord1Bg',
    $$xOffset: '1px',
    color: '$$highlightedWord1Text',
    backgroundColor: '$$bgAndShadow',
    display: 'inline-block',
    boxShadow: '$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow',

    // reset the color for tokens inside highlighted words
    '.token': {
      color: 'inherit',
    },

    '&.on': {
      $$bgAndShadow: '$$highlightedWord1BgActive',
      transition: 'all 100ms ease',
      cursor: 'pointer',
    },
  },

  '.token.deleted .highlight-word': {
    $$bgAndShadow: '$$highlightedWord2Bg',
    color: '$$highlightedWord2Text',

    '&.on': {
      $$bgAndShadow: '$$highlightedWord2BgActive',
    },
  },

  '.token.inserted .highlight-word': {
    $$bgAndShadow: '$$highlightedWord3Bg',
    color: '$$highlightedWord3Text',

    '&.on': {
      $$bgAndShadow: '$$highlightedWord3BgActive',
    },
  },

  // Line numbers
  '&[data-line-numbers=true]': {
    '.highlight-line': {
      position: 'relative',
      paddingLeft: '$4',

      '&::before': {
        content: 'attr(data-line)',
        position: 'absolute',
        left: -5,
        top: 0,
        color: '$$lineNumbers',
      },
    },
  },

  // Styles for highlighted lines
  '.highlight-line': {
    '&, *': {
      transition: 'color 150ms ease',
    },
    '&[data-highlighted=false]': {
      '&, *': {
        color: '$$fadedLines',
      },
    },
  },

  // Typewriter styles
  '.typewriter': {
    opacity: 0,
  },

  variants: {
    theme: {
      gitHub: {},
      atom: {},
      sublimeText: {},
      wootsbot: {},
      codea: {
        $$background: '$colors$slate12',
        $$text: '$colors$gray5',
        $$outline: 'none',
        $$syntax1: '$colors$blue8',
      },
    },
  },
});

export default Pre;
