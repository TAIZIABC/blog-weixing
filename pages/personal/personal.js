Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      nickName: '画面太美'
    }
  },

  getUserInfo: function (e) {
    console.log(e)
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})