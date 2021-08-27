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
import { UserConfigs, NodeLabelDirection } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    const configs: UserConfigs = {
      node: {
        selectable: true,
        normal: {
          radius: 16,
          color: "#ffffff",
          strokeWidth: 1,
          strokeColor: "#000000",
        },
        hover: {
          color: "#f0f0f0",
        },
        label: {
          fontSize: 12,
          color: "#000000",
          direction: NodeLabelDirection.CENTER,
        },
      },
      edge: {
        normal: {
          width: 1,
          color: "#444444",
        },
        hover: {
          color: "#222222",
        },
        marker: {
          target: {
            type: "angle",
            width: 10,
            height: 10,
            margin: -10
          }
        }
      }
    }

    return { data, configs }
  },
})
</script>
