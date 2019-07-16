const { spawn } = require('child_process');

module.exports = command => new Promise(
  (resolve, reject) => {
    const fc = command.split(' ');
    if (process.platform === 'win32') {}
    const script = (process.platform === 'win32') ? 'npm.cmd' : 'npm';

    const cp = spawn(script, fc.splice(1), { stdio: 'inherit' })
      .on('exit', (e) => {
        if (e === 0) {
          resolve(`finished ${script} ${fc.join(' ')}`);
          cp.kill();
        } else {
          reject();
        }
       });
    /*
    const composer = exec(command, ['-c'], (err, stdout) => {
      if (err) {
        reject(stdout);
      } else {
        resolve(stdout);
      }
    });

    composer.stdout.on(
      'data',
      
    )
    */
  },
);
