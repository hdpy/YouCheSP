/**
 * 用户处理部件
 * HDPY
 * @date 2018/03/20
 */

//高德地图SDK
const amap = require('./amap-wx.js');

//高德地图KEY
const amap_key = 'd2b44c2c953cfc91872058f8feca07be';

const remote = require('./remote.js');

const apis = require('./apis.js');

/**
 * 用户登录并提交用户信息到远程服务器
 * @success 成功回调处理方法
 * @fail 失败回调处理方法
 */
function loading_user(success, fail) {
    const app = getApp();
    app.msgbox.showloading('登录中...', () => {
        login().then(
            (res) => {
                const code = res.code;
                get_user_info().then(
                    (res) => {
                        setting_userinfo(Object.assign(res, {
                            code: code
                        })).then(
                            (res) => {
                                app.msgbox.hideloading();
                                if (res.statusCode == '200' && res.data.status && res.data.data) {
                                    app.msgbox.promptmsg('已登录', function() {
                                        setTimeout(function() {
                                            //将登录信息存储在APP中
                                            app.globalData.userInfo = res.data.data;
                                            success(res.data.data);
                                        }, 1100);
                                    }, 'success');
                                } else {
                                    app.msgbox.hideloading();
                                    fail("setting_userinfo error");
                                }
                            },
                            (err) => {
                                app.msgbox.hideloading();
                                fail("setting_userinfo fail");
                            }
                        );
                    },
                    (err) => {
                        app.msgbox.hideloading();
                        fail("get_user_info error");
                    }
                );
            },
            (err) => {
                app.msgbox.hideloading();
                fail("wx_login error");
            }
        );
    });
}

/**
 * 登录
 */
function login() {
    return new Promise((resolve, reject) => {
        wx.login({
            success: resolve,
            fail: reject
        });
    });
}

/**
 * 用户信息
 */
function get_user_info() {
    const scope = "userInfo";
    return new Promise((resolve, reject) => {
        chk_authorize(scope).then(
            (res) => {
                resolve(res);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

//验证是否有某个授权
function chk_authorize(scope) {
    scope = "scope." + scope;
    return new Promise((resolve, reject) => {
        wx.getSetting({
            success: res => {
                if (!res.authSetting[scope]) {

                    wx.redirectTo({
                        url: 'confirm_get_userinfo'
                    });
                    // get_authorize(scope).then(
                    //   (res) => {              
                    //     wx_userinfo().then(
                    //       (res) => resolve(res),
                    //       (err) => reject(err)
                    //     );
                    //   },
                    //   (err) => { reject(err); }
                    // );

                } else {
                    wx_userinfo().then(
                        (res) => resolve(res),
                        (err) => reject(err)
                    );
                }
            },
            fail: reject
        });
    });
}

function wx_userinfo() {
    return new Promise((resolve, reject) => {
        wx.getUserInfo({
            withCredentials: true,
            lang: 'zh_CN',
            success: resolve,
            fail: reject
        });
    });
}

/**
 * 授权
 */
function get_authorize(scope) {
    return new Promise((resolve, reject) => {
        wx.authorize({
            scope: scope,
            success: resolve,
            fail: reject
        });
    });
}

/**
 * 获取地理位置
 */
function get_current_location(type = 'wgs84') {
    return new Promise((resolve, reject) => {
        wx.getLocation({
            type: type,
            success: resolve,
            fail: reject
        });
    });
}

/**
 * 根据微信获取的地理位置逆构出当前城市信息
 */
function convert_to_city(local_info = null) {
    if (local_info == null) {
        return new Promise((resolve, reject) => {
            reject(new Error('定位失败'));
        });
    }

    let {
        longitude,
        latitude
    } = local_info;
    if (longitude == '' || latitude == '') {
        return new Promise((resolve, reject) => {
            reject(new Error('定位失败'));
        });
    }

    var myAmapFun = new amap.AMapWX({
        key: amap_key
    });
    return new Promise((resolve, reject) => {
        myAmapFun.getRegeo({
            location: `${longitude},${latitude}`,
            success: data => {
                let city = data[0].regeocodeData.addressComponent.city;
                if (city == '')
                    city = data[0].regeocodeData.addressComponent.province;
                if (city != '')
                    city = city.replace('市', '');
                resolve(city);
            },
            fail: info => {
                reject('定位失败');
            }
        });
    });
}

/**
 * 提交用户信息到服务器端
 */
function setting_userinfo(data) {
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('submit_user_info');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}

/**
 * 订单价格为零时提交支付
 */
function update_order_price_no(data) {
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('update_order_price_no');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}

/**
 * 二维码生成
 */
function get_wx_qr_code(data) {
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('get_wx_qr_code');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}

/**
 * 凑单二维码
 */
function get_order_piece_together_qr_code(data){
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('get_order_piece_together_qr_code');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}

/**
 * 取消未支付订单
 */
function order_cancel(data) {
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('order_cancel');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}
/**
 * 获取用户已经登录的用户信息
 */
function get_server_userinfo() {
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('submit_user_info');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}

/**
 * 更新用户信息
 */
function change_user_info(data) {
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('change_userinfo');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}

/**
 * 绑定会员卡
 */
function bind_card(data) {
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('bind_card');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}

function set_member_share(data) {
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('set_member_share');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}

/**
 * 获取单个会员
 */
function get_one(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_member_by_id'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取预约数据
 */
function get_integral_logs(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_integral_logs'), params));
    }).catch((err) => {
        reject(err);
    });
}
/**
 * 获取用户优惠数据
 */
function get_is_vip(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_is_vip'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取用户上线数据
 */
function get_member_shares(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('member_shares'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取用户推广统计
 */
function get_my_extend(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_my_extend'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取用户上线数据
 */
function get_access_token(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_access_token'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取用户推广商品购买资格
 */
function get_my_buy_item_reel(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_my_buy_item_reel'), params));
    }).catch((err) => {
        reject(err);
    });
}
/**
 * 获取我的礼品列表
 */
function get_my_gift(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_my_gift'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取设置礼品状态
 */
function set_status_my_gift_by_id(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('set_status_my_gift_by_id'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 获取用户所有体现账户
 */
function get_withdraw_cash_account(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_withdraw_cash_account'), params));
    }).catch((err) => {
        reject(err);
    });
}

/**
 * 删除提现账户
 */
function del_withdraw_cash_account(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('del_withdraw_cash_account'), params));
    }).catch((err) => {
        reject(err);
    });
}
/**
 * 添加提现账户
 */
function add_withdraw_cash_account(data) {
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('add_withdraw_cash_account');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}

/**
 * 获取用户提现记录
 */
function get_cash_withdraw_list(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_cash_withdraw_list'), params));
    }).catch((err) => {
        reject(err);
    });
}  

/**
 * 推广商品设置
 */
function get_is_staff(params){
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_is_staff'), params));
    }).catch((err) => {
        reject(err);
    });
} 
/**
 * 获取地图数据
 */
