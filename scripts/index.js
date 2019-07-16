const functions = require('./functions/index');
const utils = require('./utils/index');

process.app = {
  config: utils.confs(process.env.NODE_ENV || 'dev'),
  log: utils.logs,
  args: utils.args(process.argv),
};

const {
  log,
  args,
} = process.app;

switch (args.command) {
  case 'build': functions.build(args); break;
  case 'test': log('command "test" is not yet built', 'WARN'); break;
  case 'start': log('command "start" is not yet built', 'WARN'); break;
  default: log(`unknown command "${args.command}"`, 'ERROR');
}
