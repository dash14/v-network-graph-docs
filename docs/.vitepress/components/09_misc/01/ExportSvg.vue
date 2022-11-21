<script setup lang="ts">
import { reactive, ref } from "vue"
import * as vNG from "v-network-graph"
import { Download } from "@element-plus/icons"
import data from "./data"

const nodes = reactive<vNG.Nodes>({ ...data.nodes })
const edges = reactive<vNG.Edges>({ ...data.edges })
const nextNodeIndex = ref(Object.keys(nodes).length + 1)
const nextEdgeIndex = ref(Object.keys(edges).length + 1)

const selectedNodes = ref<string[]>([])
const selectedEdges = ref<string[]>([])

// ref="graph"
const graph = ref<vNG.Instance>()

async function downloadAsSvg() {
  if (!graph.value) return
  const text = await graph.value.exportAsSvgText()
  const url = URL.createObjectURL(new Blob([text], { type: "octet/stream" }))
  const a = document.createElement("a")
  a.href = url
  a.download = "network-graph.svg" // filename to download
  a.click()
  window.URL.revokeObjectURL(url)
}

function addNode() {
  const nodeId = `node${nextNodeIndex.value}`
  const name = `N${nextNodeIndex.value}`
  nodes[nodeId] = { name }
  nextNodeIndex.value++
}

function removeNode() {
  for (const nodeId of selectedNodes.value) {
    delete nodes[nodeId]
  }
}

function addEdge() {
  if (selectedNodes.value.length !== 2) return
  const [source, target] = selectedNodes.value
  const edgeId = `edge${nextEdgeIndex.value++}`
  edges[edgeId] = { source, target }
}

function removeEdge() {
  for (const edgeId of selectedEdges.value) {
    delete edges[edgeId]
  }
}
</script>

<template>
  <div class="demo-control-panel">
    <el-button type="primary" @click="downloadAsSvg">
      <el-icon><download /></el-icon>
      Download SVG
    </el-button>
    <label>Node:</label>
    <el-button @click="addNode">add</el-button>
    <el-button
      :disabled="selectedNodes.length == 0"
      @click="removeNode"
    >remove</el-button>
    <label>Edge:</label>
    <el-button :disabled="selectedNodes.length != 2" @click="addEdge">add</el-button>
    <el-button
      :disabled="selectedEdges.length == 0"
      @click="removeEdge"
    >remove</el-button>
  </div>

  <v-network-graph
    ref="graph"
    v-model:selected-nodes="selectedNodes"
    v-model:selected-edges="selectedEdges"
    :nodes="nodes"
    :edges="edges"
    :layouts="data.layouts"
    :configs="data.configs"
  />
</template>
