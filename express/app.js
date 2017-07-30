
const express = require('express');
const bodyParser = require('body-parser');

require('./global');
const router = require('./routers');
const finallyResp = require('./middlewares/finally-resp');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(router);

app.use((req, res, next) => {
  next({code : 404});
});

app.use(finallyResp());

let server = app.listen(config.server.port, () => {
  let host = server.address().address;
  let port = server.address().port;
  logger.info('App running at http://%s:%s', host, port);
});
