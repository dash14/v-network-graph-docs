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
      { edges: ["edge1", "edge4", "edge5", "edge7"] },
      { edges: ["edge2", "edge3", "edge6", "edge10"] },
    ]
    return { data, paths }
  },
})
</script>
