const { files, runs } = require('../utils/index');

module.exports = (targets, method) => {
  // return new Promise((resolve, reject) => {
  const command = pack => `npm run ${pack}:${method}`;

  const packList = files('./packages');

  if (targets.length === 0) {
    return Promise.all(packList.map(pack => runs(command(pack))));
    // packList.forEach((pack) => { runs(command(pack)); });
  }

  if (targets.every(cmd => packList.includes(cmd))) {
    return Promise.all(targets.map(target => runs(command(target))));
    // targets.forEach((pack) => { runs(command(pack)); });
  }

  return Promise.reject(new Error(`invalid packages specified: ${targets.join(' ')}`));
  // process.app.log(`invalid packages specified: ${targets.join(' ')}`, 'ERROR');
  // })
};
