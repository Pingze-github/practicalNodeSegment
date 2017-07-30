
const manageCtrl = require('../../controllers/manage');

module.exports = (router) => {
  router.get('/', manageCtrl.index);
};