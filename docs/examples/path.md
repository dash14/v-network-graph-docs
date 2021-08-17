# Path

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

<<< @/.vitepress/components/06_path/01/Basic.vue{6,18-21}

</template>
<template v-slot:data>

<<< @/.vitepress/components/06_path/01/data.ts

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

<<< @/.vitepress/components/06_path/02/Color.vue{6-7,18-27,39-45}

</template>
<template v-slot:data>

<<< @/.vitepress/components/06_path/02/data.ts

</template>
</demo-tabs>

## Animation

Paths can also be animated in the same way as in Edge.


<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoAnimation />
</template>
<template v-slot:source>

<<< @/.vitepress/components/06_path/03/Animation.vue{37-39}

</template>
<template v-slot:data>

<<< @/.vitepress/components/06_path/03/data.ts

</template>
</demo-tabs>

<script setup>
import DemoBasic from '../.vitepress/components/06_path/01/Basic.vue'
import DemoColor from '../.vitepress/components/06_path/02/Color.vue'
import DemoAnimation from '../.vitepress/components/06_path/03/Animation.vue'
</script>

