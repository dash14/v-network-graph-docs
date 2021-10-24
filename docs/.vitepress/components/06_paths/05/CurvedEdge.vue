<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :paths="paths"
    :configs="data.configs"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Paths } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    const paths: Paths = [
      { edges: ["edge1", "edge3", "edge5"] },
      { edges: ["edge2", "edge4", "edge6"] },
    ]
    return { data, paths }
  },
})
</script>
