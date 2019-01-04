<template>
  <div>
    <div class="navbar">
      <block v-for="(item,index) in tabs" :key="index">
        <div :id="index" :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick">
          <div class="navbar_title">{{item.name}}</div>
          <i class="iconfont" :class="item.icon"></i>
        </div>
      </block>
      <!-- <div class="navbar_slider" :class="navbarSliderClass"></div> -->
    </div>
    <swiper class="content" :duration="50" :style="'height:'+contentHeight" @change="swiperChange" :current="currentTab" @animationfinish="onAnimationfinish">
      <swiper-item class="swiper-item">
        <block v-for="(item,index) in goodsData" :key="index">
          <div class="tm-item">
            <div class="tm-left">
              <image :src="item.goodsUrl"  mode="aspectFill"/>
            </div>
            <div class="tm-right">
              <div class="tm-right-name">{{item.goodsName}}</div>
              <div class="tm-right-date">
                <div class="tm-date">{{item.goodsDate}}</div>
                <div class="tm-number">
                  <span>{{item.goodsNum}}</span>/<span>{{item.goodsTotal}}</span>
                </div>
              </div>
              <div class="tm-right-member">
                <div class="tm-price">
                  <span><s>￥</s><s>{{item.goodsNewPrice}}</s></span>
                  <span>￥{{item.goodsOldPrice}}</span>
                  <span v-if="item.isMember">99会员</span>
                </div>
                <div class="tm-rush-btn">立即抢购</div>
              </div>
            </div>
          </div>
        </block>
      </swiper-item>
      <swiper-item class="swiper-item">
        <div class="tm-date-box">
          <block v-for="(item,index) in dateData" :key="index">
            <div class="tm-date-item" :id="index" :class="{'dateActive':dateActive == index}" @click="dateClick">{{item.name}}</div>
          </block>
        </div>
        <block v-for="(item,index) in goodsData" :key="index">
          <div class="tm-item">
            <div class="tm-left">
              <image :src="item.goodsUrl"  mode="aspectFill"/>
            </div>
            <div class="tm-right">
              <div class="tm-right-name">{{item.goodsName}}</div>
              <div class="tm-right-date">
                <div class="tm-date">{{item.goodsDate}}</div>
                <div class="tm-number">
                  <span>{{item.goodsNum}}</span>/<span>{{item.goodsTotal}}</span>
                </div>
              </div>
              <div class="tm-right-member">
                <div class="tm-price">
                  <span><s>￥</s><s>{{item.goodsNewPrice}}</s></span>
                  <span>￥{{item.goodsOldPrice}}</span>
                  <span v-if="item.isMember">99会员</span>
                </div>
                <div class="tm-rush-btn">立即抢购</div>
              </div>
            </div>
          </div>
        </block>
      </swiper-item>
      <swiper-item class="swiper-item">
        <block v-for="(item,index) in goodsData" :key="index">
          <div class="tm-item">
            <div class="tm-left">
              <image :src="item.goodsUrl"  mode="aspectFill"/>
            </div>
            <div class="tm-right">
              <div class="tm-right-name">{{item.goodsName}}</div>
              <div class="tm-right-date">
                <div class="tm-date">{{item.goodsDate}}</div>
                <div class="tm-number">
                  <span>{{item.goodsNum}}</span>/<span>{{item.goodsTotal}}</span>
                </div>
              </div>
              <div class="tm-right-member">
                <div class="tm-price">
                  <span><s>￥</s><s>{{item.goodsNewPrice}}</s></span>
                  <span>￥{{item.goodsOldPrice}}</span>
                  <span v-if="item.isMember">99会员</span>
                </div>
                <div class="tm-rush-btn">立即抢购</div>
              </div>
            </div>
          </div>
        </block>
      </swiper-item>
      <swiper-item class="swiper-item">
        <block v-for="(item,index) in goodsData" :key="index">
          <div class="tm-item">
            <div class="tm-left">
              <image :src="item.goodsUrl"  mode="aspectFill"/>
            </div>
            <div class="tm-right">
              <div class="tm-right-name">{{item.goodsName}}</div>
              <div class="tm-right-date">
                <div class="tm-date">{{item.goodsDate}}</div>
                <div class="tm-number">
                  <span>{{item.goodsNum}}</span>/<span>{{item.goodsTotal}}</span>
                </div>
              </div>
              <div class="tm-right-member">
                <div class="tm-price">
                  <span><s>￥</s><s>{{item.goodsNewPrice}}</s></span>
                  <span>￥{{item.goodsOldPrice}}</span>
                  <span v-if="item.isMember">99会员</span>
                </div>
                <div class="tm-rush-btn">立即抢购</div>
              </div>
            </div>
          </div>
        </block>
        <div class="tm-type-mask" v-if="isShowMask">
          <div class="tm-type-content">
            <block v-for="(item,index) in typeData" :key="index">
              <div class="tm-type-item" :id="index" :class="{'typeActive':typeActive == index}" @click="typeClick">{{item.name}}</div>
            </block>
          </div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {categoryData} from './data'
  export default {
    data() {
      return {
        tabs: [
          {
            name: "全部活动",
            type: "1",
            checked: true
          },
          {
            name: "全部时间",
            type: "2",
            checked: true
          },
          {
            name: "最新上架",
            type: "3",
            checked: true
          },
          {
            name: "活动类型",
            type: "4",
            checked: true,
            icon: 'icon-xiala'
          }
        ],
        activeIndex: 0,
        currentTab: 0,
        winWidth: 0,
        winHeight: 0,
        goodsData:[],
        dateData:[],
        dateActive:0,
        typeData:[],
        typeActive:0,
        isShowMask:false
      };
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
        return this.winHeight + "px";
      }
    },
    methods: {
      tabClick(e) {
        this.activeIndex = e.currentTarget.id;
        console.log(e.currentTarget.id)
        this.currentTab =this.activeIndex;
        if(e.currentTarget.id==3){
          this.isShowMask=!this.isShowMask
        }
      },
      swiperChange(e) {
        this.currentTab = e.mp.detail.current;
        this.activeIndex = this.currentTab;
      },
      dateClick(e){
        this.dateActive = e.currentTarget.id;
      },
      typeClick(e){
        this.typeActive = e.currentTarget.id;
        this.isShowMask=!this.isShowMask
      },
      // onAnimationfinish() {
      //   console.log("滑动完成.....")
      // }
    },
    onLoad() {
      var res = wx.getSystemInfoSync();
      this.winWidth = res.windowWidth;
      this.winHeight = res.windowHeight;
      this.goodsData = categoryData.goodsData
      this.dateData = categoryData.dateData
      this.typeData = categoryData.typeData
    }
  };
