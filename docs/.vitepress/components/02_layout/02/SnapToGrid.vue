<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { GridLayout } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    const configs = {
      view: {
        layoutHandler: new GridLayout({ grid: 15 })
      }
    }

    return { data, configs }
  },
})
</script>
