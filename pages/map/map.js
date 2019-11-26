// pages/map/map.js
Page({

  /**
   * Page initial data
   */
  data: {
    latitude: "31.232711",
    longitude: "121.47575499999994",
    scale: '10',
    markers: [{
      iconPath: "/images/marker.png",
      id: 0,
      latitude: 31.232711,
      longitude: 121.47575499999994,
      width: 50,
      height: 50,
      callout: {
        content: "Xintiandi \n No. 230 Madang Road\n Luwan District\n Shanghai",
        fontSize: 15,
        color: "#000000",
        padding: 10
      }
    }]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://easy-mock.com/mock/5a641f8a0ea0400cac5a91df/tesla/stores',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log('success!');
        console.log(res.data)
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})