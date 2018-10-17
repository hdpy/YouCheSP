const remote = require('./remote.js');

const apis = require('./apis.js');

/**
 * 获取商家评论列表
 */
function get_list(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_evaluation_list'), params));
  }).catch((err) => {
    reject(err);
  });
}

module.exports = {
  get_list: get_list,
}