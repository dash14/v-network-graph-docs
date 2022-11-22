<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const initialConfigs = vNG.defineConfigs({
  node: {
    normal: {
      radius: 20,
    },
    label: {
      visible: false,
    },
  },
  edge: {
    marker: {
      target: { type: "arrow" },
    },
    selfLoop: {
      radius: 14,
      offset: 16,
      angle: 180,
      isClockwise: true,
    },
  },
})
const configs = reactive(initialConfigs)
</script>

<template>
  <div class="demo-control-panel">
    <demo-edge-self-loop-config-panel
      v-model:radius="configs.edge.selfLoop.radius"
      v-model:angle="configs.edge.selfLoop.angle"
      v-model:offset="configs.edge.selfLoop.offset"
      v-model:clockwise="configs.edge.selfLoop.isClockwise"
    />
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
