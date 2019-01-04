<template>
  <div class="container">
    <!-- 我的头部 -->
    <div class="tm-mine-header">
      <div class="tm-mine-left">
        <image :src="userInfo.avatarUrl"  mode="aspectFill"/>
      </div>
      <div class="tm-mine-right">
        <div class="tm-right-name">
          <span class="tm-mine-name">{{userInfo.nickName}}</span>
          <div class="tm-mine-member">
            <image src="/static/images/mine/month-card.png" mode="aspectFill" />
          </div>
        </div>
        <div class="tm-right-date">距离月会员到期还有8天</div>
        <div class="tm-right-renew">
          <span>立即续费</span>
          <i class="iconfont icon-xiangyou" :style="{color: 'rgba(102,102,102,0.73)', 'font-size': 30 + 'rpx'}"></i>
        </div>
      </div>
      <div class="tm-float-box">
        <i class="iconfont icon-xiaoxi" @click="goMessage" :style="{color: '#777777', 'font-size': 66 + 'rpx'}"></i>
        <i class="iconfont icon-wode" @click="goMeInfo" :style="{color: '#777777', 'font-size': 66 + 'rpx'}"></i>
      </div>
      <i class="iconfont icon-saoyisao tm-scan" @click="goScan" :style="{color: '#777777', 'font-size': 66 + 'rpx'}"></i>
    </div>
    <!-- 会员权益 -->
    <div class="tm-mine-members">
      <div class="tm-member-box">
        <div class="tm-member-left">开通会员，尊享3大权益</div>
        <div class="tm-member-right" @click="goUpgrade">
          <span>升级为季会员</span>
          <i class="iconfont icon-xiaosanjiao" :style="{color: '#ffffff', 'font-size': 22 + 'rpx'}"></i>
        </div>
      </div>
    </div>
    <!-- 我的票券 -->
    <div class="tm-mine-coupon">
      <div class="tm-coupon-item" @click="goWallet">
        <span>¥150</span>
        <span class="tm-coupon-bottom">账户余额</span>
      </div>
      <div class="tm-coupon-item" @click="goMemberCoupon">
        <span>2</span>
        <span class="tm-coupon-bottom">会员券</span>
      </div>
      <div class="tm-coupon-item" @click="goActiveCoupon">
        <span>5</span>
        <span class="tm-coupon-bottom">活动券</span>
      </div>
    </div>
    <!-- 快捷入口 -->
    <div class="tm-mine-quick">
      <block v-for="(item,index) in quickData" :key="index">
        <div class="tm-quick-item" @click="goLevel" :data-id="item.id">
          <i class="iconfont" :class="item.icon" :style="{color: '#333333', 'font-size': 75 + 'rpx'}"></i>
          <span>{{item.name}}</span>
        </div>
      </block>
    </div>

    <!-- 弹框 -->
    <div class="tm-taost-box" v-if="isShow">
      <div class="tm-taost-content">
        <div class="tm-taost-top">
          <span>即将升级为季会员</span>
          <span>您的会员登记将会升级为最高优先级</span>
        </div>
        <div class="tm-taost-middle">
          <block v-for="(item,index) in taostData" :key="index">
            <div class="tm-taost-middle-item">
              <div class="tm-taost-middle-item-left">
                <image :src="item.imgUrl" mode="aspectFill" />
              </div>
              <div class="tm-taost-middle-item-right">
                <span>{{item.title}}</span>
                <span>{{item.desc}}</span>
              </div>
            </div>
          </block>

          
        </div>
        <div class="tm-taost-bottom">立即升级为季会员</div>

        <i class="iconfont icon-guanbi tm-close" @click="close" :style="{'font-size':60+'rpx',color:'#eeeeee'}"></i>
      </div>
    </div>
  </div> 
</template>

<script>
import {mineData} from './data'

