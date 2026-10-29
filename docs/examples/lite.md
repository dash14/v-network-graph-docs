# Lite Component

`v-network-graph-lite` (`VNetworkGraphLite`) is a lighter version of
`v-network-graph` for networks with thousands of nodes and edges.
It draws each node and edge as a single SVG element, so that dragging,
zooming and a force layout run smoothly even for a large network.  
It is registered together with `v-network-graph` by `app.use(VNetworkGraph)`.
It takes the same props as `v-network-graph` except `paths` and
`selected-paths`, and its configs can be defined with `vNG.defineLiteConfigs()`.

## Supported features

It supports a subset of the features of `v-network-graph`.

- Supported: node shapes and their states (hover, selected), node labels,
  dragging, selection and hover of nodes and edges, edge markers and margins,
  multiple edges between the same nodes, self-loop edges, z-order, custom
  layers, the grid, box selection, the view methods and the SVG export.
- Not supported: paths, curved edges, summarized edges, edge labels, focus
  rings, label backgrounds, the slots `override-node`, `override-node-label`,
  `edge-overlay`, `edge-label` and `edges-label`, and `transitionWhile()`.

Those slots are left out, with a warning in the console.

## Draw a large network

<demo-tabs :demo-height="500">
<template v-slot:demo>
  <DemoLargeNetwork />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/10_lite/01/LargeNetwork.vue{21-55,90-97}

</template>
</demo-tabs>

While a force layout runs, the `layouts` prop is updated at most
`view.layoutsUpdateInterval` milliseconds (300 by default) after the nodes
are drawn. To get the positions as they are drawn, call the `getLayouts()`
method.

<script setup>
import DemoLargeNetwork from '../.vitepress/components/10_lite/01/LargeNetwork.vue'
</script>
