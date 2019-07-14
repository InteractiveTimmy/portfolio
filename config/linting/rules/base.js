module.exports = {
  'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  'import/prefer-default-export': 'off',
  'lines-between-class-members': 'off',
  'max-len': ['error', { code: 120 }],
};
