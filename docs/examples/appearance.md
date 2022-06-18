# Appearance Customization

## Specifying style configurations by values

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoConfigValue />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/01/ConfigValue.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/05_appearance/01/data.ts

</template>
</demo-tabs>

## Change the appearance of each node and edge

In Node and Edge configuration, instead of concrete values,
you can specify functions that return a configuration value
with each node or edge as an argument.
In addition, by explicitly specifying the Node or Edge type in
UserConfigs, you can specify the argument type of the function.

<demo-tabs :demo-height="250">
<template v-slot:demo>
  <DemoEachObject />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/02/EachObject.vue{52-78}

</template>
</demo-tabs>

Adding or removing nodes and links with customized appearance can also
be reflected by changing the data of reactive data.


<demo-tabs :use-data="true" :demo-height="350">
<template v-slot:demo>
  <DemoEachObject2 />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/03/EachObject2.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/05_appearance/03/data.ts

</template>
</demo-tabs>


## Custom Node

In case you want to change not only the shape of the node, but
also its elements and behavior, it is now possible to replace
the components of the node.

The following is an example of replacing the default node
component with a combination of a circle and an icon.  
Arranging the SVG elements in the `override-node` slot will
replace the default nodes with them. In this slot, the (0, 0)
position is the center of the node.

Note that if you want to replace the label of a node, you can
do by using the `override-node-label` slot.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoCustomNode />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/04/CustomNode.vue{29-53}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/05_appearance/04/data.ts

</template>
</demo-tabs>

An example of specifying an image instead of an icon is shown below.  
The images of the faces ware created https://generated.photos/.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoCustomNodeWithImage />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/05/CustomNodeWithImage.vue{29-67}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/05_appearance/05/data.ts

</template>
</demo-tabs>

## Z-order of Nodes

The z-index of nodes can be specified to control the order of the
nodes in the z-direction.  
Since there is no concept of z-index in SVG, this feature is
achieved by sorting the internal node objects. It is disabled by
default for performance reasons. If `configs.node.zOrder.enabled`
is set to `true`, this feature will be enabled.

In addition to specifying the z-index based on the properties of
the node itself, it is also possible to move to the topmost when
it is mouse hovered or selected.

<demo-tabs :use-data="true" :demo-height="250">
<template v-slot:demo>
  <DemoZOrderOfNodes />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/06/ZOrderOfNodes.vue{25-29}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/05_appearance/06/data.ts

</template>
</demo-tabs>

## Z-order of Edges

It is also possible to control the z-order of the edges as well
as the nodes.

<demo-tabs :use-data="true" :demo-height="250">
<template v-slot:demo>
  <DemoZOrderOfEdges />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/07/ZOrderOfEdges.vue{23-28}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/05_appearance/07/data.ts

</template>
</demo-tabs>

## Arrow on edges

Markers such as arrow head can be specified for edges.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoArrow />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/08/Arrow.vue{42-59}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/05_appearance/08/data.ts

</template>
</demo-tabs>

The following configuration items can be specified for
`configs.edge.marker.source` and `configs.edge.marker.target`.

<div class="reference-table">

<table>
<thead>
  <tr>
    <th>config</th>
    <th>description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>type</td>
    <td>
      Type of marker. The supported values are as follows:
      <table>
        <tr>
          <td>none</td>
          <td><img src="/examples/arrows/none.svg"></td>
        </tr>
        <tr>
          <td>arrow</td>
          <td><img src="/examples/arrows/arrow.svg"></td>
        </tr>
        <tr>
          <td>angle</td>
          <td><img src="/examples/arrows/angle.svg"></td>
        </tr>
        <tr>
          <td>circle</td>
          <td><img src="/examples/arrows/circle.svg"></td>
        </tr>
        <tr>
          <td>custom</td>
          <td>Please see <code>customId</code></td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>width</td>
    <td>Horizontal length of the marker when the edge is placed horizontally.</td>
  </tr>
  <tr>
    <td>height</td>
    <td>Vertical length of the marker when the edge is placed horizontally.</td>
  </tr>
  <tr>
    <td>margin</td>
    <td>
      Distance between the marker and the end of the edge.<br />
      A negative value can also be specified.
    </td>
  </tr>
  <tr>
    <td>color</td>
    <td>
      Color of the marker. If <code>null</code> specified, the marker will be the
      same color as the edge stroke.<br />
      In this way, if an edge is selected or mouse hovered over, and the color of
      the edge changes, the marker will automatically change along with the color
      of the edge.
    </td>
  </tr>
  <tr>
    <td>units</td>
    <td>
      This config is reflected in the
      <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/markerUnits" target="_blank" rel="noopener noreferrer"><code>markerUnits</code></a>
      attribute of the SVG &lt;marker&gt; element.<br />
      If <code>"strokeWidth"</code> is specified, the width, height, and margin
      configs of the marker will be applied in units of the current edge's
      stroke-width value as 1. Therefore, these sizes will also change depending
      on the thickness of the edge.<br />
      If <code>"userSpaceOnUse"</code> is specified, the width, height, and
      margin configs of the marker will be the same as the ordinary coordinate
      units. It will not be affected by the thickness of the current edge.
    </td>
  </tr>
  <tr>
    <td>customId</td>
    <td>
      When <code>"custom"</code> is specified for <code>type</code>, specify the
      ID of the marker you created in this config.
    </td>
  </tr>
</tbody>
</table>

</div>

## Custom markers on edges

