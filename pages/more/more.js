Page({
  data: {
    imgUrls: [
      'http://st2.originoo.cn/thumbs/1040166/image/5971/59713675/api_thumb_450.jpg!thumb',
      'http://st2.originoo.cn/thumbs/3308451/image/7152/71529683/api_thumb_450.jpg!thumb',
      'http://st2.originoo.cn/thumbs/4002815/image/7329/73298599/api_thumb_450.jpg!thumb'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    hotList: [
      {
        pic: "http://st.originoo.cn/thumbs/1592314/image/2645/26459055/api_thumb_450.jpg!thumb",
        title: "如何健康饮食",
        avatar: "http://img3.imgtn.bdimg.com/it/u=4293197616,2435113501&fm=23&gp=0.jpg",
        name: "南若北",
        experience: '来自知乎'
      },
      {
        pic: "http://static3.originoo.cn/thumbs/1006110/image/262/2627072/api_thumb_450.jpg!thumb",
        title: "跑步前如何热身",
        avatar: "http://img.qq745.com/uploads/allimg/170413/14-1F413113106-53.png",
        name: "苏晓",
        experience: '来自知乎'
      },
      {
        pic: "http://static8.originoo.cn/thumbs/1016676/image/814/8149724/api_thumb_450.jpg!thumb",
        title: "你还可以选择哪些运动",
        avatar: "http://img.qq745.com/uploads/allimg/170413/14-1F413113108-52.png",
        name: "峰方",
        experience: '来自keep'
      },
      {
        pic: "http://static5.originoo.cn/thumbs/1057320/image/524/5246671/api_thumb_450.jpg!thumb",
        title: "必备家常医疗知识",
        avatar: "http://img.qq745.com/uploads/allimg/170413/14-1F413113109-52.png",
        name: "大鹏",
        experience: '来自网易'
      },
      {
        pic: "http://static6.originoo.cn/thumbs/1003098/image/570/5705346/api_thumb_450.jpg!thumb",
        title: "糖尿病患者如何饮食",
        avatar: "http://img.qq745.com/uploads/allimg/170413/14-1F413113111-50.png",
        name: "一方",
        experience: '来自网络'
      },
      {
        pic: "http://st.originoo.cn/thumbs/1273995/image/2396/23968365/api_thumb_450.jpg!thumb",
        title: "不吃早餐的危害",
        avatar: "http://img.qq745.com/uploads/allimg/150307/1-15030G54010.jpg",
        name: "大浦",
        experience: '来自薄荷网'
      }
    ],
  },
  article: function (e) {
    console.log(e.currentTarget.dataset);
    console.log(e.currentTarget.dataset.pic);
    console.log(e.currentTarget.dataset.name);
    wx.setStorage({
      key: "pic",
      data: e.currentTarget.dataset.pic
    });
    wx.setStorage({
      key: "title",
      data: e.currentTarget.dataset.title
    });
    wx.setStorage({
      key: "avatar",
      data: e.currentTarget.dataset.avatar
    });
    wx.setStorage({
      key: "name",
      data: e.currentTarget.dataset.name
    });
    wx.setStorage({
      key: "experience",
      data: e.currentTarget.dataset.experience
    });
    wx.navigateTo({
      url: '../article/article'
    });

  },
  more: function () {
    wx.navigateTo({
      url: '../more/more'
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
