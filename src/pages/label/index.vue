<template>
  <div class="container">
    <div class="label-list">
      <block v-for="(item,index) in labelData" :key="index">
        <div class="label-item" :data-label="item.label" @click="selectLabel">{{item.label}}</div>
      </block>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      labelData:[
        {id:1,label:'#活动nice'},
        {id:1,label:'#印象深刻'},
        {id:1,label:'#场景很赞'},
        {id:1,label:'#新颖'}
      ]
    }
  },

  components: {
    
  },

  methods: {
    selectLabel(e){
      console.log(e.currentTarget.dataset.label)
      wx.navigateBack({
        delta: 1
      });
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="less" scoped>
  .label-list{
    .label-item{
      width: 100%;
      height: 90rpx;
      border-bottom: 2rpx solid #e9e9ef;
      text-align: left;
      line-height: 90rpx;
      font-size: 28rpx;
      color: #333333;
    }
  }
</style>
