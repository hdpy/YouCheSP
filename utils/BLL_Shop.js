const remote = require('./remote.js');

const apis = require('./apis.js');

/**
 * 根据条件获取商家数据
 */
function get_list_by_maps(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_shop_datas'), params));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 获取一条商家信息
 */
function get_one(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_shop_one'), params));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 提交订单
 */
function submit_order(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('submit_order'), params, { method: 'POST', 'content-type': 'application/json' }));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 获取预约数据
 */
function get_orders(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_orders'), params));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 获取单条预约
 */
function get_order_by_only(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('get_order_by_only'), params));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 提交评论
 */
function send_evaluation(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('order_evaluation'), params, { method: 'POST', 'content-type': 'application/json' }));
  }).catch((err) => {
    reject(err);
  });
}

/**
 * 自我推荐
 */
function send_self_recommend(params) {
  return new Promise((resolve, reject) => {
    resolve(remote.req_server(apis.get_api_by_key('send_self_recommend'), params, { method: 'POST', 'content-type': 'application/json' }));
  }).catch((err) => {
    reject(err);
  });
}

module.exports = {
  get_list_by_maps: get_list_by_maps,
  get_one: get_one,
  submit_order: submit_order,
  get_orders: get_orders,
  get_order_by_only: get_order_by_only,
  send_evaluation: send_evaluation,
  send_self_recommend: send_self_recommend
}