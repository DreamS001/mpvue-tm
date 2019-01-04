<template>
  <div class="container">
    <!-- 问题中心 -->
    <div class="tm-problem-box">常见问题</div>

    <div class="tm-problem-content">
      <block v-for="(item,index) in problemData" :key="index">
        <div class="tm-problem-item" @click="goProblem" :data-id="item.id">
          <span>{{item.problemName}}</span>
          <i class="iconfont icon-xiangyou" :style="{color: '#cccccc', 'font-size': 45 + 'rpx'}"></i>
        </div>
      </block>
    </div>
    <!-- <div class="tm-problem-footer">
      <span>联系客服</span>
    </div> -->
    <button class="tm-problem-footer" open-type="contact" @click="handleContact">联系客服</button>
  </div>
</template>

<script>


export default {
  data () {
    return {
      problemData:[
        {id:1,problemName:'会员购买失败怎么办'},
        {id:2,problemName:'如何退订'},
        {id:3,problemName:'续费不成功怎么办'},
      ]
    }
  },

  components: {
    
  },

  methods: {
    goProblem(e){
      console.log(e.currentTarget.dataset.id)
      const id=e.currentTarget.dataset.id;
      wx.navigateTo({url:'/pages/problemCenterDetail/main?id='+id})
    },
    handleContact(e) {
      console.log(e.path)
      console.log(e.query)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    
  }
}
</script>

<style lang="less" scoped>
  .tm-problem-box{
    width: 100%;
    height: 114rpx;
    line-height: 114rpx;
    border-bottom: 2rpx solid #eeeeee;
    font-size: 26rpx;
    font-weight: 700;
    color: #3fd6c7;
    padding-left: 48rpx;
    box-sizing: border-box;
  }
  .tm-problem-content{
    .tm-problem-item{
      width: 100%;
      height: 98rpx;
      border-bottom: 2rpx solid #eeeeee;
      font-size: 22rpx;
      color: #aaaaaa;
      padding-left: 48rpx;
      padding-right: 18rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        font-weight: 700;
      }
    }
  }
  .tm-problem-footer{
    width: 100%;
    height: 98rpx;
	  background-color: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
    line-height: 98rpx;
    font-size: 28rpx;
    color: #333333;
  }
</style>
