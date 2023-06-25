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


## Pan and zoom when initial display

The behavior of panning and zooming in the initial layout can be changed with `configs.view.autoPanAndZoomOnLoad`.  
The available options are as follows:

<div class="reference-table">

|value|description|
|-----|-----------|
|`"center-content"`|**(default)**<br>Pan the specified network graph so that its center is at the center of the display area|
|`"fit-content"`|Adjust the pan and zoom so that the specified network graph fits into the display area|
|`"center-zero"`|Pan coordinates (0, 0) to the center of the display area|
|`false`|It does not automatically pan or zoom, so the upper left corner of the display area is at coordinates (0, 0)|

</div>

The `configs.view.autoPanAndZoomOnLoad` config takes effect on load,
so if you change the select box, press the "Recreate" button to reconstruct
the component.

<demo-tabs :demo-height="250">
<template v-slot:demo>
  <InitialDisplay />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/01_basic/InitialDisplay.vue

</template>
</demo-tabs>


## Asynchronous processing before initial display

Note that when performing asynchronous processing such as dynamic loading
of network information, pan/zoom for initial display is not applied to
the data after the asynchronous processing is complete.  
The `configs.view.onBeforeInitialDisplay` config specifies the functions
to be called before the initial display, which can be asynchronous
functions or functions returning a Promise, to delay the initial display
until their completion.

<demo-tabs :demo-height="250" hint="The asynchronous processing is performed for 1 seconds when loading">
<template v-slot:demo>
  <InitialDisplayAsync />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/01_basic/InitialDisplayAsync.vue{50-53}

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
import InitialDisplay from '../.vitepress/components/01_basic/InitialDisplay.vue'
import InitialDisplayAsync from '../.vitepress/components/01_basic/InitialDisplayAsync.vue'
import DisablePanZoom from '../.vitepress/components/01_basic/DisablePanZoom.vue'
</script>

