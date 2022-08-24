// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // //临时微信用户昵称和头像
    // nickName: "未登录",
    // src: "/images/index.png",
    // //临时收藏夹新闻数据
    // newsList: [{
    //   id: '264698',
    //   title: '省退役军人事务厅来校交流对接工作',
    //   poster: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage1.jpg',
    //   add_date: '2022-08-19'
    // }],
    num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  getMyInfo: function (e) {
    wx.getUserProfile({
      desc: "展示用户信息",
      success: (res) => {
        console.log(res)
        this.setData({
          isLogin: true, //更新登陆状态
          src: res.userInfo.avatarUrl, //更新图片来源
          nickName: res.userInfo.nickName //更新昵称
        })
        //获取收藏列表
        this.getMyFavorites();
      }
    });
    this
  },
  //获取收藏列表
   getMyFavorites: function () {
     let info = wx.getStorageInfoSync(); //读取本地缓存信息
     let keys = info.keys; //获取全部key信息
     let num = keys.length;
     let myList = [];
     for (var i = 0; i < num; i++) {
       let obj = wx.getStorageSync(keys[i]);
       myList.push(obj); //将新闻添加到数组中
       console.log(myList);
     }
//更新收藏列表
     this.setData({
       newsList:myList,
       num:num
     });
   },
  onShow:function(){
    //如果已经登陆
    if(this.data.isLogin){
      //更新收藏列表
      this.getMyFavorites()
    }
  },
  goToDetail: function (e) {
    //获取携带的data-id数据
    let id = e.currentTarget.dataset.id;
    //携带新闻ID进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  }
})