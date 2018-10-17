//index.js
//获取应用实例
const app = getApp()

// pages/product/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item_list: null, //商品列表
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //加载商品列表
        this.load_get_item_list();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    /**
     * 加载商品列表
     */
    load_get_item_list: function(params = '') {
        app.commodity.get_all(params).then((res) => {
            if (res.statusCode == '200' && res.data.status) {
                if (res.data.status == 1) {
                    this.setData({
                        item_list: res.data.data
                    });
                }
            } else {
                app.msgbox.promptmsg('请求失败');
                return false;
            }
        })
    }
})