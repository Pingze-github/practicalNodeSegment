
const manageCtrl = require('../../controllers/api/manage');

module.exports = (router) => {
  router.get('/', manageCtrl.getList);
  router.post('/edit', manageCtrl.edit);
  router.post('/start', manageCtrl.start);
  router.post('/stop', manageCtrl.stop);
  router.post('/pause', manageCtrl.pause);
};