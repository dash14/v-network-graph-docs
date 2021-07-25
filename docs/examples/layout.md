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


## Position nodes with d3-force



<script setup>
import DemoScaleObjects from '../.vitepress/components/layout/ScaleObjects.vue'
</script>

