const remote = require('./remote.js');

const apis = require('./apis.js');

/**
 * 获取培训列表
 */
function get_list(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_activity_list'), params));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 获取单条培训
 */
function get_one(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_activity_only'), params));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 报名提交
 */
function submit_signup(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('submit_signup'), params, { method: 'POST', 'content-type': 'application/json' }));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 获取用户参加的活动
 */
function get_user_signups(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_user_signups'), params));
  }).catch((err) => {
    reject(err);
  });
}


module.exports = {
  get_list: get_list,
  get_one: get_one,
  submit_signup: submit_signup,
  get_user_signups: get_user_signups
}