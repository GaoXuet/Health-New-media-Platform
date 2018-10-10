// pages/addfamilymember/addfamilymember.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  openAlert1: function () {
    wx.showModal({
      content: 'BMI指数，即身体质量指数，是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准。',
      showCancel: false,
      confirmText:'我知道了',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
    },
  openAlert2: function () {
    wx.showModal({
      content: '体脂率是指人体内脂肪重量在人体总重量中所占的比例，又称体脂百分数，它反映人体内脂肪含量的多少。',
      showCancel: false,
      confirmText: '我知道了',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  testagain: function () {
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
})

