Page({
  // 在页面运行的某个时刻会自动执行的函数
  // 是页面被加载到内存里的时候，或者说页面第一次启动的时候
  onLoad() {
    console.log('onLoad')
  },
  // 是页面被加载到内存里的时候，或者说页面第一次启动的时候
  // 并且，页面被渲染完成之后自动执行
  onReady() {
    console.log('onReady')
  },
  // 页面每次被展示的时候自动执行
  onShow() {
    console.log('onShow')
  },
  // 页面每次被取消展示的时候自动执行
  onHide() {
    console.log('onHide')
  },
  // 每次下拉刷新时执行
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  },
  // 页面到最底部时会自动执行 
  onReachBottom() {
    console.log('onReachBottom')
  },
  // 当你点击分享时自动执行的函数
  onShareAppMessage() {
    console.log('onShareAppMessage')
    return {
      title: 'share',
      path: 'pages/index/index'
    }
  },
  // 当页面滚动时自动执行的函数
  onPageScroll() {
    console.log('onPageScroll')
  }
})
