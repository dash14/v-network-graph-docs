# Event Handling

You can capture events that occur in v-network-graph by
specifying the events and functions to be captured in
the `event-handlers` attribute.

For a list of events that can be captured,
see [here](/reference#events-with-event-handler).

## Capture all events

If you specify "*" as the event type, all available events will
be captured.

<demo-tabs :use-data="true" :demo-height="300">
<template v-slot:demo>
  <DemoAllEvents />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/06_event/01/AllEvents.vue{7,30-42}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/06_event/01/data.ts

</template>
</demo-tabs>


## Handle node clicked



<script setup>
import DemoAllEvents from '../.vitepress/components/06_event/01/AllEvents.vue'
</script>
