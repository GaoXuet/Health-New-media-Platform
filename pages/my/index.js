var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  myorder:function () {
    wx.navigateTo({
      url: '../myorder/myorder'
    })
  },
  addfamilymember: function () {
    wx.navigateTo({
      url: '../addfamilymember/addfamilymember'
    })
  },
  myreport: function () {
    wx.navigateTo({
      url: '../myreport/myreport'
    })
  },
  healthtest: function () {
    wx.navigateTo({
      url: '../healthtest/healthtest'
    })
  },
  personal: function() {
  wx.navigateTo({
    url: '../personal/personal'
    })
},
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
