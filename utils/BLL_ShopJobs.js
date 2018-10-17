const remote = require('./remote.js');

const apis = require('./apis.js');

/**
 * 获取职位列表
 */
function get_list(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_shop_job_list'), params));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 获取单条职位
 */
function get_one(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_shop_job_only'), params));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 简历提交
 */
function submit_resumes(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('submit_resumes'), params, { method: 'POST', 'content-type': 'application/json' }));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 获取用户投递的简历列表
 */
function get_user_resumes(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_user_resumes'), params));
  }).catch((err) => {
    reject(err);
  });
}

module.exports = {
  get_list: get_list,
  get_one: get_one,
  submit_resumes: submit_resumes,
  get_user_resumes: get_user_resumes
}