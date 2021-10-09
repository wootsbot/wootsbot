import rangeParser from 'parse-numeric-range';
import visit from 'unist-util-visit';
import nodeToString from 'hast-util-to-string';

import refractor from 'refractor';
import highlightLine from './rehype-highlight-line';
import highlightWord from './rehype-highlight-word';

function visitor(node, index, parent) {
  if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code' || !node.properties.className) {
    return;
  }
  const [_, lang] = node.properties.className[0].split('-');
  const codeString = nodeToString(node);
  let result = refractor.highlight(codeString, lang);
  const linesToHighlight = rangeParser(node.properties.line || '0');
  result = highlightLine(result, linesToHighlight);
  result = highlightWord(result);
  node.children = result;
}

const rehypeHighlightCode = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };
};

export default rehypeHighlightCode;
