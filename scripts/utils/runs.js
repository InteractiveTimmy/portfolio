const { exec } = require('child_process');

module.exports = command => new Promise(
  (resolve, reject) => {
    exec(command, (err, stdout) => {
      if (err) {
        reject(err);
      } else {
        resolve(stdout);
      }
    });
  },
);