</script>

<style lang="less" scoped>
.content {
  box-sizing: border-box;
  height: 100%;
  padding-top: 88rpx;
  box-sizing: border-box;
  /* overflow: auto; */
  -webkit-overflow-scrolling: touch;
  .swiper-item{
    width: 100%;
    padding: 0 24rpx;
    box-sizing: border-box;
    overflow-y:auto;
    .tm-item{
      width: 100%;
      height: 280rpx;
      padding: 50rpx 0;
      box-sizing: border-box;
      border-bottom: 1px solid #f1f1f1;
      display: flex;
      .tm-left{
        width: 180rpx;
        height: 180rpx;
        background: #fff;
        border-radius: 6rpx;
        image{
          width: 100%;
          height: 100%;
          border-radius: 6rpx;
        }
      }
      .tm-right{
        width: 492rpx;
        height: 100%;
        margin-left: 20rpx;
        box-sizing: border-box;
        .tm-right-name{
          font-size: 32rpx;
          color: #333333;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          line-clamp: 1;
          -webkit-box-orient: vertical;
          font-weight: 600;
        }
        .tm-right-date{
          font-size: 24rpx;
          font-weight: 600;
          color: #333333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin:30rpx 0;
          padding-left: 10rpx;
          padding-right: 30rpx;
          box-sizing: border-box;
          .tm-number{
            font-weight: 400;
            color: #666666;
          }
          .tm-number span:nth-child(1){
            color: #f65a5a;
          }
        }
        .tm-right-member{
          font-size: 20rpx;
          color: #999999;
          display: flex;
          justify-content: space-between;
          .tm-price{
            font-size: 20rpx;
            color: #999999;
            padding-bottom: 17rpx;
            box-sizing: border-box;
            display: flex;
            align-items: flex-end;
            span:nth-child(1){
              font-size: 36rpx;
              font-weight: 500;
              color: #f65a5a;
              display: flex;
              align-items: flex-end;
              s:nth-child(1){
                font-size: 24rpx;
                padding-bottom: 7rpx;
                box-sizing: border-box;
              }
            }
            span:nth-child(2){
              display: inline-block;
              padding-bottom: 7rpx;
              margin: 0 23rpx 0 11rpx;
              text-decoration-line: line-through;
            }
            span:nth-child(3){
              display: block;
              width: 90rpx;
              height: 30rpx;
              border-radius: 4rpx;
              border: solid 1rpx #76a0ee;
              font-size: 20rpx;
              font-weight: 400;
              color: #76a0ee;
              text-align: center;
              line-height: 30rpx;
              margin-bottom:8rpx;
            }
          }
          .tm-rush-btn{
            width: 160rpx;
            height: 50rpx;
            background-color: #f65a5a;
            box-shadow: 0rpx 3rpx 6rpx 0rpx 
              rgba(246, 90, 90, 0.3);
            border-radius: 25rpx;
            font-size: 28rpx;
            font-weight: 500;
            color: #ffffff;
            text-align: center;
            line-height: 50rpx;
          }
        }
      }
    }
    .tm-item:last-child{
      border-bottom: 1px solid transparent;
    }
    .tm-date-box{
      padding-top: 30rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .tm-date-item{
        width: 160rpx;
        height: 68rpx;
        background-color: #ffffff;
        box-shadow: 0rpx 0rpx 10rpx 0rpx 
          rgba(0, 0, 0, 0.1);
        border-radius: 10rpx;
        font-size: 28rpx;
        text-align: center;
        line-height: 68rpx;
        color: #333333;
      }
      .tm-date-item.dateActive{
        background-image: linear-gradient(0deg, 
      #3fd6c7 0%, 
      #86e5dc 100%);
        color:#fff;
      }
    }
    .tm-type-mask{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color:rgba(0, 0, 0, 0.5);
      .tm-type-content{
        width: 375rpx;
        background-color: #f5f5f5;
        float: right;
        .tm-type-item{
          height: 88rpx; 
          padding-left: 30rpx;
          line-height: 88rpx;
          font-size: 26rpx;
          color: #333333;
        }
        .tm-type-item.typeActive{
          color: #3fd6c7;
          background-color: #ffffff;
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
  position: fixed;
  z-index: 500;
  top: 0;
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
  width: 60rpx;
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
