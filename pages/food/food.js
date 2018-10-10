// pages/food/food.js
var common = require('../../utils/common.js');
var Bmob = require('../../utils/bmob.js');
var util = require('../../utils/util.js');
var app = getApp();
var that;
Page({
  data: {
    user_id: wx.getStorageSync("user_id"),
    fname: "",
    fimage: "",
    fweight: 0,
    calorie: 0,
    sumcalorie: 0,
    eattime: '',
    hiddenmodalput: true
  },
  modalinput: function (e) {
    // =this.data.item.foodname;
    this.setData({
      fname: e.currentTarget.dataset.select,
      fimage: e.currentTarget.dataset.testid,
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  fnameInput: function (e) {
    this.setData({
      fname: e.detail.value
    })
    //console.log("5555555" + this.fname)
  },
  fweightInput: function (e) {
    this.setData({
      fweight: e.detail.value
    })
  },
  foodInput: function (e) {
    this.setData({
      fname: e.detail.value.fname,
      fweight: e.detail.value.fweight
    })
  },
  //确认
  cancle: function () {
    this.setData({
      hiddenmodalput: true
    })
  },
  confirm: function (e) {
    this.setData({
      hiddenmodalput: true,
    });
    var that = this;
    //that.fnameInput();
    //that.fweightInput();
    that.getCalorie();
  },
  onLoad: function () {
    var that = this;
    var Food = Bmob.Object.extend("foodorigine");
    var query = new Bmob.Query(Food);
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
  },
  getCalorie: function (event) {
    var that = this;
    var Food = Bmob.Object.extend("foodorigine");
    var query = new Bmob.Query(Food);
    query.equalTo("foodname", that.data.fname);
    /*
    query.get("foodname","苹果",{
      success: function (result) {
        // The object was retrieved successfully.
        console.log("该食物卡路里为" + result.get("calorie"));
      },
      error: function (result, error) {
        console.log("查询失败");
      }
    })
    */
    query.find({
      success: function (results) {
        console.log("输入的食物为:" + that.data.fname);
        console.log("共查询到 " + results.length + " 条记录");
        // 循环处理查询到的数据
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log("查出的卡路里为：" + object.id + ' - ' + object.get('calorie'));
          that.data.calorie = parseInt(object.get('calorie'));
        }
        that.data.sumcalorie = that.data.fweight * that.data.calorie;
        console.log("摄入的总卡路里为：" + that.data.sumcalorie);

        that.addData();
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
  },

  //添加入食记录
  addData: function (event) {
    var that = this;
    var Food = Bmob.Object.extend("food");
    var food = new Food();
    //设置数据
    key: this.data.user_id;
    var publisher = this.data.user_id;
    var foodweight = this.data.fweight;
    var foodname = this.data.fname;
    var foodcalorie = this.data.sumcalorie;
    var eattime = util.formatTime(new Date());
    var foodimage = this.data.fimage;

    food.set("publisher", publisher);
    food.set("foodweight", foodweight);
    food.set("foodname", foodname);
    food.set("foodcalorie", foodcalorie);
    food.set("eattime", eattime);
    food.set("foodimage", foodimage);
    // 添加数据，第一个入口参数是Json数据
    food.save(null, {
      success: function (result) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        console.log("食物添加成功, objectId:" + result.id);
      },
      error: function (result, error) {
        // 添加失败
        console.log(foodname + " " + eattime);
        console.log('添加食物失败');
      }
    });
  }
})


