# Basic Usage

## Minimal example

With the default settings of just specifying node and edge data,
you can pan, zoom in/out with the mouse wheel, and drag nodes.
It also supports multi-touch, with the ability to move multiple
nodes separately at the same time, and pinch to zoom.

<demo-tabs :demo-height="250">
<template v-slot:demo>
  <BasicMinimal />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/01_basic/Minimal.vue

</template>
</demo-tabs>

## Node positions

The positional coordinates of each node can be specified.

<demo-tabs :demo-height="250">
<template v-slot:demo>
  <SetLayouts />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/01_basic/SetLayouts.vue{13-20,27}

</template>
</demo-tabs>

By specifying the `layouts` property as a two-way binding (`v-model:layouts`),
you can get the position changes by dragging nodes reactively.

<demo-tabs message="When you drag a node, the new position will be reflected in the layouts prop.">
<template v-slot:demo>
  <SetLayoutsReactive />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/01_basic/SetLayoutsReactive.vue{15-22,30}

</template>
</demo-tabs>

## Pan and zoom

Using the methods provided by `v-network-graph`, it is possible to pan
to the center and perform a zoom that fits the content.
The current zoom level can be retrieved via two-way binding for
`zoom-level` prop.

<demo-tabs :demo-height="250">
<template v-slot:demo>
  <PanZoom />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/01_basic/PanZoom.vue

</template>
</demo-tabs>


## Disable mouse operations

Panning, zooming in/out with the mouse wheel, and dragging nodes can
each be enabled/disabled.

<demo-tabs :demo-height="250">
<template v-slot:demo>
  <DisablePanZoom />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/01_basic/DisablePanZoom.vue{28-36}

</template>
</demo-tabs>


<script setup>
import BasicMinimal from '../.vitepress/components/01_basic/Minimal.vue'
import SetLayouts from '../.vitepress/components/01_basic/SetLayouts.vue'
import SetLayoutsReactive from '../.vitepress/components/01_basic/SetLayoutsReactive.vue'
import PanZoom from '../.vitepress/components/01_basic/PanZoom.vue'
import DisablePanZoom from '../.vitepress/components/01_basic/DisablePanZoom.vue'
</script>

