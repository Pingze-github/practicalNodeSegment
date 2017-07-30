
module.exports = {
  index
};

async function index(req, res, next) {
  next({view: 'manage'});
}