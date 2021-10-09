import visit from 'unist-util-visit';
import hastToHtml from 'hast-util-to-html';
import unified from 'unified';
import parse from 'rehype-parse';

const CALLOUT = /__(.*?)__/g;

const highlightWord = (code) => {
  const html = hastToHtml(code);
  const result = html.replace(CALLOUT, (_, text) => `<span class="highlight-word">${text}</span>`);
  const hast = unified().use(parse, { emitParseErrors: true, fragment: true }).parse(result);
  return hast.children;
};

export default highlightWord;
