<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="data.configs"
    :event-handlers="eventHandlers"
  />
  <div class="event-logs">
    <div v-for="[timestamp, type, log] in eventLogs" :key="`${timestamp}/${type}/${log}`">
      {{ timestamp }}
      <span class="event-type">{{type}}</span>
      {{ log }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { EventHandlers } from "v-network-graph"
import format from "date-fns/format"
import data from "./data"

const EVENTS_COUNT = 6

export default defineComponent({
  setup() {
    const eventLogs = reactive<[string, string, string][]>([])

    const eventHandlers: EventHandlers = {
      // wildcard: capture all events
      "*": (type, event) => {
        const timestamp = format(new Date(), "HH:mm:ss.SSS")
        if (eventLogs.length > EVENTS_COUNT) {
          eventLogs.splice(EVENTS_COUNT, eventLogs.length - EVENTS_COUNT)
        }
        if (event instanceof Object && "event" in event) {
          Object.assign(event, { event: "(...)" })
        }
        eventLogs.unshift([timestamp, type, JSON.stringify(event)])
      }
    }

    return { data, eventLogs, eventHandlers }
  },
})
</script>

<style scoped>
.event-logs {
  position: absolute;
  inset: auto 10px 10px auto;
  padding: 10px;
  background: #ffff0044;
  border-radius: 4px;
  font-size: 11px;
  font-family: monospace;
  line-height: 11px;
  pointer-events: none;
}
.event-type {
  font-weight: bold;
}
</style>
