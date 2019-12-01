// pages/index/index.js
var util = require('../../utils/util.js')
Page({
  data: {
    windowHeight:0,
    slider: [
      { linkUrl: "http://y.qq.com/m/act/sfhd/170.html?ADTAG=banner&openinqqmusic=1", picUrl: "../img/moutain.jpg", id: 1, name: "东西岩", unique:1},
      { linkUrl: "http://y.qq.com/m/act/sfhd/170.html?ADTAG=banner&openinqqmusic=1", picUrl: "../img/starhouse.jpg", id: 2,name:"应星楼" },
      { linkUrl: "http://y.qq.com/m/act/sfhd/170.html?ADTAG=banner&openinqqmusic=1", picUrl: "../img/painter.jpg", id: 3,name:"古堰画乡"},
    ],
    swiperCurrent: 0,
    img: "/pages/image/order1.png",
    message: [],
    pic:[
      { name: "古堰画乡", url:"../img/painter.jpg"},
      { name: "应星楼", url:"../img/starhouse.jpg"},
      { name: "南明山", url:"../img/moutain.jpg"},
      { name: "古堰画乡", url: "../img/painter.jpg" },
      { name: "应星楼", url: "../img/starhouse.jpg" },
      { name: "南明山", url: "../img/moutain.jpg" },
      { name: "古堰画乡", url: "../img/painter.jpg" },
      { name: "应星楼", url: "../img/starhouse.jpg" },
      { name: "南明山", url: "../img/moutain.jpg" },
      { name: "古堰画乡", url: "../img/painter.jpg" },
      { name: "应星楼", url: "../img/starhouse.jpg" },
      { name: "南明山", url: "../img/moutain.jpg" }],
    title:[{
      id:1,title:"东西岩"
    },
    {
      id:2,title:"古堰画乡"
    }],
    msgList: [
      { url: "url", title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
      { url: "url", title: "悦如公寓三周年生日趴邀你免费吃喝欢唱" },
      { url: "url", title: "你想和一群有志青年一起过生日嘛？" }],
    image: [
      { url: "../img/moutain.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/starhouse.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/painter.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/starhouse.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/moutain.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/starhouse.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/painter.jpg", id: 1, width: "200px", height: "110px" },
      { url: "../img/starhouse.jpg", id: 1, width: "200px", height: "110px" }
    ],
    tab:[
      {
        img: "../img/AV-A.png", index: 1, pic: '../img/ardemo.jpg', content: "对用户而言，在手机上实现AR(增强现实)技术呈现效果，安装体积庞大的APP，不仅操作复杂，还占用有限的手机资源。本技术无需安装，不占手机资源，无需二维码。直接着对指标性图片扫一扫。精致渲染后的全方位的三维3D模型场景就呈现出来，滑动手指，轻松实现立体模型的放大、缩小、旋转。",
        link:"/pages/recognition/recognition",
        title:"AR体验"
      },
      {
        img: "../img/VR-A.png", index: 2, pic: "../img/artest.png", content: "VR(虚拟现实)技术，创建和体验虚拟世界的计算机仿真系统，它利用计算机生成一种模拟环境，是一种多源信息融合的、交互式的三维动态视景和实体行为的系统仿真使用户沉浸到该环境中。实现720度的全场景的、可操控的浏览。同样，无需安装，不占资源。直接扫描图片快速实现。",
        link:"/pages/AR/AR",
        title:'VR体验'
      },
      {
        img: "../img/view_0.png", index: 3, pic: "../img/video.png", content: "微视频是最常用的展现形式，使用该技术可实现多种模式的应用。如扫一张风景画，自动展现风景的视频介绍，扫一张风味食品的图片，自动护送食品的生成加工制作的视频说明，可实现多种应用场景、应用创意的实现。同样，无需安装，不占资源。直接扫描图片快速实现。",
        title:"微视频体验"
      }
    ],
    people:[{
      background:"../img/guide.jpg",
      introduce:"../img/peopleint.jpg",
      int:"../img/pel.jpg"
    },{
      background:"../img/yang1.jpg",
      introduce:"../img/yang.jpg",
      int:"../img/yang2.jpg"
    },
      {
        background: "../img/guide.jpg",
        introduce: "../img/peopleint.jpg",
        int: "../img/pel.jpg"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let height = 0;
    wx.getSystemInfo({
      success: function(res) {
        height = res.windowHeight;
      }
    })

    that.setData({
      windowHeight:height
    })
  },
  //轮播图的切换事件  
  swiperChange: function (e) {
    //只要把切换后当前的index传给<swiper>组件的current属性即可  
    this.setData({
      // swiperCurrent: e.detail.current
    })
 
  },

  click:function(e){
    console.log(e.currentTarget.dataset.link);
    wx.navigateTo({
      url:e.currentTarget.dataset.link
    })

  },
  //点击指示点切换  
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  tointroduce:function(){
    wx.navigateTo({
      url:"/pages/introduce/introduce"
    })
  }
  ,
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

 jumptoar:function(){
    wx.navigateTo({
      url:"/pages/AR/AR"
    })
 },
jumptovr:function(){
  wx.navigateTo({
    url:"/pages/recognition/recognition"
  })
},
jumptovideo:function(){
  wx.navigateTo({
    url:"/pages/recognition/recognition"
  })
}
 ,
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
  
  },

  jump1:function(){
    wx.navigateTo({
      // url:"/pages/introduce/introduce?id=5"
      url: '/pages/introduce/introduce?background=' + this.data.people[0].background +'&introduce='+this.data.people[0].introduce+"&int="+this.data.people[0].int
    })
  },
  jump2:function(){
    wx.navigateTo({
      url: '/pages/introduce/introduce?background=' + this.data.people[1].background + '&introduce=' + this.data.people[1].introduce + "&int=" + this.data.people[1].int
    })
  },
  jump3:function(){
    wx.navigateTo({
      url: '/pages/introduce/introduce?background=' + this.data.people[2].background + '&introduce=' + this.data.people[2].introduce + "&int=" + this.data.people[2].int
    })
  }
})