const execute = require('./execute');
const { args } = require('../../config/index').building;

module.exports = (iArgs) => {
  const invalidArguments = iArgs.params.filter(arg => !args.includes(arg.argument));

  if (invalidArguments.length !== 0) {
    process.app.log([
      `invalid argument${(invalidArguments.length > 1) ? 's' : ''}: `,
      `"${invalidArguments.map(a => a.argument).join('", "')}" `,
      '...exiting',
    ].join(''), 'ERROR');
    return;
  }

  if (iArgs.params.length === 0) {
    iArgs.params.push(...args.map(a => ({ argument: a, targets: [] })));
  }

  const lint = iArgs.params.find(param => param.argument === 'lint');
  const test = iArgs.params.find(param => param.argument === 'test');
  const clean = iArgs.params.find(param => param.argument === 'clean');
  const transpile = iArgs.params.find(param => param.argument === 'transpile');
  const compile = iArgs.params.find(param => param.argument === 'compile');
  // const compress = args.params.find(param => param.argument === 'clean');

  Promise.resolve()
    .then(() => {
      process.app.log('starting build process', 'DEBUG');
      return (lint) ? execute(lint.targets, 'lint') : Promise.resolve();
    })
    .then((r) => {
      if (r) { process.app.log('finished linting', 'DEBUG'); }
      return (test) ? execute(test.targets, 'test') : Promise.resolve();
    })
    .then((r) => {
      if (r) { process.app.log('finished testing', 'DEBUG'); }
      return (clean) ? execute(clean.targets, 'clean') : Promise.resolve();
    })
    .then((r) => {
      if (r) { process.app.log('finished cleaning', 'DEBUG'); }
      return (transpile) ? execute(transpile.targets, 'transpile') : Promise.resolve();
    })
    .then((r) => {
      if (r) { process.app.log('finished transpiling', 'DEBUG'); }
      return (compile) ? execute(compile.targets, 'compile') : Promise.resolve();
    })
    .then((r) => {
      if (r) { process.app.log('finished compiling', 'DEBUG'); }
      process.app.log('finished build process');
    })
    .catch((e) => {
      process.app.log('failed to build: ', 'ERROR');
      process.app.log(e, 'DEBUG');
    });
};
