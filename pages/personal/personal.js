//获取应用实例
var app = getApp()
var Bmob = require("../../utils/bmob.js");

Page({
  /**
   * 页面的初始化数据
   */
  data: {
   tempFilePaths: '',
   nickName:'',
   userInfoAvatar:'',
   sex:'',
   height1:0,
   weight1:0,
   heightRange: ['140', '150', '160', '170'],
   weightRange: ['40', '50', '60', '70'], 
   items: [
       {name: 'man', value: '男'},
       {name: 'femail', value: '女', checked: 'true'},
       {name: 'bm', value: '保密'}
     ]
   },
  heightPickerBindchange: function (e) {
    this.setData({
      height1: e.detail.value
    })
  },
  weightPickerBindchange: function (e) {
    this.setData({
      weight1: e.detail.value
    })
  },
  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
  
   chooseimage: function () {
       var _this = this;
       wx.chooseImage({
         count: 1, // 默认9
         sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
         sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
         success: function (res) {
           // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
           _this.setData({
             userInfoAvatar:res.tempFilePaths
           })
         },
         radioChange: function(e) {
          console.log('radio发生change事件，携带value值为：', e.detail.value)
        },
      })
    },
  onLoad: function () {
    var that=this;
    wx.getUserInfo({
      success: function(res){
        // success
        that.setData({
          nickName:res.userInfo.nickName,
          userInfoAvatar:res.userInfo.avatarUrl,
          province:res.userInfo.province,
          city:res.userInfo.city
        })

        switch(res.userInfo.gender){
          case 0:
            that.setData({
              sex:'未知'
            })
          break;
          case 1:
            that.setData({
              sex:'男'
            })
          break;
          case 2:
            that.setData({
              sex:'女'
            })
          break;
        }
      },
      fail: function() {
        // fail
        console.log("获取失败！")
      },
      complete: function() {
        // complete
        console.log("获取用户信息完成！")
        console.log(this.province)
      }
    })
  },

  //提交表单
  submitForm:function(e){
    var that = this;
    var title = e.detail.value.title;
    var endtime = this.data.data;
  }
})
