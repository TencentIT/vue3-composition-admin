<template>
  <el-row>
    <el-col
      :lg="6"
      :xs="12"
      :sm="12"
    >
      <div
        class="card-panel"
        @click="handleSetLineChart('visits')"
      >
        <div class="img-wrapper">
          <img
            :src="visits"
            alt=""
          >
        </div>
      </div>
    </el-col>
    <el-col
      :lg="6"
      :xs="12"
      :sm="12"
    >
      <div
        class="card-panel"
        @click="handleSetLineChart('messages')"
      >
        <div class="img-wrapper">
          <img
            :src="messages"
            alt=""
          >
        </div>
        <div class="text-wrapper">
          <div class="title">
            Messages
          </div>
          <div class="count">
            11111
          </div>
        </div>
      </div>
    </el-col>
    <el-col
      :lg="6"
      :xs="12"
      :sm="12"
    >
      <div
        class="card-panel"
        @click="handleSetLineChart('purchases')"
      >
        <div class="img-wrapper">
          <img
            :src="purchases"
            alt=""
          >
        </div>
        <div class="text-wrapper">
          <div class="title">
            Purchases
          </div>
          <div class="count">
            11111
          </div>
        </div>
      </div>
    </el-col>
    <el-col
      :lg="6"
      :xs="12"
      :sm="12"
    >
      <div
        class="card-panel"
        @click="handleSetLineChart('shoppings')"
      >
        <div class="img-wrapper">
          <img
            :src="shoppings"
            alt=""
          >
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script  lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import messages from '@/assets/images/home/messages.png'
import purchases from '@/assets/images/home/purchases.png'
import shoppings from '@/assets/images/home/shoppings.png'
import visits from '@/assets/images/home/visits.png'

export default defineComponent({
  emits: ['change-line-chart'],
  setup(_, { emit }) {
    const dataMap = reactive({
      messages,
      purchases,
      shoppings,
      visits
    })
    const handleSetLineChart = (type: string) => {
      console.log('type', type)
      emit('change-line-chart', type)
    }
    return {
      ...toRefs(dataMap),
      handleSetLineChart
    }
  }
})
</script>

<style lang='scss' scoped>
.card-panel {
  cursor: pointer;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);
  border-color: rgba(0, 0, 0, 0.05);
  height: 124px;
  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .img-wrapper {
    margin-right: 20px;

    img {
      width: 60px;
      height: 60px;
    }
  }

  .text-wrapper {
    .title {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
    }

    .count {
      font-size: 20px;
    }
  }
}

.el-col {
  padding: 0 20px;
  margin-bottom: 20px;
}
</style>
