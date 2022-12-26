<script setup lang="ts">
import { ref } from "vue"
import * as vNG from "v-network-graph"
import { withBase } from "vitepress"
import data from "./data"

// additional layers definition
const layers = {
  // {layername}: {position}
  worldmap: "base",
}

// ref="graph"
const graph = ref<vNG.Instance>()

function onLoadImage() {
  graph.value?.fitToContents()
}
</script>

<template>
  <v-network-graph
    ref="graph"
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="data.configs"
    :layers="layers"
  >
    <!-- Additional layer -->
    <template #worldmap>
      <image
        :href="withBase('/worldmap.svg')"
        x="0"
        y="0"
        width="1000px"
        @load="onLoadImage"
      />
    </template>
  </v-network-graph>
</template>
