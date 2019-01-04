<template>
  <div class="container">
    <!-- 分享邀请 -->
    <div class="tm-myorder-list">
      <block v-for="(item,index) in goodsData" :key="index">
        <div class="tm-myorder-list-item">
          <div class="tm-item-top"><span>{{item.orderDate}}</span><span :style="{color:'#f65656','font-size':28+'rpx'}">{{item.bonus}}</span></div>
          <div class="tm-item-bottom">
            <div class="tm-item-bottom-left">
              <image :src="item.goodsUrl" />
            </div>
            <div class="tm-item-bottom-right">
              <div class="tm-item-bottom-right-top">
                <span class="tm-item-bottom-right-top-title">{{item.goodsName}}</span>
                <span class="tm-item-bottom-right-top-member">{{item.member}}会员</span>
              </div>
              <div class="tm-item-bottom-right-middle">
                <div class="tm-middle-left">
                  <span>{{item.goodsDate}}</span>
                  <span>{{item.address}}</span>
                </div>
                <div class="tm-middle-right">
                  <span>￥</span>
                  <span>{{item.goodsNewPrice}}</span>
                </div>
              </div>
              <div class="tm-item-bottom-right-bottom">
                <div class="tm-item-bottom-right-bottom-left">
                  <block v-if="item.goodsNum=='0'">
                    <span>{{item.goodsNum}}</span>/<span>{{item.tatol}}</span>
                  </block>
                  <block v-else>
                    <span :style="{color:'#f65a5a'}">{{item.goodsNum}}</span>/<span>{{item.tatol}}</span>
                  </block>
                </div>
                <block v-if="item.type=='evaluate'">
                  <div class="tm-item-btn">继续分享</div>
                </block>
                <block v-else>
                  <div class="tm-item-btn" :style="{border:'solid 1px #aaaaaa','background-color':'#ffffff',color:'#666666' ,'box-shadow': '0rpx 0rpx 0rpx 0rpx  rgba(102, 102, 102, 1)'}">活动结束</div>
                </block>
              </div>
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
  onLoad(){
    this.goodsData=categoryData.goodsData
  },
  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style>
  page{
    background: #f8f8f8;
  }
</style>

<style lang="less" scoped>
  .container{
    padding: 0;
    .tm-myorder-list{
      padding-bottom: 50rpx;
      .tm-myorder-list-item{
        width: 100%;
        height: 340rpx;
        background-color: #ffffff;
        margin-top: 30rpx;
        padding: 0 24rpx;
        box-sizing: border-box;
        .tm-item-top{
          width: 100%;
          height: 84rpx;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 24rpx;
          color: #777777;
        }
        .tm-item-bottom{
          width: 100%;
          padding: 37rpx 0;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .tm-item-bottom-left{
            width: 180rpx;
            height: 180rpx;
            border-radius: 6rpx;
            image{
              width: 100%;
              height: 100%;
              border-radius: 6rpx;
            }
          }
          .tm-item-bottom-right{
            width: 520rpx;
            height: 180rpx;
            .tm-item-bottom-right-top{
              display: flex;
              justify-content: space-between;
              align-items: center;
              span{
                display: inline-block;
              }
              .tm-item-bottom-right-top-title{
                width: 365rpx;
                display: inline-block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow:ellipsis;
              }
              .tm-item-bottom-right-top-member{
                width: 90rpx;
                height: 30rpx;
                border-radius: 4rpx;
                border: solid 1px #76a0ee;
                font-size: 20rpx;
                line-height: 30rpx;
                color: #76a0ee;
                text-align: center;
              }
            }
            .tm-item-bottom-right-middle{
              width: 100%;
              height: 68rpx;
              margin-top: 30rpx;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .tm-middle-left{
                height: 100%;
                padding-left: 20rpx;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                font-size: 24rpx;
                color: #333333;
              }
              .tm-middle-right{
                span{
                  font-size: 36rpx;
                  color: #f65a5a;
                }
                span:nth-child(1){
                  font-size: 24rpx;
                  color: #f65a5a;
                }
              }
            }
            .tm-item-bottom-right-bottom{
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-left: 20rpx;
              box-sizing: border-box;
              .tm-item-bottom-right-bottom-left{
                font-size: 26rpx;
                span{
                  font-size: 26rpx;
                  color: #666666;
                }
              }
              .tm-item-btn{
                width: 160rpx;
                height: 50rpx;
                background-color: #f65a5a;
                box-shadow: 0rpx 3rpx 6rpx 0rpx 
                  rgba(246, 90, 90, 0.3);
                border-radius: 25rpx;
                line-height: 50rpx;
                text-align: center;
                font-size: 28rpx;
                color: #ffffff;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>
