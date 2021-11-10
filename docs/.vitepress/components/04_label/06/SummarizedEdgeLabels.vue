<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="data.configs"
  >
    <!-- The slot for indivisual edge labels -->
    <template #edge-label="{ edge, ...slotProps }">
      <v-edge-label :text="edge.label" align="center" vertical-align="above" v-bind="slotProps" />
    </template>
    <!-- The slot for summarized edge labels -->
    <template #edges-label="{ edges, ...slotProps }">
      <v-edge-label
        :text="summarizedEdgeLabel(edges)"
        align="center"
        vertical-align="above"
        v-bind="slotProps"
      />
    </template>
  </v-network-graph>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Edge } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    return { data }
  },
  methods: {
    summarizedEdgeLabel(edges: Record<string, Edge>) {
      const edgeList = Object.values(edges)
      return `${edgeList[0].label}~${edgeList[edgeList.length - 1].label}`
    }
  }
})
</script>
