<template>
  <div class="demo-control-panel">
    <el-button type="primary" @click="downloadAsSvg">
      <i class="el-icon-download"></i>
      Download SVG
    </el-button>
    <label>Node:</label>
    <el-button @click="addNode">add</el-button>
    <el-button :disabled="selectedNodes.length == 0" @click="removeNode">remove</el-button>
    <label>Edge:</label>
    <el-button :disabled="selectedNodes.length != 2" @click="addEdge">add</el-button>
    <el-button :disabled="selectedEdges.length == 0" @click="removeEdge">remove</el-button>
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

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { VNetworkGraph, Nodes, Edges } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    const nodes: Nodes = reactive(data.nodes)
    const edges: Edges = reactive(data.edges)
    const nextNodeIndex = ref(Object.keys(nodes).length + 1)
    const nextEdgeIndex = ref(Object.keys(edges).length + 1)

    const selectedNodes = ref<string[]>([])
    const selectedEdges = ref<string[]>([])

    // ref="graph"
    const graph = ref<InstanceType<typeof VNetworkGraph>>()

    return {
      data,
      nodes,
      edges,
      nextNodeIndex,
      nextEdgeIndex,
      selectedNodes,
      selectedEdges,
      graph,
    }
  },
  methods: {
    downloadAsSvg() {
      if (!this.graph) return
      const text = this.graph.getAsSvg()
      const url = URL.createObjectURL(new Blob([text], { type: "octet/stream" }))
      const a = document.createElement("a")
      a.href = url
      a.download = "network-graph.svg" // filename to download
      a.click()
      window.URL.revokeObjectURL(url)
    },
    addNode() {
      const nodeId = `node${this.nextNodeIndex}`
      const name = `N${this.nextNodeIndex}`
      this.nodes[nodeId] = { name }
      this.nextNodeIndex++
    },
    removeNode() {
      for (const nodeId of this.selectedNodes) {
        delete this.nodes[nodeId]
      }
    },
    addEdge() {
      if (this.selectedNodes.length !== 2) return
      const [source, target] = this.selectedNodes
      const edgeId = `node${this.nextNodeIndex++}`
      this.edges[edgeId] = { source, target }
    },
    removeEdge() {
      for (const edgeId of this.selectedEdges) {
        delete this.edges[edgeId]
      }
    },
  },
})
</script>
