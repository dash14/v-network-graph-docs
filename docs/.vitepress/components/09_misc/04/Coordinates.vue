<script setup lang="ts">
import { reactive, ref } from "vue"
import { VNetworkGraphInstance, EventHandlers } from "v-network-graph"
import data from "./data"

// ref="graph"
const graph = ref<VNetworkGraphInstance>()

const nodes = reactive({ ...data.nodes })
const layouts = reactive(data.layouts)
let nextNodeIndex = Object.keys(nodes).length + 1

const eventHandlers: EventHandlers = {
  "view:click": ({ event }) => {
    if (!graph.value) return

    const point = { x: event.offsetX, y: event.offsetY }
    // translate coordinates: DOM -> SVG
    const svgPoint = graph.value.translateFromDomToSvgCoordinates(point)

    // add node and its position
    const nodeId = `node${nextNodeIndex}`
    const name = `N${nextNodeIndex}`
    layouts.nodes[nodeId] = svgPoint
    nodes[nodeId] = { name }
    nextNodeIndex++
  },
}
</script>

<template>
  <v-network-graph
    ref="graph"
    v-model:nodes="nodes"
    :edges="data.edges"
    v-model:layouts="layouts"
    :event-handlers="eventHandlers"
  />
</template>
