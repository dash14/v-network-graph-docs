# Event Handling

You can capture events that occur in v-network-graph by
specifying the events and functions to be captured in
the `event-handlers` attribute.

For a list of events that can be captured,
see [here](../reference/events.md#events-with-event-handlers).

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

:::tip
The handler for mouse events such as click are also passed a raw event object.
By using this event object, it is possible to check if a modifier key
(Ctrl, Alt, etc.) is pressed or not.

```ts
import { EventHandlers } from "v-network-graph"
const eventHandlers: EventHandlers = {
  "node:click": ({ node, event }) => {
    if (event.ctrlKey) {
      // ...
    }
  }
}
```

:::

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

  <<< @/.vitepress/components/08_event/04/NodeTooltip.vue{15-40}

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

  <<< @/.vitepress/components/08_event/05/EdgeTooltip.vue{14-47}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/08_event/05/data.ts

</template>
</demo-tabs>


## Set raw event handlers to the node elements.

This section shows how to set raw event handlers to a node when
the event mechanism with `event-handlers` is insufficient.

The handling process of mousedown/up events in `event-handlers`
is implemented with consideration to avoid situations where only
one of `node:pointerdown` and `node:pointerup` can occur.
This means that `node:pointerup` occurs only for the node where
`node:pointerdown` occurs, and conversely, `node:pointerup` occurs
for a node where `node:pointerdown` occurs even if the mouse button
is released on another element in the browser.  
This behavior may not be desirable, for example, if you want to
be able to drag a node to specify a start point to an end point.

In such cases, it is possible to expose Node's visual elements
in the following way, so please specify directly the own handler
you want to set.

<demo-tabs :use-data="true" message="Disabled dragging of background and nodes so that mouse down/up events can be tested inside/outside the node.">
<template v-slot:demo>
  <DemoRawEvents />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/08_event/06/RawEvents.vue{3,32-42}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/08_event/06/data.ts

</template>
</demo-tabs>



<script setup>
import DemoAllEvents from '../.vitepress/components/08_event/01/AllEvents.vue'
import DemoBadge from '../.vitepress/components/08_event/02/Badge.vue'
import DemoContextMenu from '../.vitepress/components/08_event/03/ContextMenu.vue'
import DemoNodeTooltip from '../.vitepress/components/08_event/04/NodeTooltip.vue'
import DemoEdgeTooltip from '../.vitepress/components/08_event/05/EdgeTooltip.vue'
import DemoRawEvents from '../.vitepress/components/08_event/06/RawEvents.vue'
</script>
