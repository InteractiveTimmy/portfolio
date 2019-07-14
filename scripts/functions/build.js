const execute = require('./execute');

module.exports = (args) => {
  if (args.params.length === 0) {
    // TODO - this needs to iterate over all build methods using all packages
  } else {
    const clean = args.params.find(param => param.argument === 'clean');
    const transpile = args.params.find(param => param.argument === 'transpile');
    const compile = args.params.find(param => param.argument === 'compile');
    // const compress = args.params.find(param => param.argument === 'clean');

    Promise.resolve()
      .then(() => {
        process.app.log('starting build process', 'DEBUG');
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
        return (compile) ? execute(compile.targets, 'compile') : Promise.resolve();
      })
      .catch(() => { process.app.log('failed to build', 'ERROR'); });

    /*
    args.params.forEach((param) => {
      execute(param.targets, param.argument);
    });
    */
  }
};
