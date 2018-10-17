/**
 * API 列表
 */
const apis = [{

    //获取数据
    index: 'index/index',

    //获取首页轮播图api
    index_rotation_maps: 'index/get_rotation_maps',

    //首页百变风格至臻完美
    index_news_cates: 'index/get_news_cates',

    //获取商品栏目列表
    get_item_cate_list: 'commodity/get_item_cate_list',

    //获取商品栏目列表
    get_item_list: 'commodity/get_item_list',

    //获取积分专区栏目列表
    get_item_cates: 'commodity/get_item_cates',

    //获取积分专区数据列表
    get_integral_list: 'commodity/get_integral_list',

    //获取套餐数据列表
    get_package_list: 'commodity/get_package_list',

    //获取单个商品数据
    get_commodity_only: 'commodity/get_by_id',

    //更新订单
    update_order: 'commodity/update_order',

    //获取所有商品
    get_commodity_all: 'commodity/get_all',

    //获取配送方式
    get_delivery_methods: 'commodity/get_delivery_methods',

    //提交订单
    submit_order: 'commodity/create_order',

    //创建活动套餐订单
    create_activity_order: 'commodity/create_activity_order',

    //创建推广商品订单
    create_promotion_order: 'commodity/create_promotion_order',

    //获取支付订单
    get_order_zf: 'commodity/order_zf',

    // //提交订单
    // create_gwc: 'commodity/create_gwc',

    //获取用户订单
    get_orders: 'commodity/get_orders',

    //获取客服电话
    get_kf_telphone: 'index/get_kf_telphone',

    //上传图片
    upload_img: 'index/upload_img',

    //获取风格详情
    get_style_detial: 'index/get_style_detial',

    //获取风格列表
    get_style_list: 'index/get_style_list',

    //提交订单评论
    order_evaluation: 'shops/create_evaluation',

    //获取评论列表
    get_evaluation_list: 'shops/get_evaluations',

    //提交用户信息
    submit_user_info: 'member/setting_userinfo',

    //订单价格为零时提交
    update_order_price_no: 'member/update_order_price_no',

    //获取服务器已经登录的用户信息
    get_server_userinfo: 'member/get_userinfo',

    //用户上传头像
    change_head: 'member/change_head',

    //更新用户信息
    change_userinfo: 'member/change_info',

    //用户绑定会员卡
    bind_card: 'member/bind_card',

    //获取用户积分日志明细
    get_integral_logs: 'member/get_integral_logs',

    //获取单个会员信息
    get_member_by_id: 'member/get_by_id',

    //发送微信服务消息
    send_message: 'member/send_service_massage',

    //获取用户优惠数据
    get_is_vip: 'member/is_vip',

    //获取地图数据
    get_map: 'member/get_map',

    //获取推广商品介绍
    get_extension_info: 'member/get_extension_info',

    //获取用户上线数据
    member_shares: 'member/member_shares',

    //微信支付 订单预付信息获取
    wx_pay_advances: 'wx_pay/get_pay_advances',

    //微信充值
    wx_pay_recharge: 'wx_pay/wx_pay_recharge',

    //查询微信订单状态
    wx_pay_search: 'wx_pay/get_order_pay_status',

    //查询商品规格
    get_by_id_spec: 'commodity/get_by_id_spec',

    //添加充值订单
    add_recharge_order: 'commodity/add_recharge_order',

    //生成分校二维码
    get_wx_qr_code: 'member/get_wx_qr_code',

    //生成凑单外卖二维码
    get_order_piece_together_qr_code: 'member/get_order_piece_together_qr_code',

    //设置分销用户
    set_member_share: 'member/set_member_share',

    //获取套餐活动
    get_item_vip_list: 'member/get_item_vip_list',

    //更新订单状态为店员已经确认
    set_order_finished: 'member/change_order_status',
    //取消未支付订单
    order_cancel: 'member/order_cancel',

    //获取当前用户套餐活动
    get_activity_by_uid: 'member/get_activity_by_uid',

    //获取套餐活动列表
    get_activity_list: 'member/get_activity_list',

    //获取每日领取单品记录
    get_one_days_list: 'member/get_one_days_list',

    //获取用户分销日志
    get_distribution_datas: 'member/get_distribution_datas',

    //获取用户推广数据
    get_my_extend: 'member/get_my_extend',

    //获取用户推广商品购买卷
    get_my_buy_item_reel: 'member/get_my_buy_item_reel',

    //获取用户礼品数据
    get_my_gift: 'member/get_my_gift',

    //设置用户礼品状态
    set_status_my_gift_by_id: 'member/set_status_my_gift_by_id',

    //获取提现账户
    get_withdraw_cash_account: 'member/get_withdraw_cash_account',

    //添加提现账户
    add_withdraw_cash_account: 'member/add_withdraw_cash_account',

    //添加提现账户
    del_withdraw_cash_account: 'member/del_withdraw_cash_account',

    //获取所有提现记录
    get_cash_withdraw_list: 'member/get_cash_withdraw_list',

    //申请提现
    add_cash_withdraw: 'member/add_cash_withdraw',

    //推广商品设置
    get_is_staff: 'member/get_is_staff',


    //获取单个套餐活动商品
    get_package_only: 'commodity/get_package_only',
    
    //余额支付
    balance_pay: 'commodity/balance_pay',

    //获取文章
    get_abount_content: 'index/get_abount_content',
}];

function get_api_by_key(key) {
    return apis[0][key];
}

module.exports = {
    get_api_by_key: get_api_by_key,
}