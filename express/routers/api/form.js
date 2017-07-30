
const formCtrl = require('../../controllers/api/form');

module.exports = (router) => {
  router.get('/', formCtrl.getForm);
  router.post('/', formCtrl.postForm);
};