// pages/movie/movie.js
var API_URL = 'https://api.douban.com/v2/movie/subject/';
Page({
  data: {
    movie: {}
  },
  onLoad: function (options) {
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    // 调用豆瓣接口api
    wx.request({
      url: API_URL + options.id,
      data: {},
      //   method: 'GET', 
      header: {
        "Content-Type": "json"
      }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        that.setData({
          movie: res.data
        })
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})