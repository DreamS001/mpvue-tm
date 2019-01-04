<template>
  <div class="container">

    <!-- 顶部 -->
    <div class="tm-header">
      <div class="tm-location" @click="getCity">
        <i class="iconfont icon-dingwei1" :style="{color: '#333333', 'font-size': 40 + 'rpx'}"></i>
        <span>{{cityData}}</span> 
        <i class="iconfont icon-xiala" :style="{color: '#222222', 'font-size': 30 + 'rpx'}"></i>
      </div>
      <div class="tm-tabs">
        <block v-for="(item,index) in area" :key="index">
          <span @click="goArea" :data-id="item.id">{{item.areaName}}</span>
        </block>
      </div>
      <div class="tm-search" @click="goSearch">
        <i class="iconfont icon-sousuo" :style="{color: '#bebebe', 'font-size': 40 + 'rpx'}"></i>
        <span>周柏豪演唱会</span>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="tm-swiper">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" circular :interval="interval" :duration="duration" indicator-color="#999" indicator-active-color="#f65a5a" class="tm-swipe-box">
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" mode="aspectFill"/>
          </swiper-item>
        </block>
      </swiper>
    </div>

    <!-- 快捷入口 -->
    <div class="tm-quick">
      <div class="tm-quick-item" @click="goMember">
        <span>99会员</span>
        <div class="tm-btn" :style="{color: '#3fd6c7'}">立即购买></div>
        <div class="tm-quick-bottom" :style="{'background': 'linear-gradient(-29deg,#ffffff 0%,#e8f9f7 100%)'}">
          <i class="iconfont icon-huiyuan" :style="{background: 'linear-gradient(0deg,#3fd6c7 0%,#86e5dc 100%)', '-webkit-background-clip': 'text','-webkit-text-fill-color': 'transparent','font-size': 40 + 'rpx'}"></i>
        </div>
      </div>
      <div class="tm-quick-item" @click="goGifts">
        <span>新人大礼包</span>
        <div class="tm-btn" :style="{color: '#f65a5a'}">立即领取></div>
        <div class="tm-quick-bottom" :style="{'background': 'linear-gradient(-29deg,#ffffff 0%,#fbe8e8 100%)'}">
          <i class="iconfont icon-xinrenlibao" :style="{background: 'linear-gradient(0deg,#f14b4b 0%,#f65a5a 100%)', '-webkit-background-clip': 'text','-webkit-text-fill-color': 'transparent','font-size': 40 + 'rpx'}"></i>
        </div>
      </div>
      <div class="tm-quick-item" @click="goInvitation">
        <span>邀请好友领券</span>
        <div class="tm-btn" :style="{color: '#76a0ee'}">立即邀请></div>
        <div class="tm-quick-bottom" :style="{'background': 'linear-gradient(-29deg,#ffffff 0%,#d1def7 100%)'}">
          <i class="iconfont icon-yaoqinglingquan" :style="{background: 'linear-gradient(0deg, #6592e6 0%, #76a0ee 100%)','-webkit-background-clip': 'text','-webkit-text-fill-color': 'transparent','font-size': 40 + 'rpx'}"></i>
        </div>
      </div>
    </div>

    <!-- 热卖ing -->
    <div class="tm-hot">
      <div class="tm-hot-header">
        <div class="tm-hot-header-left">热卖进行中</div>
        <div class="tm-hot-header-right">
          <span @click="getCategory">更多</span>
          <i class="iconfont icon-xiangyou" :style="{color: '#434343', 'font-size': 30 + 'rpx'}"></i>
        </div>
      </div>
      <div class="tm-hot-goods">
        <!-- <div class="tm-hot-goods-item">
          
        </div> -->
        <block v-for="(item,index) in goodsData" :key="index">
            <div class="tm-item" @click="goDetails">
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
                  <div class="tm-rush-btn" @click="goPay">立即抢购</div>
                </div>
              </div>
            </div>
          </block>
      </div>
    </div>


  </div>
</template>

<script>
// 引入SDK核心类
var QQMapWX = require('../../../static/map/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js');

// 实例化API核心类
var demo = new QQMapWX({
  key: 'ILDBZ-GZN33-ERX3X-3OC5H-T6HJQ-LGB5J' // 必填
});

import {homeData} from './data'

