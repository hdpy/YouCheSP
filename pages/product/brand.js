// pages/product/brand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    brandArr: [{
      letter: 'A',
      arr: [{
        imgURL: 'https://image.guazistatic.com/files/brand/103783.png',
        name: '标志'
      }]
    }, {
      letter: 'B',
      arr: [{
        imgURL: 'https://image.guazistatic.com/files/brand/1206.png',
        name: '别克'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/103783.png',
        name: '北汽昆宝'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1226.png',
        name: '标志'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1196.png',
        name: '本田'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1212.png',
        name: '比亚迪'
      }]
    }, {
      letter: 'C',
      arr: [{
        imgURL: 'https://image.guazistatic.com/files/brand/1206.png',
        name: '别克'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/103783.png',
        name: '北汽昆宝'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1226.png',
        name: '标志'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1196.png',
        name: '本田'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1212.png',
        name: '比亚迪'
      }]
    }, {
      letter: 'D',
      arr: [{
        imgURL: 'https://image.guazistatic.com/files/brand/1206.png',
        name: '别克'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/103783.png',
        name: '北汽昆宝'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1226.png',
        name: '标志'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1196.png',
        name: '本田'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1212.png',
        name: '比亚迪'
      }]
    }, {
      letter: 'E',
      arr: [{
        imgURL: 'https://image.guazistatic.com/files/brand/1206.png',
        name: '别克'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/103783.png',
        name: '北汽昆宝'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1226.png',
        name: '标志'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1196.png',
        name: '本田'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1212.png',
        name: '比亚迪'
      }]
    }, {
      letter: 'F',
      arr: [{
        imgURL: 'https://image.guazistatic.com/files/brand/1206.png',
        name: '别克'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/103783.png',
        name: '北汽昆宝'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1226.png',
        name: '标志'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1196.png',
        name: '本田'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1212.png',
        name: '比亚迪'
      }]
    }, {
      letter: 'G',
      arr: [{
        imgURL: 'https://image.guazistatic.com/files/brand/1206.png',
        name: '别克'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/103783.png',
        name: '北汽昆宝'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1226.png',
        name: '标志'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1196.png',
        name: '本田'
      }, {
        imgURL: 'https://image.guazistatic.com/files/brand/1212.png',
        name: '比亚迪'
      }]
    }]
  },
  /**
   * 点击右边导航
   */
  rightNav: function(e) {
    let index = e.currentTarget.dataset.index;
    wx.showToast({
      title: this.data.letter[index],
      icon: 'none', 
      duration: 1000
    }) 
    let arr = [];
    let lis = this.data.brandArr;
    for (let i in lis) {
      arr.push('.brand-li' + i)
    }
    let that = this;
    if (index === 0) {
      this.setData({
        scrollTop: 0
      })
    } else {
      let query = wx.createSelectorQuery().in(this)
      for (let i = 0; i < index; i++) {
        query.select(arr[i]).boundingClientRect()
      }
      query.exec(res => {
        let hi = 0;
        for (let i = 0; i < index; i++) {
          hi = hi + res[i].height;
        }
        this.setData({
          scrollTop: hi
        })
      })
    }
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