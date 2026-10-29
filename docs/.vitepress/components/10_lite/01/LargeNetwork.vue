<script setup lang="ts">
import * as vNG from "v-network-graph"
import {
  ForceLayout,
  ForceNodeDatum,
  ForceEdgeDatum,
} from "v-network-graph/lib/force-layout"
import { reactive, ref, shallowRef, watch } from "vue"

const nodeCount = ref(1000)
const network = shallowRef(buildNetwork(nodeCount.value))

// A new network for a new count, leaving the graph being replaced as it is
watch(nodeCount, count => {
  if (count) network.value = buildNetwork(count)
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
            .force("edge", forceLink.distance(15).strength(0.5))
            .force("charge", d3.forceManyBody().strength(-20))
            .force("center", d3.forceCenter().strength(0.05))
            .alphaMin(0.001)
        },
      }),
    },
    node: {
      normal: {
        radius: 2,
        color: "#4466cc",
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
function buildNetwork(count: number) {
  const idNums = [...Array(count)].map((_, i) => i)

  // nodes
  const nodes: vNG.Nodes = Object.fromEntries(idNums.map(id => [`node${id}`, {}]))

  // edges
  const parentOf = (n: number) => Math.floor((n - 1) / 3)
  const makeEdgeEntry = (id1: number, id2: number) => {
    return [`edge${id1}-${id2}`, { source: `node${id1}`, target: `node${id2}` }]
  }
  const edges: vNG.Edges = Object.fromEntries([
    ...idNums.slice(1).map(n => makeEdgeEntry(parentOf(n), n)),
    ...idNums
      .slice(1, -1)
      .filter(n => parentOf(n) === parentOf(n + 1))
      .map(n => makeEdgeEntry(n, n + 1)),
  ])
  return { count, nodes, edges }
}
</script>

<template>
  <div class="demo-control-panel">
    <label>Node count:</label>
    <el-input-number v-model="nodeCount" :min="100" :max="2000" :step="100" />
    <label>(&lt;= 2000)</label>
  </div>

  <!-- Mounted again for a new network, so that the layout starts over -->
  <v-network-graph-lite
    :key="network.count"
    :zoom-level="0.2"
    :nodes="network.nodes"
    :edges="network.edges"
    :configs="configs"
  />
</template>
