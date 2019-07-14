const { environment } = require('../../config/index');

module.exports = (env) => {
  switch (env) {
    default:
    case 'prod': return environment.production;
    case 'dev': return environment.development;
  }
};