In addition to the preset marker types, you can also specify your own markers.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoCustomMarker />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/09/CustomMarker.vue{11-30,43-57}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/05_appearance/09/data.ts

</template>
</demo-tabs>

## Place any object at the edge

The markers shown above can only be displayed at the terminate point
of an edge.  
To place any object except at the terminate point of an edge, it can
be achieved by applying `slot` for displaying labels.  
In the following example, a triangle toward the target is displayed
at the center of the edge.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoPlaceObjectAtEdge />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/10/PlaceObjectAtEdge.vue{60-68}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/05_appearance/10/data.ts

</template>
</demo-tabs>

:::info
This example uses the edge label feature, but in the future a dedicated
feature may be provided for this case.
:::

## Keep order of edges

In some cases, when there are multiple edges between two nodes,
it is necessary to arrange the order of the edges from top to
bottom, no matter which node is placed on the left side.  
It is possible to handle such a case by specifying the
`edge.keepOrder` config.  
The following values can be specified for this config.

<div class="reference-table">

<table>
<thead>
  <tr>
    <th>value</th>
    <th>description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>"clock"</td>
    <td>
      Keep the forward/backward when viewed as a clock.
    </td>
  </tr>
  <tr>
    <td>"vertical"</td>
    <td>
      Keep the vertical alignment.<br/>
      Even if the left and right sides of a node are swapped,
      the edge on top remains on top.
    </td>
  </tr>
  <tr>
    <td>"horizontal"</td>
    <td>
      Keep the horizontal alignment.<br/>
      Even if the top and bottom of the node are swapped,
      the edge on the left remains on the left.
    </td>
  </tr>
</tbody>
</table>

</div>

Note that the basic display order is the order in which the
edges appear in the given edges.

<demo-tabs :use-data="true" hint="Please try dragging the nodes to swap their positions and observe the behavior.">
<template v-slot:demo>
  <DemoEdgesKeepOrder />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/05_appearance/11/EdgesKeepOrder.vue{25}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/05_appearance/11/data.ts

</template>
</demo-tabs>

## Style examples

1.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoStyle1 />
</template>
<template v-slot:source>

<<< @/.vitepress/components/05_appearance/s01/Style1.vue

</template>
<template v-slot:data>

<<< @/.vitepress/components/05_appearance/s01/data.ts

</template>
</demo-tabs>

2.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoStyle2 />
</template>
<template v-slot:source>

<<< @/.vitepress/components/05_appearance/s02/Style2.vue

</template>
<template v-slot:data>

<<< @/.vitepress/components/05_appearance/s02/data.ts

</template>
</demo-tabs>

3.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoStyle3 />
</template>
<template v-slot:source>

<<< @/.vitepress/components/05_appearance/s03/Style3.vue

</template>
<template v-slot:data>

<<< @/.vitepress/components/05_appearance/s03/data.ts

</template>
</demo-tabs>

4.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoStyle4 />
</template>
<template v-slot:source>

<<< @/.vitepress/components/05_appearance/s04/Style4.vue

</template>
<template v-slot:data>

<<< @/.vitepress/components/05_appearance/s04/data.ts

</template>
</demo-tabs>

5.

<demo-tabs :use-data="true" hint="Click on a node to toggle its state. When both end nodes are active, the edge animation will move.">
<template v-slot:demo>
  <DemoStyle5 />
</template>
<template v-slot:source>

<<< @/.vitepress/components/05_appearance/s05/Style5.vue

</template>
<template v-slot:data>

<<< @/.vitepress/components/05_appearance/s05/data.ts

</template>
</demo-tabs>

6.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoStyle6 />
</template>
<template v-slot:source>

<<< @/.vitepress/components/05_appearance/s06/Style6.vue

</template>
<template v-slot:data>

<<< @/.vitepress/components/05_appearance/s06/data.ts

</template>
</demo-tabs>

<script setup>
import DemoConfigValue from '../.vitepress/components/05_appearance/01/ConfigValue.vue'
import DemoEachObject from '../.vitepress/components/05_appearance/02/EachObject.vue'
import DemoEachObject2 from '../.vitepress/components/05_appearance/03/EachObject2.vue'
import DemoCustomNode from '../.vitepress/components/05_appearance/04/CustomNode.vue'
import DemoCustomNodeWithImage from '../.vitepress/components/05_appearance/05/CustomNodeWithImage.vue'
import DemoZOrderOfNodes from '../.vitepress/components/05_appearance/06/ZOrderOfNodes.vue'
import DemoZOrderOfEdges from '../.vitepress/components/05_appearance/07/ZOrderOfEdges.vue'
import DemoArrow from '../.vitepress/components/05_appearance/08/Arrow.vue'
import DemoCustomMarker from '../.vitepress/components/05_appearance/09/CustomMarker.vue'
import DemoPlaceObjectAtEdge from '../.vitepress/components/05_appearance/10/PlaceObjectAtEdge.vue'
import DemoEdgesKeepOrder from '../.vitepress/components/05_appearance/11/EdgesKeepOrder.vue'

import DemoStyle1 from '../.vitepress/components/05_appearance/s01/Style1.vue'
import DemoStyle2 from '../.vitepress/components/05_appearance/s02/Style2.vue'
import DemoStyle3 from '../.vitepress/components/05_appearance/s03/Style3.vue'
import DemoStyle4 from '../.vitepress/components/05_appearance/s04/Style4.vue'
import DemoStyle5 from '../.vitepress/components/05_appearance/s05/Style5.vue'
import DemoStyle6 from '../.vitepress/components/05_appearance/s06/Style6.vue'
</script>
