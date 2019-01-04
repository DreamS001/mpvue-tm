<template>
  <div class="container">
    <!-- 搜索框 -->
    <div class="tm-search-box">
      <div class="search-box">
        <i class="iconfont icon-sousuo" :style="{color:'#bebebe', 'font-size': 50 + 'rpx'}"></i>
        <input placeholder="周柏豪演唱会" placeholder-style="font-size: 24rpx,color:#bdbdbd" @input="confirm($event)"/>
      </div>
      <span class="canle" @click="canle">取消</span>
    </div>
    <!-- 热门搜索 -->
    <div class="tm-search-hot">
      <div class="tm-search-title">热门搜索</div>
      <div class="tm-search-list">
        <block v-for="(item,index) in hotData" :key="index">
          <div class="tm-search-item">{{item.keyWord}}</div>
        </block>
      </div>
    </div>
    <!-- 历史搜索 -->
    <div class="tm-search-hot">
      <div class="tm-search-title">历史搜索</div>
      <div class="tm-search-list">
        <block v-for="(item,index) in historyData" :key="index">
          <div class="tm-search-item">{{item.keyWord}}</div>
        </block>
      </div>
    </div>
  </div>
</template>

<script>
import {searchData} from './data'

export default {
  data () {
    return {
      hotData:[],
      historyData:[]
    }
  },

  components: {
    
  },

  methods: {
    confirm(e) {
      // console.log(e.target.value)
      // wx.showLoading({
      //   title: '玩命加载中',
      // })
      // setTimeout(function(){
      //   wx.hideLoading();
      // },2000)
    },
    canle(){
      wx.switchTab({
        url:'/pages/home/main'
      })
    }
  },
  onLoad(){
    this.hotData=searchData.hotData
    this.historyData=searchData.historyData
  },
  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding-top: 20rpx;
    .tm-search-box{
      width: 100%;
      height: 100rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search-box{
        width: 620rpx;
        height: 60rpx;
        background-color: #f5f5f5;
        border-radius: 30rpx;
        display: flex;
        align-items: center;
        i{
          margin:8rpx 10rpx;
          color: #fff;
          font-size: 32rpx;
        }
        input{
          width: 100%;
          font-size: 24rpx;
          color: #bdbdbd;
          height: 100%;
        }
      }
      .canle{
        font-size: 28rpx;
        color: #3fd6c7;
      }
    }
    .tm-search-hot{
      .tm-search-title{
        font-size: 24rpx;
        color: #999999;
        margin: 20rpx 0;
      }
      .tm-search-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 10rpx 0;
        box-sizing: border-box;
        .tm-search-item{
          padding: 19rpx 20rpx;
          box-sizing: border-box;
          font-size: 22rpx;
          font-weight: 400;
          color: #333333;
          background-color: #f5f5f5;
          border-radius: 12rpx;
          margin: 10rpx 8rpx;
        }
      }
    }
  }
  
</style>
