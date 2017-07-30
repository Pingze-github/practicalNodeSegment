
const homeCtrl = require('../../controllers/home');

module.exports = (router) => {
  router.get('/', homeCtrl.index);
};
