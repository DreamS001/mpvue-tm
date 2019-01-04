<template>
  <div class="container">
    <!-- 我的收藏 -->
    <div class="tm-collection-box">
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
    </div>
  </div>
</template>

<script>
import {categoryData} from './data'

export default {
  data () {
    return {
      goodsData:[]
    }
  },

  components: {
    
  },

  methods: {
    
  },
  onLoad() {
    this.goodsData = categoryData.goodsData
  },
  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .tm-collection-box{
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
