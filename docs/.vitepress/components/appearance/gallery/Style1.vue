<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { NodeLabelDirection } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    const configs = reactive({
      node: {
        selectable: true,
        normal: {
          radius: 16,
          color: "#6013ad",
        },
        hover: {
          color: "#430d78",
        },
        label: {
          visible: true,
          fontSize: 11,
          color: "#ffffff",
          direction: NodeLabelDirection.CENTER,
        },
      },
      edge: {
        normal: {
          width: 3,
          color: "#58139c",
        },
        hover: {
          color: "#3a0d66",
        },
      }
    })

    return { data, configs }
  },
})
</script>
