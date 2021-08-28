# Operations on Graphs

This page shows some examples of user operations on network graphs.

## Select nodes

Set `configs.node.selectable` to true to make the node selectable by
clicking or touching.
If you specify a number instead of `true`, it will be taken as the
maximum number of selectable nodes.  
Specify 2-way binding for `selected-nodes` prop to get an array of
node IDs selected. It is also possible to control the selection state
on the network graph by setting a value to the same prop.

<demo-tabs :use-data="true" hint="To select multiple nodes, Shift+click or hold down the selected node and tap another node.">
<template v-slot:demo>
  <DemoSelectNodes />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/03_operation/01/SelectNodes.vue{29,46-51}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/03_operation/01/data.ts

</template>
</demo-tabs>

## Select edges

Set `configs.edge.selectable` to true to make the node selectable by
clicking or touching.
If you specify a number instead of `true`, it will be taken as the
maximum number of selectable nodes.  
Specify 2-way binding for `selected-edges` prop to get an array of
edge IDs selected. It is also possible to control the selection state
on the network graph by setting a value to the same prop.

<demo-tabs :use-data="true" hint="To select multiple edges, Shift+click or hold down the selected edge and tap another edge.">
<template v-slot:demo>
  <DemoSelectEdges />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/03_operation/02/SelectEdges.vue{29,46-51}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/03_operation/02/data.ts

</template>
</demo-tabs>


## Add/remove network elements

Adding/removing nodes and edges is automatically reflected by changing
the reactive objects specified in `nodes` prop and `edges` prop respectively.  
The newly added node will be placed in the center of the view area.  
Deleting a node with edges will automatically delete the associated edges as well.  
Multiple edges can be placed between the same two nodes.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoAddElements />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/03_operation/03/AddElements.vue{47-68}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/03_operation/03/data.ts

</template>
</demo-tabs>


## Summarize edges between the same nodes

If there are too many edges between nodes to be displayed, they are
automatically summarized into a single line and displayed.
The summarized edges will be displayed with the number of edges.
Note: This feature is still under development, so it is not yet
possible to select individual summarized edges.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoSummarizeEdges />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/03_operation/04/SummarizeEdges.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/03_operation/04/data.ts

</template>
</demo-tabs>

Whether or not to aggregate can be specified by a function that
returns a boolean or a boolean value, as specified in the
configuration `edge.summarize`.

<script setup>
import DemoSelectNodes from "../.vitepress/components/03_operation/01/SelectNodes.vue"
import DemoSelectEdges from "../.vitepress/components/03_operation/02/SelectEdges.vue"
import DemoAddElements from "../.vitepress/components/03_operation/03/AddElements.vue"
import DemoSummarizeEdges from "../.vitepress/components/03_operation/04/SummarizeEdges.vue"
</script>
