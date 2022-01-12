<script setup lang="ts">
import { defineConfigs, GridLayout } from "v-network-graph"
import data from "./data"

const configs = defineConfigs({
  view: {
    layoutHandler: new GridLayout({ grid: 15 }),
  },
})
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