function get_map(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_map'), params));
    }).catch((err) => {
        reject(err);
    });
}
/**
 * 获取推广商品介绍
 */
function get_extension_info(params) {
    return new Promise((resolve, reject) => {
        resolve(remote.req_server(apis.get_api_by_key('get_extension_info'), params));
    }).catch((err) => {
        reject(err);
    });
}
/**
 * 申请提现
 */
function add_cash_withdraw(data) {
    return new Promise((resolve, reject) => {
        let api = apis.get_api_by_key('add_cash_withdraw');
        remote.req_server(api, data, {
            method: 'POST',
            'content-type': 'application/json'
        }).then(
            (res) => resolve(res),
            (err) => reject(err)
        );
    });
}
module.exports = {
    loading_user: loading_user,
    login: login,
    get_user_info: get_user_info,
    get_current_location: get_current_location,
    convert_to_city: convert_to_city,
    setting_userinfo: setting_userinfo,
    get_server_userinfo: get_server_userinfo,
    change_user_info: change_user_info,
    bind_card: bind_card,
    get_one: get_one,
    get_integral_logs: get_integral_logs,
    get_is_vip: get_is_vip,
    get_member_shares: get_member_shares,
    get_access_token: get_access_token,
    set_member_share: set_member_share,
    update_order_price_no: update_order_price_no,
    get_wx_qr_code: get_wx_qr_code,
    get_my_extend: get_my_extend,
    get_my_buy_item_reel: get_my_buy_item_reel,
    get_my_gift: get_my_gift,
    set_status_my_gift_by_id: set_status_my_gift_by_id,
    get_withdraw_cash_account: get_withdraw_cash_account,
    add_withdraw_cash_account: add_withdraw_cash_account,
    del_withdraw_cash_account: del_withdraw_cash_account,
    get_cash_withdraw_list: get_cash_withdraw_list,
    add_cash_withdraw: add_cash_withdraw,
    get_is_staff: get_is_staff,
    get_order_piece_together_qr_code: get_order_piece_together_qr_code,
    order_cancel: order_cancel,
    get_map: get_map,
    get_extension_info: get_extension_info
};