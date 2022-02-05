# Event Handling

You can capture events that occur in v-network-graph by
specifying the events and functions to be captured in
the `event-handlers` attribute.

For a list of events that can be captured,
see [here](https://dash14.github.io/v-network-graph/reference.html#events-with-event-handler).

## Capture all events

If you specify "*" as the event type, all available events will
be captured.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoAllEvents />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/08_event/01/AllEvents.vue{11-23,32}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/08_event/01/data.ts

</template>
</demo-tabs>

## Handle user clicking on a node

The following is an example of specifying a handler that catches
only the specified events.  
In this example, the color of the badge changes when the node is
clicked.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoBadge />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/08_event/02/Badge.vue{20-25,35}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/08_event/02/data.ts

</template>
</demo-tabs>

## Context menu

v-network-graph does not have the ability to show a context menu,
but it can capture the right-clicking event (`"contextmenu"` event)
on objects of the network graph.
From this event, a standard `Event` object is obtained.
You can combine your own components or other libraries to display
the menu.

<demo-tabs :use-data="true" hint="Right-click on a node, edge, or background to pop up a context menu.">
<template v-slot:demo>
  <DemoContextMenu />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/08_event/03/ContextMenu.vue{56-60}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/08_event/03/data.ts

</template>
</demo-tabs>

## Tooltip

By combining event handling and coordinate translation, it is possible
to represent a combination of DOM elements such as tooltip.

<demo-tabs :use-data="true" hint="Hover the mouse over a node to display a tooltip.">
<template v-slot:demo>
  <DemoNodeTooltip />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/08_event/04/NodeTooltip.vue{17-40}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/08_event/04/data.ts

</template>
</demo-tabs>

Even though there is no edge position stored in `Layout`,
we can still create tooltip for edges by using the node positions. 

<demo-tabs :use-data="true" hint="Hover the mouse over an edge to display a tooltip.">
<template v-slot:demo>
  <DemoEdgeTooltip />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/08_event/05/EdgeTooltip.vue{14-45}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/08_event/05/data.ts

</template>
</demo-tabs>


<script setup>
import DemoAllEvents from '../.vitepress/components/08_event/01/AllEvents.vue'
import DemoBadge from '../.vitepress/components/08_event/02/Badge.vue'
import DemoContextMenu from '../.vitepress/components/08_event/03/ContextMenu.vue'
import DemoNodeTooltip from '../.vitepress/components/08_event/04/NodeTooltip.vue'
import DemoEdgeTooltip from '../.vitepress/components/08_event/05/EdgeTooltip.vue'
</script>
