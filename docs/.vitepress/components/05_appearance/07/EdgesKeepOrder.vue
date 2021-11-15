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

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { Edge } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    const configs = reactive({
      node: {
        normal: {
          color: "#aabbff"
        }
      },
      edge: {
        normal: {
          color: (edge: Edge) => edge.color
        },
        hover: {
          color: (edge: Edge) => edge.color
        },
        margin: 4,
        marker: {
          source: { type: "arrow" }
        },
        gap: 10,
        keepOrder: "clock"
      }
    })

    return { data, configs }
  },
})
</script>
