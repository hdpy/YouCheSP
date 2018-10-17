/**
 * 远程访问模块
 */
const remote = require('./utils/remote.js');

/**
 * API列表
 */
const apis = require('./utils/apis.js');

/**
 * 用户处理模块
 */
const user = require('./utils/user.js');

/**
 * 基础信息获取接口
 */
const base_fetch = require('./utils/base_fetch.js');

/**
 * 对话框
 */
const msgbox = require('./utils/msgbox.js');

/**
 * 常用库
 */
const utils = require('./utils/util.js');

/**
 * 微信支付 支持类
 */
const wxPay = require('./utils/WxPay.js');

/**
 * 商家评论
 */
const evaluation = require('./utils/BLL_Evaluation.js');

/**
 * 商品实体
 */
const commodity = require('./utils/BLL_Commodity.js');

/**
 * 风格实体
 */
const news = require('./utils/BLL_News.js');


//app.js
App({


    /**
     * Remote.
     */
    remote: remote,

    /**
     * User
     */
    user: user,

    /**
     * Base_Fetch
     */
    base_fetch: base_fetch,

    /**
     * Apis
     */
    apis: apis,

    /**
     * MsgBox
     */
    msgbox: msgbox,

    /**
     * WxPay
     */
    wxPay: wxPay,

    /**
     * Evaluation
     */
    evaluation: evaluation,

    /**
     * Commodity
     */
    commodity: commodity,

    /**
     * News
     */
    news: news,

    /**
     * Utils
     */
    utils: utils,

    
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})