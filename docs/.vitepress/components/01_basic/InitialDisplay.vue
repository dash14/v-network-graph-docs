<script setup lang="ts">
import { reactive, ref } from "vue"
import * as vNG from "v-network-graph"

const nodes = {
  node1: { name: "Node 1" },
  node2: { name: "Node 2" },
  node3: { name: "Node 3" },
  node4: { name: "Node 4" },
}

const edges = {
  edge1: { source: "node1", target: "node2" },
  edge2: { source: "node2", target: "node3" },
  edge3: { source: "node3", target: "node4" },
}

const layouts = {
  nodes: {
    node1: { x: 0, y: 0 },
    node2: { x: 50, y: 50 },
    node3: { x: 100, y: 0 },
    node4: { x: 150, y: 50 },
  },
}

const initialConfigs = vNG.defineConfigs({
  view: {
    autoPanAndZoomOnLoad: "center-content",
    fitContentMargin: "8%",
  },
})
const configs = reactive(initialConfigs)

const recreateCount = ref(0)
function recreate() {
  recreateCount.value++
}

function isFitContentSelected(configs: vNG.UserConfigs) {
  return configs.view?.autoPanAndZoomOnLoad === "fit-content"
}
</script>

<template>
  <div class="demo-control-panel" style="gap: 6px">
    <el-select v-model="configs.view.autoPanAndZoomOnLoad">
      <el-option label='"center-content"' value="center-content" />
      <el-option label='"fit-content"' value="fit-content" />
      <el-option label='"center-zero"' value="center-zero" />
      <el-option label="false" :value="false" />
    </el-select>
    <el-select
      v-if="isFitContentSelected(configs)"
      v-model="configs.view.fitContentMargin"
      style="width: 80px"
    >
      <el-option label="0" value="0" />
      <el-option label="8%" value="8%" />
      <el-option label="40px" value="40px" />
    </el-select>
    <el-button @click="recreate">Recreate</el-button>
  </div>

  <v-network-graph
    :key="recreateCount"
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  />
</template>
