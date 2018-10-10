// pages/sport/sport.js
var common = require('../../utils/common.js');
var Bmob = require('../../utils/bmob.js');
var util = require('../../utils/util.js');
var app = getApp();
var that;
Page({
  data: {
    user_id: wx.getStorageSync("user_id"),
    sname: "",
    simage: "",
    stime: 0,
    calorie: 0,
    sumcalorie: 0,
    sporttime: '',
    hiddenmodalput: true
  },
  modalinput: function (e) {
    // =this.data.item.sportname;
    this.setData({
      sname: e.currentTarget.dataset.select,
      simage: e.currentTarget.dataset.testid,
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  stimeInput: function (e) {
    this.setData({
      stime: e.detail.value
    })
  },
  sportInput: function (e) {
    this.setData({
      sname: e.detail.value.sname,
      stime: e.detail.value.stime
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
    var Sport = Bmob.Object.extend("sportorigine");
    var query = new Bmob.Query(Sport);
    //查询所有数据
    query.find({
      success: function (results) {
        console.log("共查询到" + results.length + "条记录");
        //循环处理查询到的数据
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log(object.id + '-' + object.get('sportname'));
        }
        //请求成功将数据存入sport_list
        that.setData({
          sport_list: results
        });
      },
      error: function (error) {
        alert("查询失败：" + error.code + " " + erroe.message);
      }
    });
  },
  getCalorie: function (event) {
    var that = this;
    var Sport = Bmob.Object.extend("sportorigine");
    var query = new Bmob.Query(Sport);
    query.equalTo("sportname", that.data.sname);
    /*
    query.get("sportname","苹果",{
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
        console.log("输入的食物为:" + that.data.sname);
        console.log("共查询到 " + results.length + " 条记录");
        // 循环处理查询到的数据
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log("查出的卡路里为：" + object.id + ' - ' + object.get('calorie'));
          that.data.calorie = parseInt(object.get('calorie'));
        }
        that.data.sumcalorie = that.data.stime * that.data.calorie;
        console.log("消耗的总卡路里为：" + that.data.sumcalorie);

        that.addData();
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
  },

  //添加运动记录
  addData: function (event) {
    var that = this;
    var Sport = Bmob.Object.extend("sport");
    var sport = new Sport();
    //设置数据
    key: this.data.user_id;
    var publisher = this.data.user_id;
    var runtime = this.data.stime;
    var sportname = this.data.sname;
    var sportcalorie = this.data.sumcalorie;
    var sporttime = util.formatTime(new Date());
    var sportimage = this.data.simage;

    sport.set("publisher", publisher);
    sport.set("sporttime", sporttime);
    sport.set("sportname", sportname);
    sport.set("sportcalorie", sportcalorie);
    sport.set("runtime", runtime);
    sport.set("sportimage", sportimage);
    // 添加数据，第一个入口参数是Json数据
    sport.save(null, {
      success: function (result) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        console.log("运动添加成功, objectId:" + result.id);
      },
      error: function (result, error) {
        // 添加失败
        console.log(sportname + " " + sporttime);
        console.log('添加运动失败');
      }
    });
  }
})


