<template>
  <div class="container">
    <!-- 活动详情 -->
    <div class="tm-header-box">
      <div class="tm-active-detail-header tm-active-header-mask">
        <image src="/static/images/goods2.png" mode="aspectFill"/>
      </div>
      <div class="tm-mask-box"></div>
      <div class="tm-active-header-left">
        <image src="/static/images/goods2.png" mode="aspectFill"/>
      </div>
      <div class="tm-active-header-right">
        <div class="tm-active-right-top">
          <span>《谈判专家》</span>-<span>北京站</span>
        </div>
        <div class="tm-active-right-bottom">
          <div class="tm-right-bottom-left">
            <span>￥</span><span>66</span>
          </div>
          <div class="tm-right-bottom-right">
            <span>6</span>/<span>12</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="tm-content">
      <div class="tm-start-date">
        <div class="tm-start-date-left">
          <i class="iconfont icon-shijian" :style="{'font-size':60+'rpx',color:'#c6c6c6'}"></i>
          <span>2018.12.18至2018.12.30</span>
        </div>
      </div>
      <div class="tm-start-date">
        <div class="tm-start-date-left">
          <i class="iconfont icon-dingwei" :style="{'font-size':60+'rpx',color:'#c6c6c6'}"></i>
          <span>北京市世纪剧院</span>
        </div>
        <i class="iconfont icon-xiangyou" :style="{'font-size':40+'rpx',color:'#c6c6c6'}"></i>
      </div>
    </div>

    <div class="navbar">
      <block v-for="(item,index) in tabs" :key="index">
        <div :id="index" :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick">
          <div class="navbar_title">{{item.name}}</div>
          <i class="iconfont" :class="item.icon"></i>
        </div>
      </block>
    </div>
    <swiper class="content" :duration="50" :style="'height:'+contentHeight" @change="swiperChange" :current="currentTab" @animationfinish="onAnimationfinish">
      <swiper-item class="swiper-item">
        <div class="tm-introduction">
          <div class="introduction-img">
            <image src="/static/images/content-bj.png"  mode="aspectFill"/>
          </div>
          <div class="introduction-content">
            “一见你就笑，一笑就厄运，是天生克星？还是那灯火阑珊处，暮然回首之人？”《谈判专家》真是一个疯狂的宿命故事。若把话剧比作江湖，开心麻花埋头做戏15年，武功风流自成一派。而《谈判专家》，定是麻花的一部独门秘籍......
          </div>
        </div>
      </swiper-item>
      <swiper-item class="swiper-item">
        <div class="experience-rule-box">
          <block v-for="(item,index) in rule" :key="index">
            <div class="rule-item">
              <span></span>
              <div class="rule-word">{{item.rule}}</div>
            </div>
          </block>
        </div>
      </swiper-item>
      <swiper-item class="swiper-item" :style="{padding:'0'}">
        <div class="evaluate-box">
          <div class="evaluate-header">
            <div class="evaluate-header-left">
              <span>收到的评价(818条)</span>
            </div>
            <div class="evaluate-header-right">
              <span>参加人数:1324位</span>
            </div>
          </div>

          <div class="label-box">
            <block v-for="(item,index) in label" :key="index">
              <div class="label-item">{{item.label}}</div>
            </block>
          </div>

          <div class="score-box">
            <div class="score-left">
              <span>4.9</span>
              <span>综合评分</span>
            </div>
            <div class="score-right">
              <i class="iconfont icon-pingjia" :style="{'font-size':70+'rpx',color:'#f65a5a'}"></i>
              <i class="iconfont icon-pingjia" :style="{'font-size':70+'rpx',color:'#f65a5a'}"></i>
              <i class="iconfont icon-pingjia" :style="{'font-size':70+'rpx',color:'#f65a5a'}"></i>
              <i class="iconfont icon-pingjia" :style="{'font-size':70+'rpx',color:'#f65a5a'}"></i>
              <i class="iconfont icon-pingjia" :style="{'font-size':70+'rpx',color:'#f65a5a'}"></i>
            </div>
          </div>

          <div class="evaluate-list">
            <block v-for="(item,index) in evaluate" :key="index">
              <div class="evaluate-item">
                <div class="evaluate-item-top">
                  <div class="evaluate-item-left">
                    <div class="left-user-img">
                      <image :src="item.userImg" mode="aspectFill" />
                    </div>
                    <span class="user-name">{{item.userName}}</span>
                    <span>{{item.date}}</span>
                  </div>
                  <div class="evaluate-item-right">
                    <block v-if="item.score<5">
                      <block v-for="(i,score) in item.score" :key="score">
                        <i class="iconfont icon-pingjia" :style="{'font-size':40+'rpx',color:'#f65a5a'}"></i>
                      </block>
                      <block v-for="(i,score) in (5-item.score)" :key="score">
                        <i class="iconfont icon-pingjia" :style="{'font-size':40+'rpx',color:'#d1d1d1'}"></i>
                      </block>
                    </block>
                    <block v-else>
                      <block v-for="(i,score) in item.score" :key="score">
                        <i class="iconfont icon-pingjia" :style="{'font-size':40+'rpx',color:'#f65a5a'}"></i>
                      </block>
                    </block>
                  </div>
                </div>
                <div class="evaluate-item-content">{{item.content}}</div>
                <div class="evaluate-item-img">
                  <block v-for="(items,indexs) in item.img" :key="indexs">
                    <image :src="items" mode="aspectFill"  />
                  </block>
                </div>
              </div>
            </block>
          </div>
        </div>
      </swiper-item>
    </swiper>

    <div class="tm-footer">
      <div class="footer-left">
        <i class="iconfont icon-shouchang" v-if="isCollection" @click="goCollection" :style="{'font-size':55+'rpx',color:'#333333'}"></i>
        <i class="iconfont icon-shoucang-xuanzhong" v-else @click="cancelCollection" :style="{'font-size':55+'rpx',color:'#f65a5a'}"></i>
        <span>收藏</span>
      </div>
      <div class="footer-right">
        <!-- <div class="footer-right-left">推广</div> -->
        <button class="footer-right-left" open-type="share">推广</button>
        <!-- <div class="footer-right-right" @click="goPay">立即购买</div> -->
        <button  class="footer-right-right" plain='true' open-type='getUserInfo' @click="goPay" @getuserinfo='onGotUserInfo'>立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tabs: [
        {name: "体验介绍",type: "1",checked: true},
        {name: "体验规则",type: "2",checked: true},
        {name: "评价",type: "3",checked: true}
      ],
      activeIndex: 2,
      currentTab: 2,
      winWidth: 0,
      winHeight: 0,
      isCollection:true,//是否收藏
      rule:[
        {rule:'使用有效期：2018.12.17-2018.12.31（每周一，二除外）'},
        {rule:'营业时间：上午9：00--21:00（19:00停止入场）'},
        {rule:'如需增加一个成人或儿童需再购买一份'},
        {rule:'身高低于1米以下免票，每张门票最多携带一位。适合0-10岁小朋友'},
        {rule:'购买后无需预约，直接到店凭团购券使用。'},
        {rule:'本演出（活动）限定10人参加，先到先得。'},
        {rule:'演出活动时长：1小时（具体时长以实际演出为准）'},
        {rule:' 关于退换票：因演出活动具有唯一性、时效性等特殊属性，如非活动更变、取消等其他因素，不提供退换票服务，购买时请谨慎下单。'},
        {rule:'发票说明：如需开具发票，请具体咨询商户'},
        {rule:'售后支持：如有疑问，请联系听米客服，微信：yet_far'}
      ],
      label:[
        {label:'印象深刻'},
        {label:'场景很赞'},
        {label:'全场爆笑'},
        {label:'新颖'}
      ],
      evaluate:[
        {id:1,userImg:'/static/images/goods2.png',userName:'小圆子',date:'2018-12-16',score:5,content:'延续开心麻花一贯的风格，运用了许多当下流行的梗，两小时“哈哈哈”。套着百老汇的外衣，演着北京城的故事。',img:['/static/images/goods2.png']},
        {id:1,userImg:'/static/images/goods2.png',userName:'小圆子',date:'2018-12-16',score:4,content:'延续开心麻花一贯的风格，运用了许多当下流行的梗，两小时“哈哈哈”。套着百老汇的外衣，演着北京城的故事。',img:['/static/images/goods2.png','/static/images/goods2.png']},
        {id:1,userImg:'/static/images/goods2.png',userName:'小圆子',date:'2018-12-16',score:3,content:'延续开心麻花一贯的风格，运用了许多当下流行的梗，两小时“哈哈哈”。套着百老汇的外衣，演着北京城的故事。',img:['/static/images/goods2.png','/static/images/goods2.png','/static/images/goods2.png']},
      ]
    }
  },

  components: {

  },
  computed: {
    navbarSliderClass() {
      if (this.activeIndex == 0) {
        return "navbar_slider_0";
      }
      if (this.activeIndex == 1) {
        return "navbar_slider_1";
      }
      if (this.activeIndex == 2) {
        return "navbar_slider_2";
      }
      if (this.activeIndex == 3) {
        return "navbar_slider_3";
      }
    },
    contentHeight() {
      return this.winHeight + "rpx";
    }
  },
  methods: {
    tabClick(e) {
      this.activeIndex = e.currentTarget.id;
      console.log(e.currentTarget.id)
      this.currentTab =this.activeIndex;
    },
    swiperChange(e) {
      this.currentTab = e.mp.detail.current;
      this.activeIndex = this.currentTab;
    },
    goCollection(){
      this.isCollection=false
      console.log(1)
    },
    cancelCollection(){
      this.isCollection=true
      console.log(2)
    },
    goPay(){
      console.log(this.GLOBAL.userInfo)
      if(Object.keys(this.GLOBAL.userInfo).length==0){
        console.log('没有用户信息')
        // wx.navigateTo({url:'/pages/auth/main'})
      }else{ 
        console.log('有用户信息')
        wx.navigateTo({url:'/pages/memberPayment/main'})
      }
    },


    //授权函数
    onGotUserInfo(e) {
      // 数据是e.mp
      var _this=this
      console.log(e)
      if(e.mp.detail.errMsg=='getUserInfo:ok'){
        this.GLOBAL.userInfo=e.mp.detail.rawData
      }else{
        wx.showModal({
          title: '温馨提醒',
          content: '为了给您更好的体验，请进行授权',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.navigateTo({url:'/pages/auth/main'})
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    }
  },
  onLoad() {
    var res = wx.getSystemInfoSync();
    this.winWidth = res.windowWidth;
    this.winHeight = res.windowHeight;
  },

   onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding: 0;
    .tm-header-box{
      width: 100%;
      height: 400rpx;
      position: relative;
      
      .tm-mask-box{
        width: 100%;
        height: 100%;
        position: absolute;;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
      }
      .tm-active-detail-header{
        width: 100%;
        height: 400rpx;
        image{
          width: 100%;
          height: 100%;
        }
      }
      .tm-active-header-mask{
        width: 100%;
        height: 400rpx;
        float: left;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        -webkit-filter: blur(20rpx);
        -moz-filter: blur(20rpx);
        -o-filter: blur(20rpx);
        -ms-filter: blur(20rpx);
        filter: blur(20rpx);
        // transform: scale(1.2);
      }
      .tm-active-header-left{
        position: absolute;
        left: 24rpx;
        bottom: -20rpx;
        width: 214rpx;
        height: 214rpx;
        // background-color: #ffffff;
        box-shadow: 2rpx 6rpx 10rpx 0rpx 
          rgba(0, 0, 0, 0.1);
        border-radius: 10rpx;
        image{
          width: 100%;
          height: 100%;
        }
      }
      .tm-active-header-right{
        width: 400rpx;
        height: 115rpx;
        position: absolute;
        left: 268rpx;
        bottom: 48rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .tm-active-right-top{
          font-size: 36rpx;
          color: #f8f8f8;
        }
        .tm-active-right-bottom{
          display: flex;
          justify-content: space-between;
          align-items: center;
          .tm-right-bottom-left{
            span{
              font-size: 42rpx;
              color: #ffffff;
            }
            span:nth-child(1){
              font-size: 28rpx;
              color: #ffffff;
            }
          }
          .tm-right-bottom-right{
            font-size: 26rpx;
            color: #ffffff;
            span{
              color: #ffffff;
            }
            span:nth-child(1){
              color: #f65a5a;
            }
          }
        }
      }
    }
    .tm-content{
      width: 100%;
      padding: 30rpx 24rpx;
      box-sizing: border-box;
      .tm-start-date{
        width: 100%;
        height: 97rpx;
        border-bottom: 2rpx solid #f1f1f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tm-start-date-left{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          span{
            font-size: 28rpx;
            color: #333333;
            margin-left: 24rpx;
          }
        }
      }
    }
    .tm-footer{
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 666;
      width: 100%;
      height: 98rpx;
      background-color: #ffffff;
      box-shadow: 0px 0px 11rpx 1rpx 
        rgba(0, 0, 0, 0.1);
      padding: 0 24rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .footer-left{
        width: 234rpx;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          font-size: 28rpx;
          color: #333333;
          margin-left: 13rpx;
        }
      }
      .footer-right{
        width: 468rpx;
        height: 72rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 28rpx;
        color: #f8f8f8;
        .footer-right-left{
          width: 50%;
          height: 72rpx;
          border-radius: 36rpx 0rpx 0rpx 36rpx;
          background-color: #f88f94;
          text-align: center;
          line-height: 72rpx;
          color: #ffffff;
        }
        .footer-right-right{
          width: 50%;
          height: 72rpx;
          border-radius: 0rpx 36rpx 36rpx 0rpx;
          background-color: #f65a5a;
          text-align: center;
          line-height: 72rpx;
          border: none;
          color: #f8f8f8;
        }
      }
    }
  }


