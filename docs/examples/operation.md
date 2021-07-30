# Operations on Graphs

This page shows some examples of user operations on network graphs.

## Select nodes

Set `configs.node.selectable` to true to make the node selectable by clicking or touching.
If you specify a number instead of `true`, it will be taken as the maximum number of selectable nodes.  
Specify 2-way binding for `selected-nodes` prop to get an array of node IDs selected. It is also possible to control the selection state on the network graph by setting a value to the same prop.

<demo-tabs hint="To select multiple nodes, Shift+click or hold down the selected node and tap another node.">
<template v-slot:demo>
  <DemoSelectNodes />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/operation/SelectNodes.vue{29,60-65}

</template>
</demo-tabs>

## Select edges

Set `configs.edge.selectable` to true to make the node selectable by clicking or touching.
If you specify a number instead of `true`, it will be taken as the maximum number of selectable nodes.  
Specify 2-way binding for `selected-edges` prop to get an array of edge IDs selected. It is also possible to control the selection state on the network graph by setting a value to the same prop.

<demo-tabs hint="To select multiple edges, Shift+click or hold down the selected edge and tap another edge.">
<template v-slot:demo>
  <DemoSelectEdges />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/operation/SelectEdges.vue{29,60-65}

</template>
</demo-tabs>

## Multiple selection

## Add a node

## Add an edge

## Summarize edges between the same nodes

<script setup>
import DemoSelectNodes from '../.vitepress/components/operation/SelectNodes.vue'
import DemoSelectEdges from '../.vitepress/components/operation/SelectEdges.vue'
</script>


