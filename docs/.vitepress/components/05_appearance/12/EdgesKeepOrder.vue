<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const initialConfigs = vNG.defineConfigs({
  node: {
    normal: {
      color: "#aabbff",
    },
  },
  edge: {
    normal: {
      color: (edge: vNG.Edge) => edge.color,
    },
    hover: {
      color: (edge: vNG.Edge) => edge.color,
    },
    margin: 4,
    marker: {
      source: { type: "arrow" },
    },
    gap: 10,
    keepOrder: "clock",
  },
})
const configs = reactive(initialConfigs)
</script>

<template>
  <div class="demo-control-panel">
    <label>Keep order:</label>
    <el-select v-model="configs.edge.keepOrder">
      <el-option label="clock" value="clock" />
      <el-option label="vertical" value="vertical" />
      <el-option label="horizontal" value="horizontal" />
    </el-select>
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
