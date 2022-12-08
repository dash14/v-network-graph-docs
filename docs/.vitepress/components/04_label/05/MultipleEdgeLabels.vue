<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue"
import data from "./data"

type TrafficData = Record<string, Record<string, number>>

const traffics = reactive<TrafficData>({
  node1: { node2: 0 },
  node2: { node1: 0, node3: 0, node4: 0 },
  node3: { node2: 0, node4: 0 },
  node4: { node2: 0, node3: 0 },
})

let timerId: any = null
onMounted(() => {
  // generate random numbers
  timerId = setInterval(() => {
    for (const t of Object.values(traffics)) {
      for (const key of Object.keys(t)) {
        t[key] = Math.round(Math.random() * 1000)
      }
    }
  }, 1000)
})

onUnmounted(() => {
  if (timerId) {
    clearInterval(timerId)
  }
})
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="data.configs"
  >
    <template #edge-label="{ edgeId, edge, scale, ...slotProps }">
      <v-edge-label
        :text="edgeId"
        align="center"
        vertical-align="below"
        v-bind="slotProps"
      />
      <v-edge-label
        :text="`${traffics[edge.source][edge.target]} k`"
        align="source"
        vertical-align="above"
        v-bind="slotProps"
        fill="#ff5500"
        :font-size="12 * scale"
      />
      <v-edge-label
        :text="`${traffics[edge.target][edge.source]} k`"
        align="target"
        vertical-align="above"
        v-bind="slotProps"
        fill="#ff5500"
        :font-size="12 * scale"
      />
    </template>
  </v-network-graph>
</template>
