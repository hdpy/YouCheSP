//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: {}, //用户信息
        canIUse: wx.canIUse('button.open-type.getUserInfo'), //
        banner: null ,//轮播图
        brand: null,//品牌
        price_range:null,//价格范围
        types: null,//类型
        new_item: null,//最新商品
        show_item_cate_item: null,//分类
    },
    onLoad: function() {
        //加载首页数据
        this.load_index_data();
        
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    onShow: function(){
    },
    /**
     * 加载首页数据
     */
    load_index_data: function() {
        app.base_fetch.get_index_data().then((res) => {
            // console.log(res.data.data)
            if (res.statusCode == '200' && res.data.status) {
                res = res.data.data;
                this.setData({
                    banner: res.banner,//轮播图
                    brand: res.brand,//品牌
                    price_range: res.price_range,//价格范围
                    types: res.types,//类型
                    new_item: res.new_item,//最新商品
                    show_item_cate_item: res.show_item_cate_item //分类
                });
            }
        })
        console.log(this.data);
    },
})