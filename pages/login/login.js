// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getVerificationCode: false, //验证码状态
    tellCode: '',
    verificationCode: '', //验证码值
    isSubmit: false, //是否可以提交
  },

  /**
   * 输入手机号码 验证码显示
   */
  getInputTell: function(e) {
    if (e.detail.value) {
      this.setData({
        getVerificationCode: true,
        tellCode: e.detail.value
      })
    } else {
      this.setData({
        getVerificationCode: false,
        tellCode: e.detail.value
      })
    }
  },

  /**
   * 输入验证码 x显示
   */
  verificationCode: function(e) {
    this.setData({
      verificationCode: e.detail.value
    })
  },

  /**
   * 清空验证码
   */
  clearVerificationCode: function(){
    this.setData({
      verificationCode: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  }
})