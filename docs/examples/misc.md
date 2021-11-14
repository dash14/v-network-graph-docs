# Miscellaneous

## Get the content as SVG data

You can obtain the displayed content as SVG text data.  
In this example, the SVG data is downloaded.

<demo-tabs :demo-height="250" :use-data="true">
<template v-slot:demo>
  <DemoDownload />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/01/Download.vue{53-62}

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

  <<< @/.vitepress/components/09_misc/02/GridLayer.vue{33-47}

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


<script setup>
import DemoDownload from '../.vitepress/components/09_misc/01/Download.vue'
import DemoGridLayer from '../.vitepress/components/09_misc/02/GridLayer.vue'
import DemoDijkstra from '../.vitepress/components/09_misc/03/Dijkstra.vue'

</script>

