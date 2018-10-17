const remote = require('./remote.js');

const apis = require('./apis.js');


/**
 * ********************
 * 获取基础信息
 * HDPY
 * @date 2018/03/22
 * ********************
 */

/**
 * 获取首页数据
 */
function get_index_data(count) {
    let api = apis.get_api_by_key('index');
    return remote.req_server(api, count);
}

/**
 * 获取首页轮播图
 */
function get_index_rotation_maps(count) {
    let api = apis.get_api_by_key('index_rotation_maps');
    return remote.req_server(api, {
        count: count
    });
}

/**
 * 获取商品分类
 */
function get_item_cate_list(count) {
    let api = apis.get_api_by_key('get_item_cate_list');
    return remote.req_server(api, {
        count: count
    });
}


/**
 * 获取商品
 */
function get_item_list(data) {
    let api = apis.get_api_by_key('get_item_list');
    return remote.req_server(api, data);
}

/**
 * 获取首页百变风格至臻完美栏目列表
 */
function get_index_news_cates(count) {
    let api = apis.get_api_by_key('index_news_cates');
    return remote.req_server(api, {
        count: count
    });
}

/**
 * 获取套餐活动
 */
function get_item_vip_list() {
    let api = apis.get_api_by_key('get_item_vip_list');
    return remote.req_server(api);
}

module.exports = {
    get_index_data: get_index_data,
    get_index_rotation_maps: get_index_rotation_maps,
    get_index_news_cates: get_index_news_cates,
    get_item_cate_list: get_item_cate_list,
    get_item_list: get_item_list,
    get_item_vip_list: get_item_vip_list
}