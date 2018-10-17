const remote = require('./remote.js');

const apis = require('./apis.js');

/**
 * 发送服务通知消息
 */
function send_msg(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('send_message'), params, { method: 'POST', 'content-type': 'application/json' }));
  }).catch((err) => {
    reject(err);
  });
}

module.exports = {
  send_msg: send_msg,
}