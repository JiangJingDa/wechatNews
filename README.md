## **一、实验目标**

1、综合所学知识创建完整的前端新闻小程序项目；能够在开发过程中熟练掌握真机预览、调试等操作。

## 二、实验步骤

### 1. 项目创建：

本项目一共需要3个页面，即首页、新闻页和个人中心页，其中首页和个人中心页需要以tabBar的形式展示，可以点击tab图标互相切换

#### 1.1 首页功能需求：

首页功能需求如下：（1） 首页需要包含幻灯片播放效果和新闻列白；（2）幻灯片至少要有3幅图片自动播放；（3）点击新闻列表可以打开新闻全文

#### 1.2 新闻页功能需求：

新闻页功能需求如下：（1）阅读新闻全文的页面需要显示新闻标题、图片、正文和日期；（2）允许点击按钮将当前阅读的新闻添加到本地收藏夹中；（3)已经收藏过的新闻也可以点击按钮取消收藏。

#### 1.3 个人中心页功能要求：

个人中心页功能需求如下：（1）未登录状态下显示按钮，用户点击以后可以显示头像和昵称（2）登录后读取当前用户的收藏夹，展示收藏的新闻列表（3）收藏夹中的新闻可以直接点击查看内容（4）未登录状态下收藏夹显示为空

### 2. 项目创建：

#### 2.1 完成项目页面配置

删除修改部分文件。

![image-20220820170145997](C:\Users\姜景达\AppData\Roaming\Typora\typora-user-images\image-20220820170145997.png)

### 3.视图设计：

#### 3.1 导航栏设计：

在app.json中更改代码

#### 3.2 tabbar设计

#### 3.3 页面设计：

使用：

+ 幻灯片：<swiper>组件
+ 新闻列表：<view>容器，内部使用数组循环

#### 3.4 个人中心页设计：

个人中心页主要包括两个板块，即登录面板和“我的收藏”。

使用<view>组件进行整体布局，id名称解释如下：

+ myLogin：登陆面板；
+ myIcom：微信头像图片；
+ nickName：微信昵称；
+ myFavorites：我的收藏；

#### 3.5 新闻页设计

新闻页是用于给用户浏览新闻全文的，需要用户点击首页的新闻列表，然后在新窗口中打开该页面。

计划使用<view>组件进行整体布局，class名称如下：

+ container：整体容器；
+ title：新闻标题区域；
+ poster：新闻图片区域；
+ content：新闻正文区域；
+ add_date：新闻日期区域；

### 4.逻辑实现

#### 4.1 公共逻辑：

采用模拟数据进行，假设已经获取到数据，将其放在公共JS文件中

#### 4.2 首页逻辑：

首页主要有两个功能需要实现，一是展示新闻列表，二是点击新闻标题可以跳转对应的内容页面进行浏览

#### 4.3 新闻页逻辑：

新闻页主要有两个功能需要实现：一是显示对应新闻，二是可以添加/取消新闻收藏

#### 4.4 个人中心页逻辑

个人中心页主要有3个功能需要实现，一是获取微信用户信息；二是获取收藏列表；三是浏览收藏的新闻

#### 4.5 清除临时数据：

去除一开始为了测试样式录入的临时数据，以免影响整体逻辑效果

datail.js代码：

```js
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
```

detail.wxml代码：

``` html
<!--pages/detail/detail.wxml-->
<view class="container">
  <view class="title">{{article.title}}</view>
  <view class="poster">
    <image src="{{article.poster}}" mode="widthFix"></image>
  </view>
  <view class="content">{{article.content}}</view>
  <view class="add_date">时间:{{article.add_date}}</view>
  <button wx:if="{{isAdd}}" plain bindtap="cancelFavorites">♥已收藏</button>
  <button wx:else plain="true" bindtap="addFavorites">♥点击收藏</button>
</view>
```

detail.wxss代码：

``` css
/* pages/detail/detail.wxss */
/*整体容器*/
.container {
  padding: 15rpx;
  text-align: center;
}

/*新闻标题*/
.title {
  font-size: 14pt;
  line-height: 80rpx;
}

/*新闻图片*/
.post image {
  width: 700rpx;
}

/*新闻正文*/
.content {
  text-align: left;
  font-size: 12pt;
  line-height: 60rpx;
}

/*新闻日期*/
.add_date {
  font-size: 12pt;
  text-align: right;
  line-height: 30rpx;
  margin-right: 25rpx;
  margin-top: 20rpx;
}

button {
  width: 250rpx;
  height: 80rpx;
  margin: 20rpx auto;
}
```

index.js代码：

```js
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
```

index.html代码：

``` html
<!--index.wxml-->
<!--幻灯片滚动-->
<swiper indicator-dots="true" autoplay="true" interval="5000" duration="500">
  <block wx:for="{{swiperImg}}" wx:key="swiper{{index}}">
    <swiper-item>
      <image src="{{item.src}}" class="slide-image"></image>
    </swiper-item>
  </block>
</swiper>
<!--新闻列表-->
<view id="news-list">
  <view class="list-item" wx:for="{{newsList}}" wx:for-item="news" wx:key="{{news.id}}">
    <image src="{{news.poster}}"></image>
    <text bindtap="goToDetail" data-id="{{news.id}}">{{news.title}}———————{{news.add_date}}</text>
  </view>
</view>
```

index.css代码：

