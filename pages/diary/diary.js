var common = require('../../utils/common.js');
var Bmob = require('../../utils/bmob.js');
var util = require('../../utils/util.js');
var app = getApp();
var that;
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  goToFood: function () {
    console.log("go to food");
    wx.navigateTo({
      url: '/pages/food/food',
    });
  },
   goToSport: function () {
    console.log("go to sport");
    wx.navigateTo({
      url: '/pages/sport/sport',
    });
  },

  //加载食物
   onLoad: function () {
     var that = this;
     var Food = Bmob.Object.extend("food");
     var query = new Bmob.Query(Food);
     query.equalTo("publisher", wx.getStorageSync("user_id"));
     //查询所有数据
     query.find({
       success: function (results) {
         console.log("共查询到" + results.length + "条记录");
         //循环处理查询到的数据
         for (var i = 0; i < results.length; i++) {
           var object = results[i];
           console.log(object.id + '-' + object.get('foodname'));
         }
         //请求成功将数据存入food_list
         that.setData({
           food_list: results
         });
       },
       error: function (error) {
         alert("查询失败：" + error.code + " " + erroe.message);
       }
     });
     
     var that = this;
     var Sport = Bmob.Object.extend("sport");
     var query = new Bmob.Query(Sport);
     query.equalTo("publisher", wx.getStorageSync("user_id"));
     //查询所有数据
     query.find({
       success: function (results) {
         console.log("共查询到" + results.length + "条记录");
         //循环处理查询到的数据
         for (var i = 0; i < results.length; i++) {
           var object = results[i];
           console.log(object.id + '-' + object.get('sportname'));
         }
         //请求成功将数据存入food_list
         that.setData({
           sport_list: results
         });
       },
       error: function (error) {
         alert("查询失败：" + error.code + " " + erroe.message);
       }
     });
   }
})
