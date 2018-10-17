const remote = require('./remote.js');

const apis = require('./apis.js');

/**
 * 获取支付预付信息
 */
function get_pay_advances(params) {
    if (params == null) {
        return new Promise((resolve, reject) => {
            reject('missing userinfo');
        });
    }

    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('wx_pay_advances'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 充值
 */
function wx_pay_recharge(params) {
    if (params == null) {
        return new Promise((resolve, reject) => {
            reject('missing userinfo');
        });
    }

    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('wx_pay_recharge'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}



/**
 * 调起微信支付接口
 */
function open_pay(params) {
    if (params == null) {
        return new Promise((resolve, reject) => {
            reject('missing params');
        });
    }

    return new Promise((resolve, reject) => {
        wx.requestPayment({
            timeStamp: params.timeStamp,
            nonceStr: params.nonceStr,
            package: params.package,
            signType: params.signType,
            paySign: params.paySign,
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

/**
 * 查询微信订单状态
 */
function search_pay(params) {
    if (params == null) {
        return new Promise((resolve, reject) => {
            reject('missing params');
        });
    }

    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('wx_pay_search'), params, {
            method: 'POST',
            'content-type': 'application/json'
        }));
    }).catch((err) => {
        reject(err);
    });
}

module.exports = {
    get_pay_advances: get_pay_advances,
    open_pay: open_pay,
    search_pay: search_pay,
    wx_pay_recharge: wx_pay_recharge
}