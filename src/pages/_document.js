import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText, globalCss } from '@/stitches';

const codeClass = `code[class*='language - '], pre[class*='language- ']`;

const globalStyles = globalCss({
  html: { margin: 0, padding: 0, fontSize: 16 },
  body: { margin: 0, padding: 0, fontFamily: '$inter', fontSize: 16 },
  // pre: {
  //   overflowX: 'auto',
  // },

  'ol, ul': {
    listStyle: 'none',
  },

  '.wootsbot-article': {
    fontSize: '1rem',
    lineHeight: 1.75,
  },

  '.wootsbot-article': {
    color: '$gray12',
  },

  '.wootsbot-article ol, ul': {
    marginTop: '1.25em',
    marginBottom: '1.25em',
  },

  '.wootsbot-article>ul>li>:last-child': {
    marginBottom: '1.25em',
  },

  '.wootsbot-article>ul>li>:first-child': {
    marginTop: '1.25em',
  },

  '.wootsbot-article strong': {
    color: '#111',
    fontWeight: 600,
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
    backgroundColor: '$gray10',
    borderRadius: '50%',
    width: '.375em',
    height: '.375em',
    top: 'calc(.875em - .1875em)',
    left: '.25em',
  },

  '.wootsbot-article .anchor': {
    marginLeft: '-1em',
    paddingRight: '0.5em',
    width: '80%',
    maxWidth: 700,
    cursor: 'pointer',
  },

  '.wootsbot-article p': {
    marginTop: '1.25em',
    marginBottom: '1.25em',
  },

  '.wootsbot-article pre': {
    border: '1px solid $gray3',
    backgroundColor: '$gray1',
    overflowX: 'auto',
    fontSize: '.875em',
    lineHeight: '1.7142857',
    marginTop: '1.7142857em',
    marginBottom: '1.7142857em',
    borderRadius: '.375rem',
    padding: '.8571429em 1.1428571em',
  },

  '.wootsbot-article pre code': {
    color: '$gray12',
  },

  '.wootsbot-article pre code': {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
    padding: 0,
    fontWeight: 400,
  },

  '.code-highlight': {
    float: 'left',
    minWidth: '100%',
  },

  '.code-line': {
    display: 'block',
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: -16,
    marginRight: -16,
    borderLeftWidth: 4,
    borderLeftColor: 'rgb(31, 41, 55)',
  },

  '.highlight-line': {
    marginLeft: -16,
    marginRight: -16,
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderLeftWidth: 4,
    borderLeftColor: 'rgb(59, 130, 246)',
  },

  'line-number::before': {
    paddingRight: 16,
    marginLeft: -8,
    color: 'rgb(156, 163, 175)',
    content: 'attr(line)',
  },

  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '$gray12',
  },

  '.token.punctuation': {
    color: '$gray12',
  },

  '.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted': {
    color: '$green8',
  },

  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
    color: '$purple8',
  },

  '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
    color: '$violet11',
  },

  '.token.atrule, .token.attr-value, .token.keyword': {
    color: '$blue8',
  },

  '.token.function, .token.class-name': {
    color: '$pink8',
  },

  '.token.regex, .token.important, .token.variable': {
    color: '$violet11',
  },

  [codeClass]: {
    color: 'red',
  },

  'pre::-webkit-scrollbar': {
    display: 'none',
  },

  pre: {
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
  },
});

export default class Document extends NextDocument {
  render() {
    globalStyles();

    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
