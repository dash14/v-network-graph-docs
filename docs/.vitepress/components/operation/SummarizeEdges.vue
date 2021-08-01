<template>
  <div class="demo-control-panel">
    <label>Node:</label>
    <el-button @click="addNode">add</el-button>
    <el-button :disabled="selectedNodes.length == 0" @click="removeNode">remove</el-button>
    <label>Edge:</label>
    <el-button :disabled="selectedNodes.length != 2" @click="addEdge">add</el-button>
    <el-button :disabled="selectedEdges.length == 0" @click="removeEdge">remove</el-button>
  </div>

  <v-network-graph
    v-model:selected-nodes="selectedNodes"
    v-model:selected-edges="selectedEdges"
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { Nodes, Edges } from "v-network-graph"

export default defineComponent({
  setup() {
    const nodes: Nodes = reactive({
      node1: { name: "N1" },
      node2: { name: "N2" },
      node3: { name: "N3" },
    })
    const edges: Edges = reactive({
      edge1: { source: "node1", target: "node2" },
      edge2: { source: "node1", target: "node2" },
      edge3: { source: "node1", target: "node2" },
      edge4: { source: "node1", target: "node2" },
      edge5: { source: "node1", target: "node2" },
      edge6: { source: "node1", target: "node2" },
      edge7: { source: "node2", target: "node3" },
      edge8: { source: "node2", target: "node3" },
      edge9: { source: "node3", target: "node1" },
    })
    const nextNodeIndex = ref(Object.keys(nodes).length + 1)
    const nextEdgeIndex = ref(Object.keys(edges).length + 1)

    const layouts = {
      nodes: {
        node1: { x: 50, y: 0 },
        node2: { x: 0, y: 75 },
        node3: { x: 100, y: 75 },
      },
    }

    const selectedNodes = ref<string[]>([])
    const selectedEdges = ref<string[]>([])

    const configs = reactive({
      node: {
        selectable: 2, // up to 2 nodes
      },
      edge: {
        selectable: true,
        stroke: {
          width: 3,
        }
      },
    })

    return {
      nodes,
      edges,
      nextNodeIndex,
      nextEdgeIndex,
      layouts,
      selectedNodes,
      selectedEdges,
      configs,
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
