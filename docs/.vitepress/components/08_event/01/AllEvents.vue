<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"
import format from "date-fns/format"
import data from "./data"

const EVENTS_COUNT = 6

const eventLogs = reactive<[string, string, string][]>([])

const eventHandlers: vNG.EventHandlers = {
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
  },
}
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="data.configs"
    :event-handlers="eventHandlers"
  />
  <div class="event-logs">
    <div
      v-for="[timestamp, type, log] in eventLogs"
      :key="`${timestamp}/${type}/${log}`"
    >
      {{ timestamp }}
      <span class="event-type">{{ type }}</span>
      {{ log }}
    </div>
  </div>
</template>

<style lang="css" scoped>
.event-logs {
  position: absolute;
  inset: auto 10px 10px auto;
  margin-left: 10px;
  padding: 10px;
  background: #ffff0044;
  border-radius: 4px;
  font-size: 11px;
  font-family: monospace;
  line-height: 11px;
  pointer-events: none;
}
.event-logs div {
  word-break: break-all;
}
.event-type {
  font-weight: bold;
}
</style>