``` css
/**index.wxss**/
/**swiper区域样式**/
swiper {
  height: 400rpx;
}

/*swiper中的图片*/
swiper image {
  width: 100%;
  height: 100%;
}

/*新闻列表容器*/
#news-list {
  min-height: 600rpx;
  padding: 15rpx;
}

/*列表项目*/
.list-item {
  display: flex;
  flex-direction: row;
  border-bottom: 1rpx solid gray;
}

/*新闻图片*/
.list-item image {
  width: 230rpx;
  height: 150rpx;
  margin: 10rpx;
}

/*新闻标题*/
.list-item text {
  width: 100%;
  line-height: 60rpx;
  font-size: 10pt;
}
```

my.js代码：

```js
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
```

my.html代码：

``` html
<!--pages/my/my.wxml-->
<!--登陆面板-->
<view id="myLogin">
  <block wx:if="{{isLogin}}">
    <image id="myIcon" src="{{src}}"></image>
    <text id="nickName">{{nickName}}</text>
  </block>
  <button wx:else open-type="getUserInfo" bindtap="getMyInfo">未登录，点此登录</button>
</view>
<!--我的收藏-->
<view id="myFavorites">
  <text>我的收藏({{num}})</text>
  <!--收藏的新闻列表-->
  <view id="news-list">
    <view class="list-item" wx:for="{{newsList}}" wx:for-item="news" wx:key="{{news.id}}">
      <image src="{{news.poster}}"></image>
      <text bindtap="goToDetail" data-id="{{news.id}}">🔶{{news.title}}--{{news.add_date}}</text>
    </view>
  </view>
</view>
```

my.css代码：

``` css
/* pages/my/my.wxss */
/*登录面板*/
#myLogin {
  background-color: #328EEB;
  height: 400rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

/*头像图片*/
#myIcon {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
}

/*微信昵称*/
#nickName {
  color: white;
}

/*我的收藏*/
#myFavourites {
  padding: 20rpx;
}
```

common.js代码：

```js
//模拟新闻数据
const news = [
  {id: '264698',
  title: '省退役军人事务厅来校交流对接工作',
  poster: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage1.jpg',
  content: ' 8月19日，省退役军人事务厅二级巡视员蔡元和、办公室主任刘恒贵、就业创业处副处长钟俊武一行来校就联合共建安徽退役军人学院事宜进行交流对接。校党委常委、副校长陆林，芜湖市退役军人事务局党组成员、副局长张桂芬，学校办公室、人事处、教务处、招就处、学生处、研究生院、体育学院负责同志参加会议。',
  add_date: '2022-08-19'},
  {id: '304083',
  title: '《光明日报》刊发我校研究员王顺理论文章《不断提高理论素养》',
  poster: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage2.jpg',
  content: ' 8月9日，《光明日报》第06版“学习贯彻习近平新时代中国特色社会主义思想专刊”版面长篇幅刊发了我校中国特色社会主义理论体系研究中心特约研究员、马克思主义学院博士生王顺题为《不断提高理论素养》的理论文章。文章从“理论素养坚实，才能理想信念坚定”“克服前进道路上的各种困难，需要具备扎实的理论素养”“提升理论素养，必须学懂弄通做实党的创新理论”3个方面全面阐述了不断提高理论素养、坚持用党的创新理论武装头脑的重要性。文章指出，新征程上，面对具有新的历史特点的伟大斗争，迫切需要我们学懂弄通做实党的创新理论，以扎实的理论素养提升战略定力、斗争能力，从而不断取得新的伟大胜利。',
  add_date: '2022-08-09'},
  {id: '305670',
  title: '我校在第八届安徽省“互联网+”大学生创新创业大赛再创佳绩',
  poster: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage3.jpg',
  content: '7月4日—8月10日，由安徽省教育厅、合肥市人民政府、淮北市人民政府联合主办的第八届安徽省“互联网+”大学生创新创业大赛暨中国国际“互联网+”大学生创新创业大赛选拔赛在线上举办。我校参赛项目团队历经省级复赛网评、决赛路演答辩、金奖排位赛等多轮次比拼，斩获金奖3项、银奖10项、铜奖23项，其中3个项目由省赛组委会推荐入围国赛。',
  add_date: '2022-08-11'}
];

//获取新闻列表
function getNewsList() {
  let list = [];
  for (var i = 0; i < news.length; i++) {
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list; //返回新闻列表
}

//获取新闻内容
function getNewsDetail(newsID) {
  let msg = {
    code: '404', //没有对应的新闻
    news: {}
  };
  for (var i = 0; i < news.length; i++) {
    if (newsID == news[i].id) { //匹配新闻id编号
      msg.code = '200'; //成功
      msg.news = news[i]; //更新当前新闻内容
      break;
    }
  }
  return msg; //返回查找结果
}

// 对外暴露接口
module.exports = {
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail
}
```



## 三、程序运行结果

![image-20220820214635906](C:\Users\姜景达\AppData\Roaming\Typora\typora-user-images\image-20220820214635906.png)

![image-20220820214639863](C:\Users\姜景达\AppData\Roaming\Typora\typora-user-images\image-20220820214639863.png)

![image-20220820214644461](C:\Users\姜景达\AppData\Roaming\Typora\typora-user-images\image-20220820214644461.png)

## 四、问题总结与体会

描述实验过程中所遇到的问题，以及是如何解决的。有哪些收获和体会，对于课程的安排有哪些建议。

本次实验了解到了按钮等组件if-else的用法，可以在需要的时候出现组件，学会了页面间的跳转。加深了<view>、<swiper>等组件的使用