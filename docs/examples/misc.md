# Miscellaneous

## Get the content as SVG data

You can obtain the displayed content as SVG text data.  
In this example, the SVG data is downloaded.

<demo-tabs :demo-height="250" :use-data="true">
<template v-slot:demo>
  <DemoDownload />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/01/Download.vue{19-28}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/09_misc/01/data.ts

</template>
</demo-tabs>

## Grid

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoGridLayer />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/02/GridLayer.vue{9-23}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/09_misc/02/data.ts

</template>
</demo-tabs>

## Find the shortest path

v-network-graph is intended for drawing graphs, and does not
contain any code for graph algorithms.
On the other hand, it can be used with any graph algorithm.  
The following is an example of drawing the shortest path using
Dijkstra's algorithm.
The edge label indicates the cost of that edge.
v-network-graph's path drawing is directed by a list of edges,
so it is converted from a list of nodes to a list of edges at
the end.

<demo-tabs :demo-height="350" :use-data="true" hint="Displays the shortest path from the 'Source' to the mouse-over node.">
<template v-slot:demo>
  <DemoDijkstra />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/03/Dijkstra.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/09_misc/03/data.ts

</template>
</demo-tabs>

## Coordinates translation

Mutual coordinate translation between the DOM and SVG is
provided by the methods of the v-network-graph component.

As an example of DOM to SVG coordinate translation, the
process of adding a new node at the position clicked by
the user is shown below.

<demo-tabs :use-data="true" hint="Clicking on an empty area will add a new node to that location.">
<template v-slot:demo>
  <DemoCoordinates />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/04/Coordinates.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/09_misc/04/data.ts

</template>
</demo-tabs>

For an example of SVG to DOM coordinate translation, please see the
[Tooltip](https://dash14.github.io/v-network-graph/examples/event.html#tooltip)
example in Event Handling section.

<script setup>
import DemoDownload from '../.vitepress/components/09_misc/01/Download.vue'
import DemoGridLayer from '../.vitepress/components/09_misc/02/GridLayer.vue'
import DemoDijkstra from '../.vitepress/components/09_misc/03/Dijkstra.vue'
import DemoCoordinates from '../.vitepress/components/09_misc/04/Coordinates.vue'
</script>

