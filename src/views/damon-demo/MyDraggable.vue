<template>
  <section>
    <div class="title">
      <div>draggable-list base on Vue.Draggable</div>
      <DraggableDetail />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, onBeforeMount } from 'vue'
import DraggableDetail from './components/DraggableDetail.vue'
import { getArticles } from '@/apis/articles'
import { ArticleModel } from '@/model/articleModel'

export default defineComponent({
  components: {
    DraggableDetail
  },
  setup() {
    const dataMap = reactive({
      list1: Array<ArticleModel>(),
      list2: Array<ArticleModel>()
    })

    const fetchData = async() => {
      const res = await getArticles({})
      const data = res?.data?.items ?? []
      const total = res?.data?.total ?? 0
      console.error(data.splice(0, 5))
      dataMap.list1 = data.splice(0, 5)
      dataMap.list2 = data.slice()
      console.error('data---', data, '\n total', total, '\n list1', dataMap.list1, '\n list2', dataMap.list2)
    }
    onBeforeMount(() => {
      fetchData()
    })

    return { ...toRefs(dataMap), fetchData }
  }

})
</script>
<style lang="">

</style>
