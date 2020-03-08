import Typography from 'typography';

const _options = {
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['inter'],
  bodyFontFamily: ['inter'],
};

const typography = new Typography(_options);

export const { scale, rhythm, options } = typography;
export default typography;
