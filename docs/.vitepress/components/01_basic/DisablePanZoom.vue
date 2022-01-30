<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"

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

const configs = reactive(
  vNG.defineConfigs({
    view: {
      panEnabled: true,
      zoomEnabled: true,
    },
    node: {
      draggable: true,
    },
  })
)
</script>

<template>
  <div class="demo-control-panel">
    <el-checkbox v-model="configs.view.panEnabled">Pan enabled</el-checkbox>
    <el-checkbox v-model="configs.view.zoomEnabled">Zoom enabled</el-checkbox>
    <el-checkbox v-model="configs.node.draggable">Node draggable</el-checkbox>
  </div>

  <v-network-graph
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  />
</template>
