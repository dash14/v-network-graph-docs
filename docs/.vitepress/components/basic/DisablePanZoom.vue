<template>
  <div class="demo-control-panel">
    <el-checkbox v-model="styles.view.panEnabled">Pan enabled</el-checkbox>
    <el-checkbox v-model="styles.view.zoomEnabled">Zoom enabled</el-checkbox>
    <el-checkbox v-model="styles.node.draggable">Node draggable</el-checkbox>
  </div>

  <v-network-graph
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :styles="styles"
    class="v-network-graph"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

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
    const styles = reactive({
      view: {
        panEnabled: true,
        zoomEnabled: true,
      },
      node: {
        draggable: true,
      },
    })
    return { nodes, edges, layouts, styles }
  },
})
</script>

<style scoped>
.demo-control-panel {
  height: 40px;
}
.v-network-graph {
  height: calc(100% - 40px);
}
</style>
