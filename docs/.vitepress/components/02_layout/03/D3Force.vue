<template>
  <div class="demo-control-panel">
    <label>Node count:</label>
    <el-input-number v-model="nodeCount" :min="3" :max="200" />
    <label>(&lt;= 300)</label>
  </div>

  <v-network-graph
    :zoom-level="0.5"
    :nodes="nodes"
    :edges="edges"
    :configs="configs"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from "vue"
import { Nodes, Edges } from "v-network-graph"
import { ForceLayout, ForceNodeDatum, ForceEdgeDatum } from "v-network-graph/force-layout"
// If you get an missing "v-network-graph/force-layout",
// please try importing "v-network-graph/lib/force-layout.es".

function buildNetwork(count: number, nodes: Nodes, edges: Edges) {
  const idNums = [...Array(count)].map((_, i) => i)

  // nodes
  const newNodes = Object.fromEntries(idNums.map(id => [`node${id}`, {}]))
  Object.keys(nodes).forEach(id => delete nodes[id])
  Object.assign(nodes, newNodes)

  // edges
  const makeEdgeEntry = (id1: number, id2: number) => {
    return [`edge${id1}-${id2}`, { source: `node${id1}`, target: `node${id2}` }]
  }
  const newEdges = Object.fromEntries([
    ...idNums
      .map(n => [n, (Math.floor(n / 5) * 5) % count])
      .map(([n, m]) => (n === m ? [n, (n + 5) % count] : [n, m]))
      .map(([n, m]) => makeEdgeEntry(n, m)),
  ])
  Object.keys(edges).forEach(id => delete edges[id])
  Object.assign(edges, newEdges)
}

export default defineComponent({
  setup() {
    const nodeCount = ref(20)
    const nodes = reactive({})
    const edges = reactive({})

    watchEffect(() => {
      buildNetwork(nodeCount.value, nodes, edges)
    })

    const configs = reactive({
      view: {
        layoutHandler: new ForceLayout({
          positionFixedByDrag: false,
          positionFixedByClickWithAltKey: true,
          // * The following are the default parameters for the simulation.
          // * You can customize it by uncommenting below.
          // createSimulation: (d3, nodes, edges) => {
          //   const forceLink = d3.forceLink<ForceNodeDatum, ForceEdgeDatum>(edges).id(d => d.id)
          //   return d3
          //     .forceSimulation(nodes)
          //     .force("edge", forceLink.distance(100))
          //     .force("charge", d3.forceManyBody())
          //     .force("collide", d3.forceCollide(50).strength(0.2))
          //     .force("center", d3.forceCenter().strength(0.05))
          //     .alphaMin(0.001)
          // }
        }),
      },
      node: {
        label: {
          visible: false,
        },
      },
    })

    return { nodeCount, nodes, edges, configs }
  },
})
</script>
