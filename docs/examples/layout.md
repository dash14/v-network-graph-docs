# Layout / Positioning

## Scale the entire objects

By default, zooming only changes the relative position of the nodes, and does not change the size of the object, such as the size of nodes, the font size of labels, or the line width of links.  
If you set the `view.scalingObjects` config to `true`, the objects will change as you zoom.

<demo-tabs>
<template v-slot:demo>
  <DemoScaleObjects />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/layout/ScaleObjects.vue{41-43}

</template>
</demo-tabs>

## Snap nodes to the grid

You can change the node positioning strategy in the config.  
An example of modifying the `view.layoutHandler` config and snapping to the grid is shown below.

<demo-tabs message="When you drag a node, it will snap to invisible grids of the specified width.">
<template v-slot:demo>
  <DemoSnapToGrid />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/layout/SnapToGrid.vue{36-38}

</template>
</demo-tabs>

## Position nodes with d3-force

This component also provide a layout strategy with simulating physical forces on particles with [d3-force](https://github.com/d3/d3-force).

<demo-tabs :demo-height="450">
<template v-slot:demo>
  <DemoD3Force />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/layout/D3Force.vue{65-78}

</template>
</demo-tabs>

To use this class, install the `d3-force` package with the following command.
(Also install `@types/d3-force` if necessary.)


```bash
$ npm install d3-force
```

<script setup>
import DemoScaleObjects from '../.vitepress/components/layout/ScaleObjects.vue'
import DemoSnapToGrid from '../.vitepress/components/layout/SnapToGrid.vue'
import DemoD3Force from '../.vitepress/components/layout/D3Force.vue'
</script>

