<script setup lang="ts">
import * as vNG from "v-network-graph"
import {
  ForceLayout,
  ForceNodeDatum,
  ForceEdgeDatum,
} from "v-network-graph/lib/force-layout"
import { reactive, ref, watch } from "vue"

const nodeCount = ref(1000)
const nodes = reactive<vNG.Nodes>({})
const edges = reactive<vNG.Edges>({})

// initialize network
buildNetwork(nodeCount.value, nodes, edges)

watch(nodeCount, () => {
  buildNetwork(nodeCount.value, nodes, edges)
})

const configs = reactive(
  vNG.defineLiteConfigs({
    view: {
      layoutHandler: new ForceLayout({
        positionFixedByDrag: false,
        createSimulation: (d3, nodes, edges) => {
          const forceLink = d3
            .forceLink<ForceNodeDatum, ForceEdgeDatum>(edges)
            .id(d => d.id)
          return d3
            .forceSimulation(nodes)
            .force("edge", forceLink.distance(20).strength(0.5))
            .force("charge", d3.forceManyBody().strength(-40))
            .force("center", d3.forceCenter().strength(0.05))
            .alphaMin(0.001)
        },
      }),
    },
    node: {
      normal: {
        radius: 4,
        color: "#4466cc",
      },
      hover: {
        radius: 6,
      },
      label: {
        visible: false,
      },
    },
    edge: {
      normal: {
        width: 1,
        color: "#99999999",
      },
    },
  })
)

// A tree, with each node also linked to the next of its siblings
function buildNetwork(count: number, nodes: vNG.Nodes, edges: vNG.Edges) {
  const idNums = [...Array(count)].map((_, i) => i)

  // nodes
  const newNodes = Object.fromEntries(idNums.map(id => [`node${id}`, {}]))
  Object.keys(nodes).forEach(id => delete nodes[id])
  Object.assign(nodes, newNodes)

  // edges
  const parentOf = (n: number) => Math.floor((n - 1) / 3)
  const makeEdgeEntry = (id1: number, id2: number) => {
    return [`edge${id1}-${id2}`, { source: `node${id1}`, target: `node${id2}` }]
  }
  const newEdges = Object.fromEntries([
    ...idNums.slice(1).map(n => makeEdgeEntry(parentOf(n), n)),
    ...idNums
      .slice(1, -1)
      .filter(n => parentOf(n) === parentOf(n + 1))
      .map(n => makeEdgeEntry(n, n + 1)),
  ])
  Object.keys(edges).forEach(id => delete edges[id])
  Object.assign(edges, newEdges)
}
</script>

<template>
  <div class="demo-control-panel">
    <label>Node count:</label>
    <el-input-number v-model="nodeCount" :min="100" :max="3000" :step="100" />
    <label>(&lt;= 3000)</label>
  </div>

  <v-network-graph-lite
    :zoom-level="0.2"
    :nodes="nodes"
    :edges="edges"
    :configs="configs"
  />
</template>
