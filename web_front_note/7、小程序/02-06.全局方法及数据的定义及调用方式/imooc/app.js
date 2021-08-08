// 创建一个小程序
App({
  // 生命周期函数指的是在某一时刻会自动执行的函数
  // 在小程序启动的时候，自动执行的函数
  onLaunch(options) {
    console.log('onLaunch', options)
  },
  // 在小程序重新展示的时候，自动执行的函数
  onShow(options) {
    console.log('onShow', options)
  },
  // 在小程序取消展示的时候，自动执行的函数
  onHide() {
    console.log('onHide')
  },
  // 当脚本执行错误时，自动执行的函数
  onError(msg) {
    console.log('onError', msg)
  },
  sayHello() {
    return 'say hello'
  },
  globalData: {},
})