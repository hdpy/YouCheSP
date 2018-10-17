const remote = require('./remote.js');

const apis = require('./apis.js');

/**
 * 根据条件获取积分专区商品数据
 */
function get_integral_list_by_maps(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_integral_list'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 根据条件获取套餐商品数据
 */
function get_package_list_by_maps(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_package_list'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 根据条件获取商品数据
 */
function get_all(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_commodity_all'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取商品栏目列表
 */
function get_item_cates(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_item_cates'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取一条商品信息
 */
function get_one(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_commodity_only'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取配送方式
 */
function get_delivery_methods(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_delivery_methods'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 提交订单
 */
function submit_order(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('submit_order'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 提交订单
 */
function add_recharge_order(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('add_recharge_order'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}
/**
 * 更新订单
 */
function update_order(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('update_order'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}
/**
 * 提交订单
 */
function create_activity_order(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('create_activity_order'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 提交推广商品订单
 */
function create_promotion_order(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('create_promotion_order'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 提交购物车
 */
function create_gwc(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('create_gwc'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
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
 * 获取支付订单数据
 */
function get_order_zf(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_order_zf'), params));
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
        resolve(remote.req_server(apis.get_api_by_key('order_evaluation'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 自我推荐
 */
function send_self_recommend(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('send_self_recommend'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}

function get_by_id_spec(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_by_id_spec'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 将到店自取订单设置为已完成【店员操作】
 */
function set_order_finished(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('set_order_finished'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 将到店自取订单设置为已完成【店员操作】
 */
function balance_pay(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('balance_pay'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取当前用户套餐活动
 */
function get_activity_by_uid(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_activity_by_uid'), params));
    }).catch((reject) => {
        reject(reject);
    });
}

/**
 * 获取套餐活动列表
 */
function get_activity_list() {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_activity_list'), null));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取每日领取单品记录
 */
function get_one_days_list(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_one_days_list'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取用户分销日志
 */
function get_distribution_datas(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_distribution_datas'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取单条套餐商品
 */
function get_package_only(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_package_only'), params));
    }).catch((err) => {
        reject(err);
    });
}



/**
 * 获取关于我们
 */
function get_abount_content(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_abount_content'), params));
    }).catch((err) => {
        reject(err);
    });
}
module.exports = {
    get_all: get_all,
    get_integral_list_by_maps: get_integral_list_by_maps,
    get_package_list_by_maps: get_package_list_by_maps,
    get_item_cates: get_item_cates,
    get_one: get_one,
    submit_order: submit_order,
    get_orders: get_orders,
    get_order_by_only: get_order_by_only,
    send_evaluation: send_evaluation,
    send_self_recommend: send_self_recommend,
    get_delivery_methods: get_delivery_methods,
    get_by_id_spec: get_by_id_spec,
    create_gwc: create_gwc,
    get_order_zf: get_order_zf,
    create_activity_order: create_activity_order,
    create_promotion_order: create_promotion_order,
    set_order_finished: set_order_finished,
    get_activity_by_uid: get_activity_by_uid,
    get_activity_list: get_activity_list,
    get_one_days_list: get_one_days_list,
    get_distribution_datas: get_distribution_datas,
    get_package_only: get_package_only,
    get_abount_content: get_abount_content,
    update_order: update_order,
    add_recharge_order: add_recharge_order,
    balance_pay: balance_pay
}