.content {
  box-sizing: border-box;
  height: 100%;
  padding-top: 30rpx;
  padding-bottom: 100rpx;
  box-sizing: border-box;
  /* overflow: auto; */
  -webkit-overflow-scrolling: touch;
  .swiper-item{
    width: 100%;
    height: 100%;
    padding: 0 24rpx;
    box-sizing: border-box;
    overflow-y:auto;
    .tm-introduction{
      .introduction-img{
        width: 100%;
        height: 320rpx;
        background-color: #e34c53;
        border-radius: 10rpx;
        image{
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
      .introduction-content{
        height: 190rpx;
        font-size: 26rpx;
        line-height: 46rpx;
        color: #666666;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        line-clamp: 4;
        -webkit-box-orient: vertical;
        margin: 28rpx 0 85rpx;
      }
    }

    .experience-rule-box{
      .rule-item{
        width: 100%;
        display: flex;
        margin-bottom: 20rpx;
        span{
          display: block;
          width: 14rpx;
          height: 14rpx;
          border-radius: 7rpx;
          background-color: #86e5dc;
          margin: 17rpx 17rpx 0 0;
        }
        .rule-word{
          width: 674rpx;
          font-size: 25rpx;
          line-height: 46rpx;
          color: #666666;
        }
      }
    }
    .evaluate-box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .evaluate-header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 26rpx;
        color: #666666;
        padding: 0 24rpx;
        box-sizing: border-box;
      }
      .label-box{
        width: 100%;
        height: 48rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30rpx 0;
        padding: 0 24rpx;
        box-sizing: border-box;
        .label-item{
          width: 160rpx;
          height: 48rpx;
          background-color: #f2f2f2;
          border-radius: 6rpx;
          font-size: 24rpx;
          color: #333333;
          text-align: center;
          line-height: 48rpx;
        }
      }
      .score-box{
        width: 702rpx;
        height: 160rpx;
        background-color: #ffffff;
        box-shadow: 0rpx 0rpx 14rpx 0rpx 
          rgba(0, 0, 0, 0.1);
        border-radius: 6rpx;
        padding: 20rpx 80rpx;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .score-left{
          width: 120rpx;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          span{
            font-size: 24rpx;
            color: #999999;
          }
          span:nth-child(1){
            font-size: 68rpx;
            color: #f65a5a;
          }
        }
        .score-right{
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .evaluate-list{
        width: 100%;
        padding: 0;
        box-sizing: border-box;
        background: #f8f8f8;
        margin-top: 30rpx;
        .evaluate-item{
          width: 100%;
          padding: 0 24rpx 30rpx;
          box-sizing: border-box;
          background: #fff;
          margin-bottom: 30rpx;
          .evaluate-item-top{
            height: 48rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .evaluate-item-left{
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .left-user-img{
                width: 48rpx;
                height: 48rpx;
                border-radius: 24rpx;
                image{
                  width: 100%;
                  height: 100%;
                  border-radius: 24rpx;
                }
              }
              span{
                font-size: 24rpx;
                color: #999999;
              }
              .user-name{
                font-size: 28rpx;
                color: #333333;
                margin: 0 10rpx;
              }
            }
            .evaluate-item-right{
              width: 200rpx;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
          .evaluate-item-content{
            width: 100%;
            font-size: 26rpx;
            line-height: 40rpx;
            color: #666666;
            margin: 30rpx 0 20rpx 0;
          }
          .evaluate-item-img{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            image{
              width: 220rpx;
              height: 220rpx;
              margin-right: 15rpx;
            }
            image:nth-child(3n){
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}

// .swiper-item {
//   height: 100%;
//   text-align: center;
// }

.navbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  // position: fixed;
  // z-index: 500;
  // top: 0;
  height: 88rpx;
  width: 100%;
  background: #fff;
  box-shadow: 1rpx 3rpx 6rpx 0rpx 
		rgba(0, 0, 0, 0.06);
}

.navbar_item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 25rpx 0;
  text-align: center;
  font-size: 0;
  color: #333333;
}

.navbar_item.navbar_item_on .navbar_title {
  color: #000000;
  font-weight: 600;
}

.navbar_title {
  font-weight: 500;
  display: inline-block;
  font-size: 28rpx;
  max-width: 8em;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  position: relative;
}

.navbar_item.navbar_item_on::after {
  position: absolute;
  content: " ";
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 40rpx;
  height: 4rpx;
  background-color: #86e5dc;
	box-shadow: 0rpx 1rpx 4rpx 0rpx 
		rgba(134, 229, 220, 0.5);
	border-radius: 2rpx;
  -webkit-transition: -webkit-transform 0.1s;
  transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
}

.navbar_slider_0 {
  left: 0rpx;
  transform: translateX(0);
}

.navbar_slider_1 {
  left: 0rpx;
  transform: translateX(250rpx);
}

.navbar_slider_2 {
  left: 0rpx;
  transform: translateX(500rpx);
}
.navbar_slider_3 {
  left: 0rpx;
  transform: translateX(750rpx);
}
.controls {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  z-index: 8888;
  top: 80;
  height: 50px;
  width: 100%;
  background-color: #298de5;
}
</style>
