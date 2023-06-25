<script setup lang="ts">
import { reactive, ref } from "vue"
import * as vNG from "v-network-graph"

const nodes = ref({})
const edges = ref({})
const layouts = ref({ nodes: {} })

const sleep = (seconds: number) => new Promise(resolve => {
  setTimeout(resolve, seconds * 1000)
})

async function loadNetworkAsync() {
  // Emulate loading network information from a server.
  nodes.value = {}
  edges.value = {}
  layouts.value = { nodes: {} }

  await sleep(1)

  const network = {
    nodes: {
      node1: { name: "Node 1" },
      node2: { name: "Node 2" },
      node3: { name: "Node 3" },
      node4: { name: "Node 4" },
    },
    edges: {
      edge1: { source: "node1", target: "node2" },
      edge2: { source: "node2", target: "node3" },
      edge3: { source: "node3", target: "node4" },
    },
    layouts: {
      nodes: {
        node1: { x: 0, y: 0 },
        node2: { x: 50, y: 50 },
        node3: { x: 100, y: 0 },
        node4: { x: 150, y: 50 },
      },
    }
  }

  nodes.value = network.nodes
  edges.value = network.edges
  layouts.value = network.layouts
}

const initialConfigs = vNG.defineConfigs({
  view: {
    autoPanAndZoomOnLoad: "fit-content",
    onBeforeInitialDisplay: async () => {
      await loadNetworkAsync()
    }
  },
})
const configs = reactive(initialConfigs)

const recreateCount = ref(0)
function recreate() {
  // Recreate v-network-graph component
  recreateCount.value++
}
</script>

<template>
  <div class="demo-control-panel">
    <el-button @click="recreate">Recreate</el-button>
  </div>

  <v-network-graph
    :key="recreateCount"
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  />
</template>
