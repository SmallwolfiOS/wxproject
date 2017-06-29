//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World，马海平。。。。',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('这算是加载的方法么')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onPullDownRefresh: function () {
    console.log('刷新了，我擦')
    wx.request({
      url: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=18810901468', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  onShareAppMessage:function (){
    return {
      title: '这个就是你要分享的内容的标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 分享成功
        wx.showToast({
          title: '分享成功',
          icon: '',
          image: '',
          duration: 0,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function (res) {
        // 分享失败
      }
    }
  },
})
