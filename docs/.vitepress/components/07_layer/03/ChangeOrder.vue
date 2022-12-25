<script setup lang="ts">
import { reactive, ref, watch } from "vue"
import { defineConfigs, VNetworkGraphInstance } from "v-network-graph"
import data from "./data"

const graph = ref<VNetworkGraphInstance>()

const nodeLabelsToForefront = ref(true)

const initialConfig = defineConfigs({
  view: {
    builtInLayerOrder: ["node-labels", "paths"],
  },
  node: {
    selectable: true,
    label: {
      margin: 6,
      background: {
        visible: true,
        color: "#ccddff",
        padding: {
          vertical: 2,
          horizontal: 6,
        },
        borderRadius: 4,
      },
    },
  },
  path: {
    visible: true,
    path: {
      width: 10,
      color: "#ffaa88cc",
    },
    curveInNode: true,
  },
})
const configs = reactive(initialConfig)

watch(nodeLabelsToForefront, v => {
  configs.view.builtInLayerOrder = v ? ["node-labels", "paths"] : []
})
</script>

<template>
  <div class="demo-control-panel">
    <el-checkbox v-model="nodeLabelsToForefront">Set node labels to the forefront</el-checkbox>
  </div>

  <v-network-graph
    ref="graph"
    :nodes="data.nodes"
    :edges="data.edges"
    :paths="data.paths"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
