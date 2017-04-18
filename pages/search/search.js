// pages/search/search.js
var API_URL = 'https://api.douban.com/v2/movie/search'
Page({
  data: {
    movies: []
  },
  search: function (e) {
    if (!e.detail.value) {
      return;
    }
    wx.showToast({
      title:"加载中...",
      icon: "loading",//提示的图标/loading
      duration: 10000,//提示框持续时间

    });
    var that = this;
    // 调用豆瓣接口api
    wx.request({
      url: API_URL+"?q=" + e.detail.value,
      data: {},
      //   method: 'GET', 
      header: {
        "Content-Type": "json"
      }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        // var data = res.data;
        wx.hideToast();//当数据请求完成后隐藏提示窗口
        that.setData({
          movies: res.data.subjects
        });
      }
    });
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  
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