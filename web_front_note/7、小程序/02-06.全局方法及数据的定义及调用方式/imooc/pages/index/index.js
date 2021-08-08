const app = getApp()

Page({
  onLoad() {
    console.log(app.sayHello(), app.globalData, 'index onLoad');
  }
})
