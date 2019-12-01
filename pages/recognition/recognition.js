const app = getApp();

// pages/recognition/recognition.js
var CusBase64 = require('../untils/base64.js');
function base64_decode(input) { // 解码，配合decodeURIComponent使用

  var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var output = "";
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (i < input.length) {
    enc1 = base64EncodeChars.indexOf(input.charAt(i++));
    enc2 = base64EncodeChars.indexOf(input.charAt(i++));
    enc3 = base64EncodeChars.indexOf(input.charAt(i++));
    enc4 = base64EncodeChars.indexOf(input.charAt(i++));
    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;
    output = output + String.fromCharCode(chr1);
    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3);
    }
  }
  return utf8_decode(output);
}


function utf8_decode(utftext) { // utf-8解码
  var string = '';
  let i = 0;
  let c = 0;
  let c1 = 0;
  let c2 = 0;
  while (i < utftext.length) {
    c = utftext.charCodeAt(i);
    if (c < 128) {
      string += String.fromCharCode(c);
      i++;
    } else if ((c > 191) && (c < 224)) {
      c1 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
      i += 2;
    } else {
      c1 = utftext.charCodeAt(i + 1);
      c2 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
      i += 3;
    }
  }
  return string;
}
Page({
  data: {
  
    status: false,
    scanStatus: 'none',
    msg: "请点击识别图片",
    video:"",
    img:""
  },
 
  onLoad: function (options) {
    this.ctx = wx.createCameraContext();
    this.getresult();

    wx.getSystemInfo({
      success: res => {
        this.setData({ height: res.windowHeight });
      }
    });
  },

  

  stopScan: function () {
    this.setData({ scanStatus: 'none' });
  },

  onShow: function () {
    this.setData({ msg: '请点击识别图片' });
  },

  error: function (e) {
    this.setData({ msg: '打开摄像头失败，请点击“立即体验' });
  },

  getresult:function(){


  },

  searchPhoto: function (filePath) {
    var that = this;
    wx.uploadFile({
      url: 'https://www.lszscm.com/SimpleThreeJsExample/recognize.php',
      filePath:filePath,
      name: 'image',
      header: {
        'content-type':'application/x-www-form-urlencoded'
      },
      success: res => {
        this.status = false;
        let length = res.data.length;
        console.log(res.data);
        let msg = JSON.parse(res.data.substring(0, length).trim())
        console.log(msg)
        let mes = msg.result;
        console.log(mes);
        let link = base64_decode(mes.meta);
        console.log(link);
        let json_link = JSON.parse(link);
        // console.slog(json_link.video);
        console.log(json_link);
        that.setData({
          video:json_link.src
        })
      
        // that.setData({
        //   video:json_link.video,
         
        // })
        if (msg.statusCode != 0) {
          
          this.setData({ msg: '识别失败' });
        } else {
         this.setData({ msg: '识别成功' });
          setTimeout(() => {
            console.info('go to webar');
            let video = this.data.video;
            // let img = this.data.img;
            wx.navigateTo({
              url: '../VR/VR?video='+video
            });
          }, 500);
        }
      },
      fail: err => {
        this.status = false;
        console.log(err)
        this.setData({ msg: JSON.stringify(err) });
      }
    });
  },

  takePhoto: function (e) {
    if (this.status) return;
    this.status = true;
    this.ctx.takePhoto({
      quality: 'normal',
      success: res => {
        console.log(res.tempImagePath)
        this.setData({ msg: '识别中...' });
        this.searchPhoto(res.tempImagePath);
      },
      fail: err => {
        console.log(res.tempImagePath)
        this.stopScan();
        this.setData({ msg: '未识别到目标' });
      }
    });
  }
})
