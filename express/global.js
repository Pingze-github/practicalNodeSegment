
global.ROOTPATH = __dirname;

global.fse = require('fs-extra');
global._ = require('lodash');
global.Promise = require('bluebird').Promise;

global.config = require('./config');
global.logger = require('./tools/logger');
