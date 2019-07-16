export default {
  input: { index: `${__dirname}\\dist\\index.js` },
  output: {
    format: 'umd',
    name: '[name]',
    dir: `${__dirname}/build`,
    indent: '\t',
  },
};
