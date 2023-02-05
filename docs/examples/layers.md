# Layers

## Custom layer

You can add layers in the SVG generated by v-network-graph.

To add a layer, define the layer name and insertion position
in the `layers` attribute, and define a named slot with the
specified layer name in `<v-network-graph> ... </v-network-graph>`.

The following insertion positions can be specified.

<div class="reference-table">

| position     | description                                                    |
| ------------ | -------------------------------------------------------------- |
| "paths"      | above the paths                                                |
| "node-labels"| above the node labels                                          |
| "nodes"      | above the nodes                                                |
| "focusring"  | above the selection circles of the nodes                       |
| "edge-labels"| above the edge labels                                          |
| "edges"      | above the edges                                                |
| "base"       | under all objects                                              |
| -            | _(When you get SVG text, layers above this will be contained)_ |
| "grid"       | above the grid                                                 |
| "background" | under the grid                                                 |
| -            | _(The layer below this is not target to panning/zooming)_      |
| "root"       | the root of the svg element                                    |

</div>

The default slot and any slots not defined in the `layers` will be
included in the root.

### Map

This is an example of adding an image layer to the behind of a network graph.

<demo-tabs :use-data="true" :demo-height="400">
<template v-slot:demo>
  <DemoMap />
</template>
<template v-slot:source>

<<< @/.vitepress/components/07_layers/01/Map.vue{7-11,28,30-39}

</template>
<template v-slot:data>

<<< @/.vitepress/components/07_layers/01/data.ts

</template>
</demo-tabs>

### Node's badge

This is an example of adding an SVG layer to the foreground of the nodes layer.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoBadge />
</template>
<template v-slot:source>

<<< @/.vitepress/components/07_layers/02/Badge.vue{5-9,22,24-39}

</template>
<template v-slot:data>

<<< @/.vitepress/components/07_layers/02/data.ts

</template>
</demo-tabs>

## Change the order of built-in layers

The following is a list of the built-in layers of this library and the layers of
which the order can be changed.  
The higher layer is on the list, the more it appears in the foreground by default.

<div class="reference-table">

| layer name   | order changeable  |
| ------------ | ----------------- |
| "paths"      | YES               |
| "node-labels"| YES               |
| "nodes"      | YES               |
| "focusring"  | YES               |
| "edge-labels"| YES               |
| "edges"      | YES               |
| "grid"       | NO                |

</div>

To change the order, specify the layer names in `configs.view.builtInLayerOrder`
array in the order you want them in the front. It is not necessary to specify
all the built-in layer names. Layer relationships not specified are the same as
the default.  
For example, if you specify `["node-labels", "paths"]`, the `"node-labels"` layer
will be configured so that it is directly above the `"paths"` layer.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoChangeOrder />
</template>
<template v-slot:source>

<<< @/.vitepress/components/07_layers/03/ChangeOrder.vue{12}

</template>
<template v-slot:data>

<<< @/.vitepress/components/07_layers/03/data.ts

</template>
</demo-tabs>


<script setup>
import DemoMap from '../.vitepress/components/07_layers/01/Map.vue'
import DemoBadge from '../.vitepress/components/07_layers/02/Badge.vue'
import DemoChangeOrder from '../.vitepress/components/07_layers/03/ChangeOrder.vue'
</script>