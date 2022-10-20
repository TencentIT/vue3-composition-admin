<template>
  <section class="dashboard-editor-container">
    <GithubCorner class="github-corner" />
    <PangelGroup @change-line-chart="handleChangeDart" />
    <el-row class="line-chart-wrapper">
      <LineChart :chart-data="lineChartData" />
    </el-row>
    <el-row :gutter="32">
      <el-col
        :lg="8"
        :xs="24"
        :sm="24"
      >
        <div class="chart-wrapper">
          1
        </div>
      </el-col>
      <el-col
        :lg="8"
        :xs="24"
        :sm="24"
      >
        <div class="chart-wrapper">
          1
        </div>
      </el-col>
      <el-col
        :lg="8"
        :xs="24"
        :sm="24"
      >
        <div class="chart-wrapper">
          1
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="32">
      <el-col
        :lg="12"
        :xs="24"
        :sm="24"
      >
        <div class="cart-wrapper">
          <DependsTable />
        </div>
      </el-col>
      <el-col
        :lg="12"
        :xs="24"
        :sm="24"
      >
        <div class="cart-wrapper">
          1
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script lang="ts">
import GithubCorner from './components/GithubCorner.vue'
import PangelGroup from './components/PangelGroup.vue'
import LineChart from './components/LineChart.vue'
import DependsTable from './components/DependsTable.vue'

import { defineComponent, ref, reactive, toRefs } from 'vue'

export default defineComponent({
  components: { GithubCorner, PangelGroup, LineChart, DependsTable },
  setup() {
    const num = ref(0)
    const map = reactive({
      a: 1
    })
    const data = {
      newVisitis: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      },
      messages: {
        expectedData: [200, 192, 120, 144, 160, 130, 140],
        actualData: [180, 160, 151, 106, 145, 150, 130]
      },
      purchases: {
        expectedData: [80, 100, 121, 104, 105, 90, 100],
        actualData: [120, 90, 100, 138, 142, 130, 130]
      },
      shoppings: {
        expectedData: [130, 140, 141, 142, 145, 150, 160],
        actualData: [120, 82, 91, 154, 162, 140, 130]
      }
    }

    const lineChartData = ref(data.newVisitis)
    const handleChangeDart = (type: string) => {
      lineChartData.value = data[type]
    }
    return {
      lineChartData,
      num,
      ...toRefs(map),
      handleChangeDart
    }
  }

})
</script>

<style lang='scss' scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: #F2F7FF;
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

}
.line-chart-wrapper {
  background: #fff;
  margin: 20px 0;
  border-radius: 8px;
  padding: 10px;
}
.chart-wrapper{
  background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
    border-radius: 8px;
    height: 300px;
}
.cart-wrapper{
  height: 300px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 32px;
}
</style>
