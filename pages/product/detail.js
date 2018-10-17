// pages/product/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collect: false, //是否收藏
    multiArray: [
      ['10%', '20%', '30%', '全额'],
      ['12期', '24期', '36期', '48期']
    ],
    multiIndex: [0, 0],
    scrollTop: 0,
    scrollHei: [], //区域高度
    showTop: 0, //是否显示
    topNav: ['金融方案', '车辆信息', '购车说明'],
    topNavIndex: 0, //选中第几个
  },
  /**
   * 点击顶部导航
   */
  topNav: function(e){
    let key = e.currentTarget.dataset.index;
    switch (key){
      case 0: 
        this.setData({
          scrollTop: 0,
          topNavIndex: 0
        })
        break;
      case 1:
        this.setData({
          scrollTop: this.data.scrollHei[0],
          topNavIndex: 1
        })
        break;
      case 2:
        this.setData({
          scrollTop: this.data.scrollHei[0] + this.data.scrollHei[1],
          topNavIndex: 2
        })
        break;
    }
  },
  /**
   * 滚动屏幕
   */
  scroll: function(e) {
    let scrolltop = e.detail.scrollTop
    if (scrolltop < 300) {
      this.setData({
        showTop: 0
      })
    } else if (scrolltop > 300 && scrolltop < this.data.scrollHei[0]) {
      this.setData({
        showTop: 1,
        topNavIndex: 0
      })
    } else if (scrolltop > this.data.scrollHei[0] && scrolltop < (this.data.scrollHei[0] + this.data.scrollHei[1])) {
      this.setData({
        showTop: 1,
        topNavIndex: 1
      })
    } else if (scrolltop > (this.data.scrollHei[0] + this.data.scrollHei[1])) {
      this.setData({
        showTop: 1,
        topNavIndex: 2
      })
    }
  },
  /**
   * 收藏
   */
  collectState: function() {
    this.setData({
      collect: !this.data.collect
    })
  },
  bindMultiPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let query = wx.createSelectorQuery().in(this);
    let arr = ['.product-1', '.product-2', '.product-3'];
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      query.select(arr[i]).boundingClientRect()
    }
    query.exec(res => {
      let hi = 0;
      for (let i = 0; i < arr.length; i++) {
        arr1.push(res[i].height);
      }
      this.setData({
        scrollHei: arr1
      })
    })
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