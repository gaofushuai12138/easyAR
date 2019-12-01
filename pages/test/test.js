// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picwidth:"200",
    picheight:"110",
    image:[
      { url: "../img/moutain.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/starhouse.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/painter.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/starhouse.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/moutain.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/starhouse.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/painter.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/starhouse.jpg", id: 1, width: "200px", height: "110px" }
    
    ]
  
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
    var that = this;
    var length = that.data.image.length * that.data.image[0].width;
    console.log(that.data.image[0].width);
    console.log(length);

  
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