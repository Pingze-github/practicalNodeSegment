
const stateCtrl = require('../../controllers/api/state');

module.exports = (router) => {
  router.get('/', stateCtrl.getList);
};