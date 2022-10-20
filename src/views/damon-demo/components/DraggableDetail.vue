<template>
  <div class="draggable-wrapper">
    <el-row>
      <el-col
        :lg="12"
        :xs="24"
        :sm="24"
      >
        <div class="title">
          List
        </div>
        <draggable
          :list="list1"
          group="article"
          class="dragArea"
        >
          <div
            v-for="(element, key) in list1"
            :key="key"
          >
            <h2>{{ element }}</h2>
          </div>
        </draggable>
      </el-col>
      <el-col
        :lg="12"
        :xs="24"
        :sm="24"
      >
        <div class="title">
          List
        </div>
        <draggable
          :list="list2"
          group="article"
          class="dragArea"
        >
          <div
            v-for="(element2, key2) in list2"
            :key="key2"
          >
            <h2>{{ element2 }}</h2>
          </div>
        </draggable>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

export default defineComponent({
  name: 'MyDraggableDetail',
  components: {
    draggable: VueDraggableNext
  },
  setup() {
    const dataMap = reactive({
      list1: [1, 2, 3, 4, 5],
      list2: [6, 7, 8, 9, 10]

    })
    return { ...toRefs(dataMap) }
  }

})
</script>
<style lang="">

</style>
