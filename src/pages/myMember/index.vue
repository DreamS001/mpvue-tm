<template>
  <div class="container">
    <!-- 我的会员 -->
    <div class="tm-member-card">
      <image src="/static/images/member99.png" mode="aspectFill"/>
      <div class="tm-member-box">
        <span>会员享受超值优惠</span>
        <span>您的会员时长还有8天</span>
        <div class="renew">立即续费</div>
      </div>
    </div>

    <div class="tm-member-content">
      <div class="tm-type-title">月会员专区</div>
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
                <span>剩</span><span>{{item.goodsTotal}}</span>
              </div>
            </div>
            <div class="tm-right-member">
              <div class="tm-price">
                <span>￥{{item.goodsOldPrice}}</span>
                <span><s>￥</s><s>{{item.goodsNewPrice}}</s></span>
              </div>
              <div class="tm-rush-btn">立即抢购</div>
            </div>
          </div>
        </div>
      </block>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      goodsData:[
        {id:0,goodsUrl:'/static/images/goods/goods1.png',goodsName:'《谈判专家》开心麻花2019爆笑',goodsDate:'2018.12.18-2018.12.30',goodsNum:'6',goodsTotal:'2',goodsNewPrice:'66',goodsOldPrice:'198',isMember:true},
        {id:2,goodsUrl:'/static/images/goods/goods2.png',goodsName:'《谈判专家》开心麻花2019爆笑',goodsDate:'2018.12.18-2018.12.30',goodsNum:'6',goodsTotal:'6',goodsNewPrice:'66',goodsOldPrice:'198',isMember:true},
        // {id:3,goodsUrl:'',goodsName:'《谈判专家》开心麻花2019爆笑',goodsDate:'2018.12.18-2018.12.30',goodsNum:'6',goodsTotal:'12',goodsNewPrice:'66',goodsOldPrice:'198',isMember:true},
        // {id:4,goodsUrl:'',goodsName:'《谈判专家》开心麻花2019爆笑',goodsDate:'2018.12.18-2018.12.30',goodsNum:'6',goodsTotal:'12',goodsNewPrice:'66',goodsOldPrice:'198',isMember:true},
        // {id:5,goodsUrl:'',goodsName:'《谈判专家》开心麻花2019爆笑',goodsDate:'2018.12.18-2018.12.30',goodsNum:'6',goodsTotal:'12',goodsNewPrice:'66',goodsOldPrice:'198',isMember:true},
        // {id:6,goodsUrl:'',goodsName:'《谈判专家》开心麻花2019爆笑',goodsDate:'2018.12.18-2018.12.30',goodsNum:'6',goodsTotal:'12',goodsNewPrice:'66',goodsOldPrice:'198',isMember:true}
      ]
    }
  },

  components: {
    
  },

  methods: {
    
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .tm-member-card{
    width: 702rpx;
    height: 340rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 0rpx 40rpx 0rpx 
      rgba(0, 117, 105, 0.15);
    border-radius: 20rpx;
    margin-top: 30rpx;
    position: relative;
    image{
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      border-radius: 20rpx 20rpx 0rpx 0rpx;
    }
    .tm-member-box{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 155rpx 0 30rpx 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      span{
        font-size: 20rpx;
        color: #aaaaaa;
      }
      span:nth-child(1){
        font-size: 28rpx;
        color: #333333;
      }
      .renew{
        width: 160rpx;
        height: 50rpx;
        background-image: linear-gradient(0deg, 
          #f65656 0%, 
          #ff7b7b 100%);
        box-shadow: 0rpx 5rpx 9rpx 0rpx 
          rgba(246, 86, 86, 0.26);
        border-radius: 25rpx;
        font-size: 28rpx;
        color: #ffffff;
        text-align: center;
        line-height: 50rpx;
      }
    }
  }
  .tm-member-content{
    margin-top: 15rpx;
    .tm-type-title{
      font-size: 32rpx;
      font-weight: 700;
      color: #333333;
      padding: 50rpx 0 0 0;
      box-sizing: border-box;
    }
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
          font-size: 28rpx;
          font-weight: 600;
          color: #333333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin:30rpx 0;
          padding-left: 10rpx;
          padding-right: 30rpx;
          box-sizing: border-box;
          color: #f65a5a;
          .tm-date{
            color: #333333;
          }
          .tm-number{
            font-weight: 600;
          }
          .tm-number span:nth-child(1){
            font-size: 20rpx;
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
            span:nth-child(2){
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
            span:nth-child(1){
              display: inline-block;
              margin: 0 23rpx 0 11rpx;
              text-decoration-line: line-through;
              padding-bottom: 6rpx;
              box-sizing: border-box;
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
  }
</style>
