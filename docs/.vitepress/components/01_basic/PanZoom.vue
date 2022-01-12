<script setup lang="ts">
import { ref } from "vue"
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
const configs = vNG.defineConfigs({
  view: {
    minZoomLevel: 0.1,
    maxZoomLevel: 16,
  },
})

const zoomLevel = ref(1)

// ref="graph"
const graph = ref<vNG.Instance>()
</script>

<template>
  <div class="demo-control-panel">
    <el-button @click="graph?.panToCenter()">To center</el-button>
    <el-button @click="graph?.fitToContents()">Fit</el-button>
    <el-button @click="graph?.zoomIn()">Zoom In</el-button>
    <el-button @click="graph?.zoomOut()">Zoom Out</el-button>
    <el-slider-custom-zoom v-model="zoomLevel" />
  </div>

  <v-network-graph
    ref="graph"
    v-model:zoom-level="zoomLevel"
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  />
</template>
