<template>
  <div class="demo-control-panel appearance">
    <div>
      <label>Node:</label>
      <el-button @click="addSkyBlueNode">Add SkyBlue</el-button>
      <el-button @click="addHotPinkNode">Add HotPink</el-button>
      <el-button @click="addGrayNode">Add Gray</el-button>
      <el-button @click="addBlackNode">Add Black</el-button>
      <el-button :disabled="selectedNodes.length == 0" @click="removeNode">Remove</el-button>
    </div>
    <div>
      <label>Edge:</label>
      <el-button :disabled="!isEdgeAddable()" @click="addSkyBlueEdge">Add SkyBlue</el-button>
      <el-button :disabled="!isEdgeAddable()" @click="addHotPinkEdge">Add HotPink</el-button>
      <el-button :disabled="!isEdgeAddable()" @click="addGrayEdge">Add Gray</el-button>
      <el-button :disabled="!isEdgeAddable()" @click="addBlackEdge">Add Black</el-button>
      <el-button :disabled="selectedEdges.length == 0" @click="removeEdge">Remove</el-button>
    </div>
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
import * as vNG from "v-network-graph"
import data, { Node, Edge } from "./data"

export default defineComponent({
  setup() {
    // In Node and Edge configuration, instead of concrete values,
    // you can specify functions that return a configuration value
    // with each node or edge as an argument.
    // In addition, you can use the `configsWithType` function to
    // specify the argument type of the callback function by
    // explicitly specifying a custom type for Node and Edge.
    const configs = reactive(
      vNG.configsWithType<Node, Edge>({
        node: {
          normal: {
            type: "circle",
            radius: node => node.size, // Use the value of each node object
            color: node => node.color,
          },
          hover: {
            radius: node => node.size + 2,
            color: node => node.color,
          },
          selectable: true,
          label: {
            visible: node => !!node.label,
          },
          focusring: {
            color: "darkgray",
          },
        },
        edge: {
          normal: {
            width: edge => edge.width, // Use the value of each edge object
            color: edge => edge.color,
            dasharray: edge => (edge.dashed ? "4" : "0"),
          },
        },
      })
    )

    const nextNodeIndex = ref(Object.keys(data.nodes).length + 1)
    const nextEdgeIndex = ref(Object.keys(data.edges).length + 1)
    const selectedNodes = ref<string[]>([])
    const selectedEdges = ref<string[]>([])

    return {
      nodes: data.nodes,
      edges: data.edges,
      layouts: data.layouts,
      configs,
      nextNodeIndex,
      nextEdgeIndex,
      selectedNodes,
      selectedEdges,
    }
  },

  methods: {
    addSkyBlueNode() {
      this.addNode({ size: 24, color: "lightskyblue", label: true })
    },
    addHotPinkNode() {
      this.addNode({ size: 32, color: "hotpink", label: true })
    },
    addGrayNode() {
      this.addNode({ size: 16, color: "gray", label: false })
    },
    addBlackNode() {
      this.addNode({ size: 48, color: "black", label: false })
    },
    addNode(node: Omit<Node, "name">) {
      const nodeId = `node${this.nextNodeIndex}`
      const name = `N${this.nextNodeIndex}`
      this.nodes[nodeId] = <Node>{ name, ...node }
      this.nextNodeIndex++
    },
    removeNode() {
      for (const nodeId of this.selectedNodes) {
        delete this.nodes[nodeId]
      }
    },
    addSkyBlueEdge() {
      this.addEdge({ width: 3, color: "skyblue" })
    },
    addHotPinkEdge() {
      this.addEdge({ width: 3, color: "hotpink" })
    },
    addGrayEdge() {
      this.addEdge({ width: 5, color: "gray", dashed: true })
    },
    addBlackEdge() {
      this.addEdge({ width: 1, color: "black" })
    },
    addEdge(edge: Omit<Edge, "source" | "target">) {
      if (this.selectedNodes.length !== 2) return
      const [source, target] = this.selectedNodes
      const edgeId = `node${this.nextNodeIndex++}`
      this.edges[edgeId] = <Edge>{ source, target, ...edge }
    },
    removeEdge() {
      for (const edgeId of this.selectedEdges) {
        delete this.edges[edgeId]
      }
    },
    isEdgeAddable() {
      return this.selectedNodes.length == 2
    },
  },
})
</script>
