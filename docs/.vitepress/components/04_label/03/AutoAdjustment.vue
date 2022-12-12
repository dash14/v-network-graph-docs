<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const initialConfigs = vNG.defineConfigs({
  node: {
    label: {
      visible: true,
      direction: "south",
      directionAutoAdjustment: true,
    },
  },
})
const configs = reactive(initialConfigs)
</script>

<template>
  <div class="demo-control-panel">
    <el-checkbox v-model="configs.node.label.directionAutoAdjustment">Enable auto adjustment</el-checkbox>
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
