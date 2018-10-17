// pages/personal/topUp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    verificationCode: '', //充值
  },

  /**
 * 输入验证码 x显示
 */
  verificationCode: function (e) {
    console.log(e.detail.value)
    this.setData({
      verificationCode: e.detail.value
    })
  },

  /**
   * 清空验证码
   */
  clearVerificationCode: function () {
    this.setData({
      verificationCode: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})