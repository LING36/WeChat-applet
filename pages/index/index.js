var APT_URL = 'https://api.douban.com/v2/movie/top250';
Page({
  data: {
    title: '加载中...',
    movies: []
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: "加载中...",
      icon: "loading",//提示的图标/loading
      duration: 10000,//提示框持续时间
      success: function () {
        console.log("接口成功回调")
      }
    });
    // 调用豆瓣接口api
    wx.request({
      url: APT_URL,
      data: {},
      //   method: 'GET', 
      header: {
        "Content-Type": "json"
      }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        var data = res.data;
        wx.hideToast();//当数据请求完成后隐藏提示窗口
        that.setData({
          title: data.title,
          movies:data.subjects
        });
      }
    })
  }
})
