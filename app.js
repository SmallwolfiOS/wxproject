//app.js  appdelegate
App({
  onLaunch: function () {
    console.log("程序启动了")
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              var appInstance = getApp()
              console.log(appInstance.globalData.userInfo)
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  onShow: function (options) {
    // Do something when show.
    console.log("程序显示了")
  },
  onHide: function () {
    // Do something when hide.
    console.log("程序退出到后台了")
  },
  onError: function (msg) {
    console.log(msg)
  },
  globalData:{
    userInfo:null
  }
})