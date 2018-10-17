const remote = require('./remote.js');

const apis = require('./apis.js');

/**
 * 获取风格列表
 */
function get_style_list(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_style_list'), params));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 获取风格详情
 */
function get_style_detial(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_style_detial'), params));
  }).catch((err) => {
    reject(err);
  });
}

module.exports = {
  get_style_list: get_style_list,
  get_style_detial: get_style_detial
}