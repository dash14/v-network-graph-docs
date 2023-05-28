<script setup lang="ts">
import { reactive, ref } from "vue"
import data from "./data"

const nodes = reactive(data.nodes)
const edges = reactive(data.edges)

const selectedNodes = ref([])
const selectedEdges = ref([])

function onDeleteKeyUp() {
  if (selectedNodes.value.length > 0) {
    const names = selectedNodes.value.map(n => data.nodes[n].name).join(", ")
    const confirmed = confirm(`Are you sure you want to delete [${names}]?`)
    if (confirmed) {
      selectedNodes.value.forEach(n => delete nodes[n])
    }
  } else if (selectedEdges.value.length > 0) {
    const ids = selectedEdges.value.join(", ")
    const confirmed = confirm(`Are you sure you want to delete [${ids}]?`)
    if (confirmed) {
      selectedEdges.value.forEach(e => delete edges[e])
    }
  }
}
</script>

<template>
  <!-- The `tabindex` attribute is required to fire key events. -->
  <v-network-graph
    tabindex="0"
    :nodes="nodes"
    :edges="edges"
    :layouts="data.layouts"
    :configs="data.configs"
    v-model:selectedNodes="selectedNodes"
    v-model:selectedEdges="selectedEdges"
    @keyup.delete="onDeleteKeyUp"
  />
</template>

<style lang="scss" scoped>
.v-network-graph:focus {
  // focus style
  outline: 1px dashed #aaa;
}
</style>
