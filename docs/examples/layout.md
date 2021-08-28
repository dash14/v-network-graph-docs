# Layout / Positioning

## Scale the entire objects

By default, zooming only changes the relative position of the nodes,
and does not change the size of the object, such as the size of nodes,
the font size of labels, or the line width of links.  
If you set the `view.scalingObjects` config to `true`, the objects
will change as you zoom.

<demo-tabs :demo-height="250" :use-data="true">
<template v-slot:demo>
  <DemoScaleObjects />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/02_layout/01/ScaleObjects.vue{22-26}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/02_layout/01/data.ts

</template>
</demo-tabs>

## Snap nodes to the grid

You can change the node positioning strategy in the config.  
An example of modifying the `view.layoutHandler` config and snapping to
the grid is shown below.

<demo-tabs
  :demo-height="250"
  :use-data="true"
  message="When you drag a node, it will snap to invisible grids of the specified width."
>
<template v-slot:demo>
  <DemoSnapToGrid />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/02_layout/02/SnapToGrid.vue{17-21}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/02_layout/02/data.ts

</template>
</demo-tabs>

## Position nodes with d3-force

This component also provide a layout strategy with simulating
physical forces on particles with [d3-force](https://github.com/d3/d3-force).

In this example, clicking on a node with Alt key pressed will fix
the position of the node. Clicking the node again with the Alt key
will return it to the position of the d3-force calculation result.

<demo-tabs>
<template v-slot:demo>
  <DemoD3Force />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/02_layout/03/D3Force.vue{19,57-72}

</template>
</demo-tabs>

Currently, the `d3-force` package is bundled, so you do not need
to install it in your application.

<script setup>
import DemoScaleObjects from '../.vitepress/components/02_layout/01/ScaleObjects.vue'
import DemoSnapToGrid from '../.vitepress/components/02_layout/02/SnapToGrid.vue'
import DemoD3Force from '../.vitepress/components/02_layout/03/D3Force.vue'
</script>

