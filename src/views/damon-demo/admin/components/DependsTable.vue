<template>
  <el-card>
    <div class="title">
      <div class="left">
        依赖信息
      </div>
      <div class="right">
        部署时间:2022-10-17 11:24:52
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      />
      <el-table-column
        prop="address"
        label="地址"
      />
    </el-table>
  </el-card>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const dataMap = reactive({
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    })
    return { ...toRefs(dataMap) }
  }
})
</script>
<style lang="scss" scoped>
.title{
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

</style>
