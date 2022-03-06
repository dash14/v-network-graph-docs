<script setup lang="ts">
import { reactive, ref } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const graph = ref<vNG.Instance>()

const targetNode = "node4"
const selectedNodes = ref([targetNode])

const eventHandlers: vNG.EventHandlers = {
  "view:load": () => {
    if (!graph.value) return
    // Pan the target node position to the center.
    const sizes = graph.value.getSizes()
    graph.value.panTo({
      x: sizes.width / 2 - data.layouts.nodes[targetNode].x,
      y: sizes.height / 2 - data.layouts.nodes[targetNode].y,
    })
  },
}

const configs = reactive(
  vNG.defineConfigs({
    view: {
      autoPanAndZoomOnLoad: false,
    },
    node: {
      selectable: true,
    },
  })
)
</script>

<template>
  <v-network-graph
    ref="graph"
    v-model:selected-nodes="selectedNodes"
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
    :event-handlers="eventHandlers"
  />
</template>
