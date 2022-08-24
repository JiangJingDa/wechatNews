const common = require("../../utils/common");

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // article: {
    //   id: '305670',
    //   title: '我校在第八届安徽省“互联网+”大学生创新创业大赛再创佳绩',
    //   poster: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage3.jpg',
    //   content: '7月4日—8月10日，由安徽省教育厅、合肥市人民政府、淮北市人民政府联合主办的第八届安徽省“互联网+”大学生创新创业大赛暨中国国际“互联网+”大学生创新创业大赛选拔赛在线上举办。我校参赛项目团队历经省级复赛网评、决赛路演答辩、金奖排位赛等多轮次比拼，斩获金奖3项、银奖10项、铜奖23项，其中3个项目由省赛组委会推荐入围国赛。',
    //   add_date: '2022-08-11'
    // },
    //num:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取页面跳转来时携带的数据
    let id = options.id
    //检查当前新闻是否在收藏夹中
    var article = wx.getStorageSync(id)
    //已存在
    if (article != "") {
      this.setData({
        article: article,
        isAdd: true
      })
    }
    //不存在
    else {
      let result = common.getNewsDetail(id)
      //获取到新闻内容
      if (result.code == "200") {
        this.setData({
          article: result.news,
          isAdd:false
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  addFavorites: function (options) {
    let article = this.data.article; //获取当前新闻
    wx.setStorageSync(article.id, article); //添加到本地缓存
    this.setData({
      isAdd: true
    }); //更新按钮显示
  },
  //取消收藏：
  cancelFavorites: function () {
    let article = this.data.article; //获取当前新闻
    wx.removeStorageSync(article.id) //从本地缓存删除
    this.setData({
      isAdd: false
    }); //更新按钮显示
  }
})