export default {
  data () {
    return {
      cityData: '杭州市',
      area:[],
      time:'',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      imgUrls: [],
      goodsData:[],
      // city:'未选择',
      selAddress:''
    }
  },

  components: {
    
  },

  methods: {
    goArea(e){
      // console.log(e)
      wx.navigateTo({url: '/pages/area/main?id='+e.target.dataset.id})
    },
    getCity(){
      wx.navigateTo({url:'/pages/city/main'})
    },
    goSearch(){
      wx.navigateTo({url:'/pages/search/main'})
    },
    goMember(){
      wx.navigateTo({url:'/pages/member/main'})
    },
    goGifts(){
      wx.navigateTo({url:'/pages/gifts/main'})
    },
    goInvitation(){
      wx.navigateTo({url:'/pages/invitation/main'})
    },
    getCategory(){
      wx.navigateTo({url:'/pages/moreGoods/main'})
    },
    goDetails(){
      wx.navigateTo({url:'/pages/activeDetails/main'})
    },

    getBanner(){
      this.$http.post("category/all",{}).then((res)=>{
        console.log(res)
        //输出请求数据
        console.log(res.data.data)
      }).catch(err=>{
        console.log(err.status,err.message)
      })
    },

    goPay(){
      wx.navigateTo({url:'/pages/memberPayment/main'})
    },

    getLocation(){
      let _this = this;
      // 1 先通过微信小程序的api获取当前的经纬度
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          // console.log(res);
          const latitude = res.latitude;
          const longitude = res.longitude;
          // 2 把经纬度转成广州 北京。。 要通过腾讯地图来实现
          // 调用接口
          demo.reverseGeocoder({
            location: {
              latitude: latitude,
              longitude: longitude
            },
            success: function (ret) {
              // console.log(ret);
              if (ret.status == 0) {
                let city = ret.result.address_component.city;
                console.log(city)
                _this.cityData=city;
              }
            },
            fail: function (ret) {
              console.log(ret);
            }
          })
        }
      })
    }
  },
  
  // changeData(name){
  //   this.setData({
  //     city: name
  //   })
  // },

  onLoad(){
    // this.getBanner();
    console.log(this.$root.$mp.query)
    this.getLocation();
    this.imgUrls = homeData.imgUrls
    this.area = homeData.areaData
    this.goodsData = homeData.goodsData
  },
  onShow(){
    let that=this;
    let pages = getCurrentPages();
    let currPage = pages[pages.length-1];
    // console.log(pages)
    // console.log(currPage.data.cityData)
    if (currPage.data.cityData==undefined){
      that.cityData='杭州市'
    }else{
      // console.log(currPage.data.cityData)
      // that.setData({//将携带的参数赋值
      //   city: currPage.data.city
      // });
      that.cityData=currPage.data.cityData
    }
    // this.changeData
  },
    
  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .container{
    .tm-header{
      width:100%;
      height: 102rpx;
      display: flex;
      align-items: center;
      div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .tm-location{
        width: 22%;
        justify-content: flex-start;
        span {
          font-size: 24rpx;
          color: #222222;
          margin: 0 6rpx;
        }
      }
      .tm-tabs{
        width: 45%;
        padding: 0 50rpx;
        box-sizing: border-box;
        justify-content: space-between;
        span {
          font-size: 28rpx;
          font-weight: 600;
          color: #222222;
        }
      }
      .tm-search{
        width: 33%;
        height: 54rpx;
        border-radius: 27rpx;
        background: #f5f5f5;
        span{
          font-size: 24rpx;
          color: #bdbdbd;
        }
      }
    }
    .tm-swiper{
      width: 100%;
      height: 300rpx;
      // margin: 20rpx 0;
	    border-radius: 20rpx;
      .tm-swipe-box{
        width: 100%;
        height: 100%;
        image{
          height: 100%;
          width: 100%;
          border-radius: 20rpx;
        }
      }
    }
    .tm-quick{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 28rpx 0;
      box-sizing: border-box;
      .tm-quick-item{
        position: relative;
        width: 220rpx;
        height: 122rpx;
        background-color: #ffffff;
        box-shadow: 0rpx 0rpx 14rpx 0rpx 
          rgba(0, 0, 0, 0.1);
        border-radius: 10rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
        padding-left: 30rpx;
        box-sizing: border-box;
        span{
          font-size: 28rpx;
          font-weight: 700;
          color: #111111;
          margin-bottom: 20rpx;
        }
        .tm-btn{
          font-size: 20rpx;
        }
        .tm-quick-bottom{
          position: absolute;
          right: -5rpx;
          bottom: -5rpx;
          width: 55rpx;
          height: 55rpx;
          border-radius: 50%;
          background-image: linear-gradient(-29deg, 
            #ffffff 0%, 
            #e8f9f7 100%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .tm-hot{
      width: 100%;
      .tm-hot-header{
        width: 100%;
        height: 50rpx;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        div{
          display: flex;
          align-items: center;
        }
        .tm-hot-header-left{
          font-size: 30rpx;
          justify-content: flex-start;
        }
        .tm-hot-header-right{
          font-size: 26rpx;
          color:#323232;
          justify-content: flex-end;
        }
      }
      .tm-hot-goods{
        width: 100%;
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
      }
    }
  }
</style>
