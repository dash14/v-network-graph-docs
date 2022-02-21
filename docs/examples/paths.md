# Paths

A path is an object that passes over a series of edges.  
A path is represented as a list of edge IDs so that the path can
identify the edges it passes through, even when there are multiple
edges between the same nodes.

## Basic

A simple example is shown below.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoBasic />
</template>
<template v-slot:source>

<<< @/.vitepress/components/06_paths/01/Basic.vue{5-8,16}

</template>
<template v-slot:data>

<<< @/.vitepress/components/06_paths/01/data.ts

</template>
</demo-tabs>

::: tip
When there are multiple edges between the same pair of nodes and
each of them has a path through it, suggest changing the edge gaps
from the default.
:::

::: tip
By default, the path color is automatically selected from a several
colors, but the same color may be selected for some paths. It is
also possible to specify colors individually, see the following sample.
:::

## Coloring

The following is a sample of how to specify the color of each path,
based on the color values in the path data.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoColor />
</template>
<template v-slot:source>

<<< @/.vitepress/components/06_paths/02/Color.vue{5-14,26-32,41-42}

</template>
<template v-slot:data>

<<< @/.vitepress/components/06_paths/02/data.ts

</template>
</demo-tabs>

## Animation

Paths can also be animated in the same way as in Edge.


<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoAnimation />
</template>
<template v-slot:source>

<<< @/.vitepress/components/06_paths/03/Animation.vue{24-26}

</template>
<template v-slot:data>

<<< @/.vitepress/components/06_paths/03/data.ts

</template>
</demo-tabs>

## Select paths

Set `configs.path.selectable` to true to make the path selectable by
clicking or touching.
If you specify a number instead of `true`, it will be taken as the
maximum number of selectable paths.  
Specify 2-way binding for `selected-paths` prop to get an array of
path IDs selected. It is also possible to control the selection
state on the network graph by setting a value to the same prop.

:::info
Since the paths cover the edges, by default the paths do not handle
mouse/touch events. To make the path selectable by mouse/touch, it
is necessary to set the configuration `configs.path.clickable` to true.  
Also, to enable mouse hover response, set `configs.path.hoverable` to true.
:::

<demo-tabs :use-data="true" hint="To select multiple paths, Shift+click or hold down the selected path and tap another path.">
<template v-slot:demo>
  <DemoSelect />
</template>
<template v-slot:source>

<<< @/.vitepress/components/06_paths/04/Select.vue{23-25,32,79}

</template>
<template v-slot:data>

<<< @/.vitepress/components/06_paths/04/data.ts

</template>
</demo-tabs>



## Customize appearances

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoAppearances />
</template>
<template v-slot:source>

<<< @/.vitepress/components/06_paths/05/Appearances.vue

</template>
<template v-slot:data>

<<< @/.vitepress/components/06_paths/05/data.ts

</template>
</demo-tabs>

## Z-order

The z-index of paths can be specified to control the order of the
paths in the z-direction.  
Since there is no concept of z-index in SVG, this feature is
achieved by sorting the internal path objects. It is disabled by
default for performance reasons. If `configs.path.zOrder.enabled`
is set to `true`, this feature will be enabled.

In addition to specifying the z-index based on the properties of
the path itself, it is also possible to move to the topmost when
it is mouse hovered or selected.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoZOrder />
</template>
<template v-slot:source>

<<< @/.vitepress/components/06_paths/06/ZOrder.vue

</template>
<template v-slot:data>

<<< @/.vitepress/components/06_paths/06/data.ts

</template>
</demo-tabs>

## With curved edges

Paths can be drawn on curved edges as well.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoCurvedEdge />
</template>
<template v-slot:source>

<<< @/.vitepress/components/06_paths/07/CurvedEdge.vue{30}

</template>
<template v-slot:data>

<<< @/.vitepress/components/06_paths/07/data.ts

</template>
</demo-tabs>



<script setup>
import DemoBasic from '../.vitepress/components/06_paths/01/Basic.vue'
import DemoColor from '../.vitepress/components/06_paths/02/Color.vue'
import DemoAnimation from '../.vitepress/components/06_paths/03/Animation.vue'
import DemoSelect from '../.vitepress/components/06_paths/04/Select.vue'
import DemoAppearances from '../.vitepress/components/06_paths/05/Appearances.vue'
import DemoZOrder from '../.vitepress/components/06_paths/06/ZOrder.vue'
import DemoCurvedEdge from '../.vitepress/components/06_paths/07/CurvedEdge.vue'
</script>

