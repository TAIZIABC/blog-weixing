Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    article: [{
      id: 1,
      title: '标题',
      content: '1111内容内容内容内容内容内容内容内容内容内容内容内容。',
      imgSrc: "https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg?t=2018518"
    }, {
      id: 2,
      title: '标题',
      content: '2222内容内容内容内容内容内容内容内容内容内容内容内容。',
      imgSrc: "https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg?t=2018518"
      }, {
        id: 3,
        title: '标题',
        content: '3333内容内容内容内容内容内容内容内容内容内容内容内容。',
        imgSrc: "https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg?t=2018518"
    }, {
      id: 4,
      title: '标题',
      content: '4444内容内容内容内容内容内容内容内容内容内容内容内容。',
      imgSrc: "https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg?t=2018518"
    }],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '主页',
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.request({
      url: 'http://www.tp.com/blog',
      success:function(res){
        console.log(res.data);
        that.setData({
          article: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})