// index.js

const common = require("../../utils/common")

// 获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //幻灯片素材：
    swiperImg: [{
        src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage1.jpg'
      },
      {
        src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage2.jpg'
      },
      {
        src: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage3.jpg'
      }
    ],
    // //临时新闻数据：
    // newsList: [{
    //   id: '305670',
    //   title: '我校在第八届安徽省“互联网+”大学生创新创业大赛再创佳绩',
    //   poster: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage3.jpg',
    //   add_date: '2022-08-11'
    // }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取新闻列表
    let list = common.getNewsList()
    //更新列表数据
    this.setData({
      newsList: list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },
  /**
   * 自定义函数--跳转新页面浏览新闻内容
   */
  goToDetail: function (e) {
    //获取携带的data-id数据
    let id = e.currentTarget.dataset.id;
    //携带新闻ID进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  }
})