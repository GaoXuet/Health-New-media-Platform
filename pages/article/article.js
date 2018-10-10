Page({
  data: {
        showView: true ,
        pic:"",
        title:"",
        area:"",
        day:"",
        avatar:"",
        name:"",
        experience:"",
        dingjin:"300",
        fee:""
  },
  onShow:function(){
    // wx.removeStorage({
    //   key: 'id'
    // });
    let that=this;
    wx.getStorage({
      key:'pic',
      success:function(res){
        console.log('jiuhuh');
        console.log(res.data);
        that.setData({
          pic:res.data
        })
      }
    });
    wx.getStorage({
      key:'name',
      success:function(res){
        console.log(res.data);
        that.setData({
          name:res.data
        })
      }
    });
    wx.getStorage({
      key:'avatar',
      success:function(res){
        console.log(res.data);
        that.setData({
          avatar:res.data
        })
      }
    });
    wx.getStorage({
      key:'title',
      success:function(res){
        console.log(res.data);
        that.setData({
          title:res.data
        })
      }
    });
    wx.getStorage({
      key:'area',
      success:function(res){
        console.log(res.data);
        that.setData({
          area:res.data
        })
      }
    });
    wx.getStorage({
      key:'day',
      success:function(res){
        console.log(res.data);
        that.setData({
          day:res.data
        })
      }
    });
    wx.getStorage({
      key:'fee',
      success:function(res){
        console.log(res.data);
        that.setData({
          fee:res.data
        })
      }
    });
    wx.getStorage({
      key:'experience',
      success:function(res){
        console.log(res.data);
        that.setData({
          experience:res.data
        })
      }
    });

},
dingdan: function() {
  wx.navigateTo({
    url: '../dingdan/dingdan'
  })
},
  onLoad: function (options) {
   // 生命周期函数--监听页面加载
   showView: (options.showView == "true" ? true : false)
 }
 , onChangeShowState: function () {
   var that = this;
   that.setData({
     showView: (!that.data.showView)
   })
 },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  onChangeShowState:function(){
  var that=this;
  that.setData({
   showView:(!that.data.showView)
  })
},
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
