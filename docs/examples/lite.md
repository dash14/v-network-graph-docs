# Lite Component

`v-network-graph-lite` (`VNetworkGraphLite`) is a lighter version of
`v-network-graph` for networks with thousands of nodes and edges.
It draws each node and edge as a single SVG element, so dragging, zooming
and force layouts stay smooth with that many objects.

`app.use(VNetworkGraph)` registers it along with `v-network-graph`.
It takes the same props except `paths` and `selected-paths`, and you can
define its configs with `vNG.defineLiteConfigs()`.

## Differences from v-network-graph

- Supported: node shapes and their states (hover, selected), node labels,
  dragging, selection and hover of nodes and edges, edge markers and margins,
  multiple edges between the same nodes, self-loop edges, z-order, custom
  layers, the grid, box selection, the view methods and the SVG export.
- Not supported: paths, curved edges, summarized edges, edge labels, focus
  rings, label backgrounds, the slots `override-node`, `override-node-label`,
  `edge-overlay`, `edge-label` and `edges-label`, and `transitionWhile()`.

If you pass one of the unsupported slots, the component ignores it and logs
a warning to the console.

## Draw a large network

The example below lays out 1000 nodes and about 1700 edges with a force
layout. You can change the number of nodes up to 2000.

<demo-tabs :demo-height="500">
<template v-slot:demo>
  <DemoLargeNetwork />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/10_lite/01/LargeNetwork.vue{21-55,90-97}

</template>
</demo-tabs>

While a force layout runs, the component draws the nodes first and updates
the `layouts` prop up to `view.layoutsUpdateInterval` milliseconds later
(300 by default). To get the positions as they are drawn, call `getLayouts()`.

<script setup>
import DemoLargeNetwork from '../.vitepress/components/10_lite/01/LargeNetwork.vue'
</script>
