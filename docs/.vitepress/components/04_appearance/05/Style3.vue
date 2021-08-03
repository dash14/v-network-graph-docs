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
import { UserConfigs } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    const configs: UserConfigs = {
      node: {
        selectable: true,
        normal: {
          radius: 10,
          color: "#ffffff",
          strokeColor: "#ff00dd",
          strokeWidth: 3,
        },
        hover: {
          radius: 14,
          color: "#ffffff",
          strokeColor: "#ff00dd",
          strokeWidth: 3,
        },
        label: {
          visible: false
        },
      },
      edge: {
        normal: {
          width: 1,
          color: "#ff00dd",
        },
        hover: {
          color: "#ff00dd",
        },
      }
    }

    return { data, configs }
  },
})
</script>
