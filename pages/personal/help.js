// pages/personal/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    helpList: [
      {
        id: '0',
        tit: '什么是电子发票？',
        cont: '电子发票的发行和实施其积极意义不言而喻。对消费者而言，发票是消费者的购物凭证，也是维权的重要依据。而对整个电子商务行业来说，电子发票能使所有电商都规范化运营，减少偷税漏税后的恶性竞争，同时也能降低更多企业成本。面对电子发票实施后电商的趋于规范和网购商品价格的可能提升，需要一定的智慧来平衡。',
        stat: false
      },
      {
        id: '1',
        tit: '可以开发票吗？',
        cont: '下单时选择“普通发票（电子）”自助开取，订单完成后，系统会自动开具，用户可登陆京东个人账户，在订单详情页-付款信息页面下载。电子发票是税务局认可的有效收付款凭证，具有售后维权的法律效力，可用于单位报销使用。个人用户选择开具电子发票后无法换取个人抬头的普通纸质发票。',
        stat: false
      },
      {
        id: '2',
        tit: '什么是电子发票？',
        cont: '首次开具增值税专用发票的顾客，请填写开具增值税专用发票所需信息（也可以下单时直接填写增票信息），具体操作路径：我的京东-账户设置-增票资质。',
        stat: false
      }

    ]
  },
  /**
   * 点击显示详细内容
   */
  helpContShow: function (e) {
    var id = e.currentTarget.dataset.id;
    for (let i = 0; i < this.data.helpList.length; i++) {
      this.data.helpList[i].stat = false;
    }
    this.data.helpList[id].stat = !this.data.helpList[id].stat;
    this.setData({
      helpList: this.data.helpList
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