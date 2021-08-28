<template>
  <div class="demo-control-panel">
    <div>
      <label>Node:</label>
      <el-button @click="addNode">add</el-button>
      <el-button :disabled="selectedNodes.length == 0" @click="removeNode">remove</el-button>
    </div>
    <div>
      <label>Edge:</label>
      <el-button :disabled="selectedNodes.length != 2" @click="addEdge">add</el-button>
      <el-button :disabled="selectedEdges.length == 0" @click="removeEdge">remove</el-button>
    </div>
  </div>

  <v-network-graph
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
import { Nodes, Edges } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    const nodes: Nodes = reactive(data.nodes)
    const edges: Edges = reactive(data.edges)
    const nextNodeIndex = ref(Object.keys(nodes).length + 1)
    const nextEdgeIndex = ref(Object.keys(edges).length + 1)

    const selectedNodes = ref<string[]>([])
    const selectedEdges = ref<string[]>([])

    return {
      nodes,
      edges,
      data,
      nextNodeIndex,
      nextEdgeIndex,
      selectedNodes,
      selectedEdges,
    }
  },
  methods: {
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
