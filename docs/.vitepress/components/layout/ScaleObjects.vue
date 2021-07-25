<template>
  <div class="demo-control-panel">
    <el-checkbox v-model="configs.view.scalingObjects">Scale objects</el-checkbox>
    <el-slider-custom-zoom v-model="zoomLevel" />
  </div>

  <v-network-graph
    v-model:zoom-level="zoomLevel"
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"

export default defineComponent({
  setup() {
    const nodes = {
      node1: { name: "Node 1" },
      node2: { name: "Node 2" },
      node3: { name: "Node 3" },
      node4: { name: "Node 4" },
    }
    const edges = {
      edge1: { source: "node1", target: "node2" },
      edge2: { source: "node2", target: "node3" },
      edge3: { source: "node3", target: "node4" },
    }
    const layouts = {
      nodes: {
        node1: { x: 0, y: 0 },
        node2: { x: 50, y: 50 },
        node3: { x: 100, y: 0 },
        node4: { x: 150, y: 50 },
      },
    }
    const configs = reactive({
      view: {
        scalingObjects: true
      }
    })

    const zoomLevel = ref(2)

    return { nodes, edges, layouts, configs, zoomLevel }
  },
})
</script>
