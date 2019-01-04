<template>
  <div class="container">
    <div class="tm-city-now">
      <span class="tm-line"></span>
      <span class="now-city">当前城市：杭州市</span>
    </div>

    <div class="tm-city-list">
      <block v-for="(item,index) in cityData" :key="index">
        <div class="tm-city-item" :data-city="item.name" @click="selectCity">
          <span>{{item.name}}</span>
          <i class="iconfont icon-duigou" v-if="item.checked" :style="{'font-size':60+'rpx',color:'#8acac6'}"></i>
        </div>
      </block>
    </div>
  </div>
</template>

<script>
import {cityData} from './data'

export default {
  data () {
    return {
      cityData:[]
    }
  },

  components: {
    
  },

  methods: {
    selectCity(e){
      console.log(e.currentTarget.dataset.city)
      let pages = getCurrentPages();//当前页面
      let prevPage = pages[pages.length-2];//上一页面
      prevPage.setData({//直接给上移页面赋值
        cityData: e.currentTarget.dataset.city
      });
      wx.navigateBack({//返回
        delta:1
      })
    }
  },

  onLoad(){
    this.cityData=cityData.cityData
  },
  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f8f8f8;
    .tm-city-now{
      padding: 30rpx 0 38rpx 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .tm-line{
        display: block;
        width: 8rpx;
        height: 34rpx;
        background-color: #8acac6;
        border-radius: 3rpx;
        margin-right: 20rpx;
      }
      .now-city{
        font-size: 28rpx;
        font-weight: 700;
        color: #333333;
      }
    }
    .tm-city-list{
      width: 100%;
      padding-bottom: 11rpx;
      box-sizing: border-box;
      background-color: #ffffff;
	    border-radius: 15rpx;
      .tm-city-item{
        width: 100%;
        height: 90rpx;
        border-bottom: 3rpx solid #e9e9ef;
        font-size: 28rpx;
        line-height: 90rpx;
        color: #333333;
        padding: 0 30rpx;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
