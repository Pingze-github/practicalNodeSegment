
const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();

module.exports = router;

const home = createRouter(path.join(__dirname, 'home'));
const manage = createRouter(path.join(__dirname, 'manage'));
const api = createRouter(path.join(__dirname, 'api'));

function createRouter(dir) {
  let router = express.Router();
  fs.readdirSync(dir).forEach((file) => {
    require(path.join(dir, file))(router);
  });
  return router;
}

router.use('/', home);
router.use('/manage', manage);
router.use('/api', api);