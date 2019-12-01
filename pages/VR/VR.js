// pages/VR/VR.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 0,
    windowWidth: 0,
    // text:"这是一个页面"
    video: '',
    img: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options.video);
    // console.log(options.img);
    var that = this;
    let height = 0;
    let width = 0;
    wx.getSystemInfo({
      success: function (res) {
        height = res.windowHeight;
        width = res.windowWidth;
      },
    })

    that.setData({
      windowHeight: height,
      windowWidth: width,
      video: options.video,
      // img:options.img

    })


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