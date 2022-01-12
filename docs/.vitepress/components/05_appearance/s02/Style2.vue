<script setup lang="ts">
import { UserConfigs, NodeLabelDirection } from "v-network-graph"
import data from "./data"

const configs: UserConfigs = {
  node: {
    selectable: true,
    normal: {
      type: "rect",
      width: 32,
      height: 32,
      borderRadius: 8,
      color: "#ff6f00",
    },
    hover: {
      color: "#ff5500",
      width: 36,
      height: 36,
      borderRadius: 8,
    },
    label: {
      fontSize: 16,
      color: "#000000",
      direction: NodeLabelDirection.NORTH,
    },
  },
  edge: {
    normal: {
      width: 2,
      color: "#ff6f00",
      dasharray: "4 6",
      linecap: "round",
    },
    hover: {
      color: "#ff5500",
    },
  },
}
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
