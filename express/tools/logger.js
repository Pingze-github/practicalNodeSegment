
'use strict';

const log4js = require('log4js');
const path = require('path');

fse.mkdirsSync(config.log.dir);
fse.mkdirsSync(config.log.dir + 'main');

const log4jsConfig = {
  appenders : {
    file: {
      type                : 'datefile',
      filename            : path.join(config.log.dir, 'log'),
      pattern             : 'yyyy-MM-dd.log',
      encoding            : 'utf-8',
      alwaysIncludePattern: true,
      maxLogSize          : 20480,
    },
    console : {
      type: 'console'
    },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'all'
    },
    onlyFile: {
      appenders: ['file'],
      level: 'all'
    },
    onlyConsole: {
      appenders: ['console'],
      level: 'all'
    },
    all: {
      appenders: ['console', 'file'],
      level: 'all'
    }
  }
};

log4js.configure(log4jsConfig);

const logger = log4js.getLogger('onlyConsole');

module.exports = logger;
