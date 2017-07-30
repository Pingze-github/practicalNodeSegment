
const defines = require('./defines');

module.exports = function (options) {
  options = options || {};
  let defaultFormat = options.format || 'JSONString';

  return function finallyResp(result, req, res, next) {
    if (_.isError(result)) {
      result = {
        status : 'interalError',
        code   : 500,
        err    : result,
        msg    : result.message
      };
    }

    let msg = result.msg || defines[result.code].desc;
    let ext = result.ext || {};

    let view = null;
    if (!(req.url.indexOf('/api') > -1)) {
      view = result.view || defines[result.code].view;
    }

    let page = result.page;
    let err = result.err;
    let desc = result.desc || defines[result.code].desc;

    function dealError(err) {
      logger.error('\nError begin', '\n', err, '\n', 'Error End');
      if (page || view) {
        res.status(500);
        res.render('500', {err});
      }
    }

    if (view) {
      if (err) {
        dealError(err);
      } else {
        res.render(view, (err, html) => {
          if (err) {
            dealError(err);
          } else {
            res.send(html);
          }
        });
      }
    } else if (page) {
      res.send(page);
    } else {
      if (err) {
        dealError(err);
      }
      let retObj = {
        code        : result.code,
        status      : 'success',
        message     : msg,
        extdata     : ext,
        description : desc
      };
      let format = defaultFormat;
      if (format === 'JSONString') {
        res.send(JSON.stringify(retObj));
      } else {
        res.json(retObj);
      }
    }
  };
};
