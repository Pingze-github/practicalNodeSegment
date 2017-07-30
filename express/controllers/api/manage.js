module.exports = {
  getList,
  edit,
  start,
  stop,
  pause
};

async function getList(req, res, next) {
  let data = {};
  next({data});
}

async function edit(req, res, next) {
  next({});
}

async function start(req, res, next) {
  next({});
}

async function stop(req, res, next) {
  next({});
}

async function pause(req, res, next) {
  next({});
}
