
const pkg = require('../package.json');

module.exports = {
  server: {
    port: 9423
  },
  authority: {
    adminIps: [
      '10.32.8.31'
    ]
  },
  log  : {
    dir            : process.platform === 'win32' ?  `D:/raid/${pkg.name}/log` : `/raid/${pkg.name}/log/`,
    nolog          : /\.(js|css|png|jpg|jpeg|ico|svg|gif)/,
    format         : ':remote-addr :method :url :status :response-time ms :user-agent :content-length',
    replaceConsole : true,
    level          : 'AUTO',
    console        : false
  },
};