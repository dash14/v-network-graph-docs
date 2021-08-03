<template>
  <div class="demo-control-panel">
    <el-checkbox v-model="configs.view.scalingObjects">Scale objects</el-checkbox>
    <el-slider-custom-zoom v-model="zoomLevel" />
  </div>

  <v-network-graph
    v-model:zoom-level="zoomLevel"
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import data from "./data"

export default defineComponent({
  setup() {
    const configs = {
      view: {
        scalingObjects: true
      }
    }

    const zoomLevel = ref(2)

    return { data, configs, zoomLevel }
  },
})
</script>
