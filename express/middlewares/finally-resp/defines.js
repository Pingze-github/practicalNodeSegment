
const status = {
  200: {code: 200, status:'succees', desc: '成功'},
  500: {code: 500, status:'interalError', desc: '内部错误', view: '500'},
  404: {code: 404, status:'notFound', desc: '接口不存在', view: '404'},
  403: {code: 403, status:'noAuth', desc: '没有权限'}
};

module.exports = status;