export default {
  data () {
    return {
      quickData:[],
      taostData:[
        {id:1,imgUrl:'/static/images/mine/1.png',title:'折扣福利',desc:'享更高力度优惠'},
        {id:2,imgUrl:'/static/images/mine/2.png',title:'更多优惠',desc:'演出活动免费或最高优惠福利'},
        {id:3,imgUrl:'/static/images/mine/3.png',title:'服务延长',desc:'多享受会员特权至少90天'}
      ],
      isShow:false,
      userInfo:{}
    }
  },

  components: {
    
  },

  methods: {
    goLevel(e){
      console.log(e)
      console.log(e.currentTarget.dataset.id)
      const id=e.currentTarget.dataset.id;
      switch (id)
      {
      case 1:
        wx.navigateTo({url:'/pages/myWallet/main'})
        break;
      case 2:
        wx.navigateTo({url:'/pages/myOrder/main'})
        break;
      case 3:
        wx.navigateTo({url:'/pages/collection/main'})
        break;
      case 4:
        wx.navigateTo({url:'/pages/myMember/main'})
        break;
      case 5:
        wx.navigateTo({url:'/pages/shareInvitation/main'})
        break;
      case 6:
        wx.navigateTo({url:'/pages/problemCenter/main'})
        break;
      case 7:
        wx.navigateTo({url:'/pages/promotion/main'})
        break; 
      case 8:
        // wx.navigateTo({url:'/pages/afterSaleService/main'})
        break;
      }
      // wx.navigateTo({url:'/pages/search/main?id='+})
    },
    goMemberCoupon(){
      wx.navigateTo({url:'/pages/myMemberCoupons/main?id='+1})
    },
    goActiveCoupon(){
      wx.navigateTo({url:'/pages/myMemberCoupons/main?id='+2})
    },
    goUpgrade(){
      this.isShow=!this.isShow
    },
    close(){
      this.isShow=!this.isShow
    },
    goMessage(){
      wx.navigateTo({url:'/pages/myMessage/main'})
    },
    goMeInfo(){
      wx.navigateTo({url:'/pages/myInfo/main'})
    },
    goWallet(){
      wx.navigateTo({url:'/pages/myWallet/main'})
    },
    goScan(){
      var that = this
      wx.scanCode({
        onlyFromCamera: true,//仅仅相机
        success: (res) => {
          console.log(res)
        },
        //错误返回
        fail: (res) => {
          wx.showToast({
            title: '扫码失败!',
            icon: 'none',
            duration: 1000
          })
        }
      })
    }
  },
  onLoad(){
    console.log(this.GLOBAL.userInfo)
    this.userInfo=this.GLOBAL.userInfo
    this.quickData=mineData.quickData
  },
  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding: 0;
    .tm-mine-header{
      width: 100%;
      height: 280rpx;
      padding: 77rpx 33rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      position: relative;
      .tm-mine-left{
        width: 126rpx;
        height: 126rpx;
        background-color: #ffffff;
        image{
          width: 100%;
          height: 100%;
          border-radius: 63rpx;
        }
      }
      .tm-mine-right{
        margin-left: 20rpx;
        padding: 13rpx 0 10rpx 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .tm-right-name{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 34rpx;
          .tm-mine-name{
            font-size: 28rpx;
            font-weight: 600;
            color: #333333;
            margin-right: 24rpx;
          }
          .tm-mine-member{
            width: 74rpx;
            height: 32rpx;
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            border-radius: 16rpx;
            font-size: 0;
            image{
              width: 100%;
              height: 100%;
            }
          }
        }
        .tm-right-date{
          font-size: 20rpx;
          color: #aaaaaa;
          margin: 18rpx 0 16rpx 0;
        }
        .tm-right-renew{
          display: flex;
          align-items: center;
          font-size: 20rpx;
          color: #777777;
        }
      }
      .tm-float-box{
        width: 110rpx;
        height: 40rpx;
        position: absolute;
        top: 20rpx;
        right: 34rpx;
        display: flex;
        justify-content: space-between;
      }
      .tm-scan{
        position: absolute;
        top:80rpx;
        right: 10rpx;
      }
    }
    .tm-mine-members{
      width: 100%;
      height: 80rpx;
      padding: 0 34rpx;
      box-sizing: border-box;
      .tm-member-box{
        width: 100%;
        height: 100%;
        background-image: linear-gradient(-100deg, 
          #3fd6c7 0%, 
          #63ded2 46%, 
          #86e5dc 100%);
        border-radius: 20rpx 20rpx 0rpx 0rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50rpx 0 55rpx;
        box-sizing: border-box;
        .tm-member-left{
          font-size: 24rpx;
          font-weight: 700;
          color: #ffffff;
        }
        .tm-member-right{
          font-size: 28rpx;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
        }
      }
    }
    .tm-mine-coupon{
      width: 100%;
      padding: 60rpx 56rpx 48rpx 56rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #ebebeb;
      .tm-coupon-item{
        width: 120rpx;
        height: 60rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span{
          font-size: 32rpx;
          font-weight: 700;
          color: #f65656;
        }
        .tm-coupon-bottom{
          font-size: 22rpx;
          color: #777777;
          margin-top: 14rpx;
        }
      }
    }
    .tm-mine-quick{
      width: 100%;
      padding: 60rpx 62rpx 0 62rpx;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      .tm-quick-item{
        width: 20%;
        height: 120rpx;
        margin-right: 5%;
        margin-bottom: 40rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        span{
          font-size: 22rpx;
          color: #777777;
        }
      }
      .tm-quick-item:nth-child(4n){
        margin-right: 0;
      }
    }
    .tm-taost-box{
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      .tm-taost-content{
        width: 469rpx;
        height: 625rpx;
        background-color: #ffffff;
        border-radius: 20rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .tm-taost-top{
          width: 100%;
          height: 165rpx;
          background-image: linear-gradient(0deg, 
            #f75b5b 0%, 
            #fe8585 100%);
          border-radius: 20rpx 20rpx 0 0;
          padding: 55rpx 0 24rpx 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          span{
            font-size: 40rpx;
            font-weight: 400;
            color: #ffffff;
          }
          span:nth-child(2){
            font-size: 24rpx;
            font-weight: 400;
            color: #ffffff;
          }
        }
        .tm-taost-middle{
          display: flex;
          flex-direction: column;
          align-items: center;
          .tm-taost-middle-item{
            width: 100%;
            height: 62rpx;
            padding: 0 37rpx 0 56rpx;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 36rpx;
            .tm-taost-middle-item-left{
              width: 62rpx;
              height: 62rpx;
              border-radius: 50%;
              margin-right: 24rpx;
              image{
                width: 100%;
                height: 100%;
              }
            }
            .tm-taost-middle-item-right{
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
              span{
                font-size: 24rpx;
                color: #333333;
              }
              span:nth-child(2){
                font-size: 21rpx;
                color: #666666;
              }
            }
          }
        }
        .tm-taost-bottom{
          width: 328rpx;
          height: 76rpx;
          margin-top: 50rpx;
          background-image: linear-gradient(0deg, 
            #f75b5b 0%, 
            #fe7d7d 100%);
          box-shadow: 0rpx 10rpx 30rpx 0rpx 
            rgba(249, 102, 102, 0.21);
          border-radius: 38rpx;
          font-size: 26rpx;
          color: #ffffff;
          text-align: center;
          line-height: 76rpx;
        }
        .tm-close{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -66rpx;
        }
      }
    }
  }
</style>
