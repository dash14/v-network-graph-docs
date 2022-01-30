<script setup lang="ts">
import { reactive, ref } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

// additional layers definition
const layers = {
  // {layername}: {position}
  badge: "nodes",
}

const nodes = reactive({ ...data.nodes })

// wrap with ref() for immediate response to value changes
const layouts = ref({ ...data.layouts })

const edges = data.edges
const configs = data.configs

const eventHandlers: vNG.EventHandlers = {
  "node:click": ({ node }) => {
    // toggle
    nodes[node].active = !nodes[node].active
  },
}
</script>

<template>
  <v-network-graph
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
    :layers="layers"
    :event-handlers="eventHandlers"
  >
    <!-- Additional layer -->
    <template #badge="{ scale }">
      <!--
        If the `view.scalingObjects` config is `false`(default),
        scaling does not change the display size of the nodes/edges.
        The `scale` is passed as a scaling factor to implement
        this behavior. -->
      <circle
        v-for="(pos, node) in layouts.nodes"
        :key="node"
        :cx="pos.x + 9 * scale"
        :cy="pos.y - 9 * scale"
        :r="4 * scale"
        :fill="nodes[node].active ? '#00cc00' : '#ff5555'"
        style="pointer-events: none"
      />
    </template>
  </v-network-graph>
</template>
