<template>
  <div class="dashboard-box">
    <component :is="currentRole" />
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent, ref, computed, onBeforeMount } from 'vue'
import AdminDashboard from './admin/Index.vue'
import EditorDashboard from './editor/Index.vue'

export default defineComponent({
  components: {
    AdminDashboard,
    EditorDashboard

  },
  setup() {
    const currentRole = ref('admin-dashboard')
    const store = useStore()
    const roles = computed(() => {
      return store.state.user.roles
    })

    onBeforeMount(() => {
      if (!roles.value.includes('admin')) {
        currentRole.value = 'editor-dashboard'
      }
    })

    return { currentRole }
  }
})
</script>

<style lang='scss' scoped>

</style>
