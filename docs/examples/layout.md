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

  <<< @/.vitepress/components/02_layout/01/ScaleObjects.vue{9}

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
  :demo-height="300"
  :use-data="true"
  message="When you drag a node, it will snap to invisible grids of the specified width."
>
<template v-slot:demo>
  <DemoSnapToGrid />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/02_layout/02/SnapToGrid.vue{7}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/02_layout/02/data.ts

</template>
</demo-tabs>

## Position nodes with d3-force

This component also provide a layout strategy with simulating
physical forces on particles with [d3-force](https://github.com/d3/d3-force).

d3-force is an optional dependency and should be added to your project manually.

```bash
npm install d3-force
```

In this example, clicking on a node with Alt key pressed will fix
the position of the node. Clicking the node again with the Alt key
will return it to the position of the d3-force calculation result.

<demo-tabs>
<template v-slot:demo>
  <DemoD3Force />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/02_layout/03/D3Force.vue{4-8,24-39}

</template>
</demo-tabs>

Currently, the `d3-force` package is bundled, so you do not need
to install it in your application.


## Fix the position of a specific node in the force layout

If you set `fixed: true` to the node position object in `layouts`,
the node will be fixed without the effect of force layout.  
Unfortunately, the `fixed` field is only referenced at
initialization and is not reflected when changed dynamically.
This behavior will be revised in the future.

<demo-tabs>
<template v-slot:demo>
  <DemoD3ForceFixed />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/02_layout/04/D3ForceFixed.vue{15-24}

</template>
</demo-tabs>

## Enable and disable force layout

Force layout is good for demo but sometimes annoying when we
want to observe a single node. So we can enable it first then disable it later.

<demo-tabs>
<template v-slot:demo>
  <DemoLayoutSwitching />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/02_layout/05/LayoutSwitching.vue{21-30}

</template>
</demo-tabs>


## Customize d3-force parameters: advance the specified tick first

This example shows how to customize the d3-force parameter and how to perform
the coordinate calculation by d3-force for the specified ticks.  
In the previous d3-force examples, the nodes move after being displayed,
but in this example, the nodes stop and are displayed after the coordinates
are calculated.

Also, in this example, d3-force is set to not recalculate even if nodes are
dragged or network changes occur. This behavior can be customized.
Please check the example source code for details.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoD3Customize />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/02_layout/06/D3Customize.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/02_layout/06/data.ts

</template>
</demo-tabs>



## Automatic layout

Since node position is an input to `<v-network-graph>`, layout such
as node arrangement/alignment is out of scope of this library.  
Node layout can be achieved by writing the x,y coordinates of each
node given in the `layouts` property of `<v-network-graph>` according
to the layout desired to be realized in the application.  
The following is an example of using an external library (dagre:
Directed graph layout for JavaScript) to automatically layout the
tree structure of a directed graph.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoLayout />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/02_layout/07/Layout.vue{38-99}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/02_layout/07/data.ts

</template>
</demo-tabs>

:::info
dagre: Directed graph layout for JavaScript  
https://github.com/dagrejs/dagre/wiki  
*It can be installed with the following command:

```bash
npm install dagre
```
:::

<script setup>
import DemoScaleObjects from '../.vitepress/components/02_layout/01/ScaleObjects.vue'
import DemoSnapToGrid from '../.vitepress/components/02_layout/02/SnapToGrid.vue'
import DemoD3Force from '../.vitepress/components/02_layout/03/D3Force.vue'
import DemoD3ForceFixed from '../.vitepress/components/02_layout/04/D3ForceFixed.vue'
import DemoLayoutSwitching from '../.vitepress/components/02_layout/05/LayoutSwitching.vue'
import DemoD3Customize from '../.vitepress/components/02_layout/06/D3Customize.vue'
import DemoLayout from '../.vitepress/components/02_layout/07/Layout.vue'
</script>
