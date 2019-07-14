module.exports = (value, level) => {
  let lvl = level || 'INFO';

  let output;

  switch (typeof value) {
    case 'string': output = value; break;
    case 'boolean':
    case 'number': output = value.toString(); break;
    case 'object': output = JSON.stringify(value); break;
    default: lvl = 'WARN'; output = 'unknown message type or value';
  }

  if (process.app.config.log.level.includes(lvl)) {
    process.stdout.write(`\x1b[2m[${new Date().toISOString()}] `);

    switch (lvl) {
      case 'INFO': process.stdout.write('\x1b[1m'); break;
      case 'DEBUG': process.stdout.write('\x1b[32m'); break;
      case 'WARN': process.stdout.write('\x1b[33m'); break;
      case 'ERROR': process.stdout.write('\x1b[31m'); break;
      default:
    }
    process.stdout.write(output);
    process.stdout.write('\x1b[0m \n');
  }
};
