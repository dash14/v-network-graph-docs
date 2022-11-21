# Miscellaneous

## Get the content as SVG data

You can obtain the displayed content as SVG text data.  
In this example, the SVG data is downloaded.

<demo-tabs :demo-height="250" :use-data="true">
<template v-slot:demo>
  <DemoDownload />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/01/Download.vue{18-27}

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

  <<< @/.vitepress/components/09_misc/03/GridLayer.vue{9-23}

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


## Centering on Load

This example pans centered on the specified coordinates when loaded.  
By default, the content is centered according to the content on load.
If you want to pan to any position on load, disable this with the
`configs.view.autoPanAndZoomOnLoad` config.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoCenteredOnLoad />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/05/CenteredOnLoad.vue{11-21,25-27}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/09_misc/05/data.ts

</template>
</demo-tabs>


## Auto panning on resize

By default, it automatically pans to keep the display area
centered when it is resized. To disable this behavior, set
`configs.view.autoPanOnResize` to false.

<demo-tabs demo-height="100%" :use-data="true" hint="Can be resized by dragging the lower right corner">
<template v-slot:demo>
  <DemoResize />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/06/Resize.vue{8-10}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/09_misc/06/data.ts

</template>
</demo-tabs>


## Get and set the viewing area

The coordinates of the currently displayed area can be get and set.
When setting, the zoom and pan to display the specified area will be
automatically calculated.  
If the aspect ratio of the area to be set differs from that of the
`<v-network-graph>` element size on the screen, the position will
be adjusted so that the center position remains the same.

By using this function, the display position at a certain point in
time can be restored later.

<demo-tabs demo-height="423" :use-data="true" hint="Please try to pan and zoom to save or restore the area.">
<template v-slot:demo>
  <DemoViewBox />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/07/ViewBox.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/09_misc/07/data.ts

</template>
</demo-tabs>

## Specify function in view config

The library does not provide an interface to specify a function
for the value of `configs.view.*`.
However, it is possible to specify a function by using
[getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
of JavaScript.

In the following example, the configuration specifies a function
that changes whether panning/zooming is enabled depending on the
the state of shift/ctrl key presses.

<demo-tabs :demo-height="250" :use-data="true">
<template v-slot:demo>
  <DemoViewPropGetter />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/08/ViewPropGetter.vue{29-34}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/09_misc/08/data.ts

</template>
</demo-tabs>


## Node expand/collapse

For the implementation of node expand and collapse, the structure of node
relationships is a tree structure, which is a type of graph structure.
This means that the parent-child relationship needs to be included in the
data, and there are restrictions such as not circulating edges in the part
of tree structure.  
To keep the generality and simplicity of the library, please handle these
things on the application.

The following is an example of creating a partially tree-structured graph and
passing it to v-network-graph so that the parent node can collapse its child nodes.

<demo-tabs :demo-height="400" :use-data="true" hint="Please click on the node with the badge.">
<template v-slot:demo>
  <DemoNodeCollapse />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/09/NodeCollapse.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/09_misc/09/data.ts

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
  <DemoFindShortestPath />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/09_misc/10/FindShortestPath.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/09_misc/10/data.ts

</template>
</demo-tabs>

<script setup>
import DemoDownload from '../.vitepress/components/09_misc/01/Download.vue'
import DemoGridLayer from '../.vitepress/components/09_misc/03/GridLayer.vue'
import DemoCoordinates from '../.vitepress/components/09_misc/04/Coordinates.vue'
import DemoCenteredOnLoad from '../.vitepress/components/09_misc/05/CenteredOnLoad.vue'
import DemoResize from '../.vitepress/components/09_misc/06/Resize.vue'
import DemoViewBox from '../.vitepress/components/09_misc/07/ViewBox.vue'
import DemoViewPropGetter from '../.vitepress/components/09_misc/08/ViewPropGetter.vue'
import DemoNodeCollapse from '../.vitepress/components/09_misc/09/NodeCollapse.vue'
import DemoFindShortestPath from '../.vitepress/components/09_misc/10/FindShortestPath.vue'
</script>
