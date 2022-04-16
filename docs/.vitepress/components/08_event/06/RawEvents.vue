<script setup lang="ts">
import { reactive } from "vue"
import { VShape } from "v-network-graph"
import format from "date-fns/format"
import data from "./data"

const EVENTS_COUNT = 5

const eventLogs = reactive<[string, string, string][]>([])

function customEventHandler(nodeId: string, event: MouseEvent) {
  const timestamp = format(new Date(), "HH:mm:ss.SSS")
  if (eventLogs.length > EVENTS_COUNT) {
    eventLogs.splice(EVENTS_COUNT, eventLogs.length - EVENTS_COUNT)
  }
  const eventInfo = {
    type: event.type,
    x: event.clientX,
    y: event.clientY,
  }
  eventLogs.unshift([timestamp, nodeId, JSON.stringify(eventInfo)])
}
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="data.configs"
  >
    <template #override-node="slotProps">
      <!-- v-shape: Internal component that draws a node shape -->
      <v-shape
        v-bind="slotProps"
        @mousedown="customEventHandler(slotProps.nodeId, $event)"
        @mouseup="customEventHandler(slotProps.nodeId, $event)"
        @mouseover="customEventHandler(slotProps.nodeId, $event)"
        @click="customEventHandler(slotProps.nodeId, $event)"
        @dblclick="customEventHandler(slotProps.nodeId, $event)"
      />
    </template>
  </v-network-graph>
  <div v-if="eventLogs.length > 0" class="event-logs">
    <div
      v-for="[timestamp, nodeId, event] in eventLogs"
      :key="`${timestamp}/${nodeId}/${event}`"
    >
      {{ timestamp }}
      [{{ nodeId }} ({{ data.nodes[nodeId].name }})]
      {{ event }}
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
</style>
