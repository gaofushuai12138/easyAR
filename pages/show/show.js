// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight:0,
    windowWidth:0,
    // text:"这是一个页面"
    video: '',
    img:''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
		/**
		 * 监听音乐播放
     * 
     * 
		 */
    console.log(options.video);
    // console.log(options.img);
    var that = this;
    let height = 0;
    let width = 0;
    wx.getSystemInfo({
      success: function(res) {
        height = res.windowHeight;
        width = res.windowWidth;
      },
    })

    that.setData({
      windowHeight:height,
      windowWidth:width,
      video:options.video,
      // img:options.img

    })

    // wx.playBackgroundAudio({
    //   //播放地址
    //   dataUrl:this.data.video,
    //   title: '京华烟云',
    //   coverImgUrl: 'http://r1.ykimg.com/050E0000576B75F667BC3C136B06E4E7'
    // })

    // wx.onBackgroundAudioPlay(function () {
    //   console.log('onBackgroundAudioPlay')
    // })

		/**
		 * 监听音乐暂停
		 */
    wx.onBackgroundAudioPause(function () {
      console.log('onBackgroundAudioPause')
    })

		/**
		 * 监听音乐停止
		 */
    wx.onBackgroundAudioStop(function () {
      console.log('onBackgroundAudioStop')
    })

  },//播放音乐
  
  
	/**
	* 播放状态
	*/
  listenerButtonGetPlayState: function () {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        console.log(res)
        //duration 总时长
        //currentPosition 当前播放位置
        //status 播放状态
        //downloadPercent 下载状况 100 即为100%
        //dataUrl 当前播放音乐地址
      }
    })
  },
	/**
	* 监听button暂停按钮
	*/
  listenerButtonPause: function () {
    wx.pauseBackgroundAudio();
  },
	/**
	* 设置进度
	*/
  listenerButtonSeek: function () {
    wx.seekBackgroundAudio({
      position: 30
    })
  },
	/**
	*停止播放 
	*/
  listenerButtonStop: function () {
    wx.stopBackgroundAudio()
  }

})