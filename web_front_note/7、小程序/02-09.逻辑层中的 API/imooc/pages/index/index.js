Page({
  onShow() {
    wx.request({
      url: 'https://www.fastmock.site/mock/d22601a7b7ca7289450964c221e93d19/weixin/api/getData',
      success(res) {
        console.log(res)
      }
    })
  }
})
