# Labels

## Node labels

For node labels, it is possible to show/hide them, specify the data to
be displayed as labels, and change the display position.

<demo-tabs :demo-height="250" :use-data="true">
<template v-slot:demo>
  <DemoNodeLabels />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_label/01/NodeLabels.vue{43-52}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_label/01/data.ts

</template>
</demo-tabs>

:::tip
In the above example, the key in the node object is specified as
`configs.node.text`. Instead of a key, you can also specify a
function that returns a string with the node object as an argument
(`(node) => string`).  If so, the return value of the executed
function will be displayed as a label.
:::

## Override node labels

It is possible to replace an element with an `override-node-label` slot.  
In the following example, two labels are displayed per node.

<demo-tabs :demo-height="250" :use-data="true">
<template v-slot:demo>
  <DemoNodeCustomLabels />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_label/02/NodeCustomLabels.vue{7-28}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_label/02/data.ts

</template>
</demo-tabs>

The props provided by the `override-node-label` slot are as follows:

<div class="reference-table">

| props            | type                                       | description                            |
| ---------------- | ------------------------------------------ | -------------------------------------- |
| nodeId           | string                                     | node Id                                |
| scale            | number                                     | scale factor linked to zoom            |
| text             | string                                     | label text                             |
| x                | number                                     | x position                             |
| y                | number                                     | y position                             |
| config           | NodeLabelStyle                             | style config for labels                |
| shape            | CircleShapeStyle /<br> RectangleShapeStyle | shape config of node                   |
| textAnchor       | "middle" / "start" / "end"                 | text-anchor for SVG &lt;text&gt;       |
| dominantBaseline | "central" / "text-top" / "hanging"         | dominant-baseline for SVG &lt;text&gt; |

See [here](https://github.com/dash14/v-network-graph/blob/main/src/common/configs.ts) for custom types

</div>

## Edge labels

For edge labels, use slots similar to custom labels for nodes.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoEdgeLabels />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_label/03/EdgeLabels.vue{8-10}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_label/03/data.ts

</template>
</demo-tabs>

The props provided by the `edge-label` slot are as follows:

<div class="reference-table">

| props    | type            | description                               |
| -------- | --------------- | ----------------------------------------- |
| edgeId   | string          | edge Id                                   |
| edge     | Edge            | user defined edge object                  |
| config   | EdgeLabelStyle  | style config for edge labels              |
| area     | {source: {above: 0, below: 0},<br> target: {above: 0, below: 0} } | coordinates of the area to display labels |
| hovered  | boolean         | whether hovered or not                    |
| selected | boolean         | whether selected or not                   |

</div>

See [here](https://github.com/dash14/v-network-graph/blob/main/src/common/configs.ts) for custom types

You can draw the elements as you want using the properties provided by
the slot, but you can use `<v-edge-label>` to automatically calculate
the display position and rotation.  
Supported attributes are listed below.

<div class="reference-table">

| props / attrs  | type                           | description                               |
| -------------- | ------------------------------ | ----------------------------------------- |
| area           | (same as `edge-label` slot)    | coordinates of the area to display labels |
| config         | EdgeLabelStyle                 | style config for edge labels              |
| text           | string                         | text to display                           |
| align          | "center" / "source" / "target" | horizontal direction to align text        |
| vertical-align | "center" / "above" / "below"   | vertical direction to align text          |
| (other)        | any                            | pass through to `<text>` element          |

</div>

:::info
Of the props provided in the `edge-label` slot, edgeId and edge are not
required for `<v-edge-label>`. Other props should always be passed on
to `<v-edge-label>` by using `v-bind` or by specifying them directly.
:::

## Multiple edge labels

In many cases, the labels of an edge not only indicate the edge itself,
but also the result of the interaction of the nodes connected to the edge.  
In the following example, we show three labels per edge. One displays the
ID of the edge, and two display the ever-changing data at both ends of the
edge.  
The data being displayed is a random number.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoMultipleEdgeLabels />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_label/04/MultipleEdgeLabels.vue{8-26}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_label/04/data.ts

</template>
</demo-tabs>

## Customize the edge label style

If you use `<v-edge-label>` component, the labels of edges can
be customized from the config like the node labels.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoEdgeLabelsStyle />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_label/05/EdgeLabelsStyle.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_label/05/data.ts

</template>
</demo-tabs>

<script setup>
import DemoNodeLabels from '../.vitepress/components/04_label/01/NodeLabels.vue'
import DemoNodeCustomLabels from '../.vitepress/components/04_label/02/NodeCustomLabels.vue'
import DemoEdgeLabels from '../.vitepress/components/04_label/03/EdgeLabels.vue'
import DemoMultipleEdgeLabels from '../.vitepress/components/04_label/04/MultipleEdgeLabels.vue'
import DemoEdgeLabelsStyle from '../.vitepress/components/04_label/05/EdgeLabelsStyle.vue'
</script>
