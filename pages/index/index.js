// 一个page 由wxml wxss js mvc组成
// 数据模型层
let app=getApp();
Page({
  data:{
    indicatorDots:true,
    vertical:false,
    autoplay:true,
    interval:3000,
    duration:1200,
    items:[],
    images:[]
  },
  onLoad:function(){
    // 发送请求获取数据
    let that=this;
    console.log('onLoad');
    // wx是weixin的缩写
    wx.request({
      url:'http://json.bmbstack.com/playingList',
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:function(res){
        console.log(res.data);
        that.setData({
          items:res.data
        })
      }
    })
    wx.request({
      url:'http://json.bmbstack.com/bannerList',
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:function(res){
        console.log(res.data);
        // setData设置数据 强制页面刷新
        that.setData({
          images:res.data
        })

      }
    })
  },
  swiperchange:function(e){
    console.log(e.detail.current);
  },
  bindViewTap:function(e){
    console.log('item clicked');
  }
})
