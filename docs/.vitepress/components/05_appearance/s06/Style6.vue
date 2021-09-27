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
          radius: 20,
          color: "#8888ff",
          strokeWidth: 2,
          strokeColor: "#0000aa",
        },
        hover: {
          color: "#6666ff",
        },
        label: {
          fontSize: 12,
          color: "#000000",
        },
      },
      edge: {
        normal: {
          width: 1,
          color: "#2222aa",
        },
        hover: {
          width: 2,
          color: "#0000aa",
        },
        gap: 20,
        type: "curve",
        margin: 6,
        marker: {
          target: {
            type: "arrow",
            width: 8,
            height: 8
          }
        }
      }
    }

    return { data, configs }
  },
})
</script>
