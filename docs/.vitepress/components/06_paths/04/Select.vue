<script setup lang="ts">
import { reactive, ref, watch } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const paths: vNG.Paths = {
  path1: { edges: ["edge1", "edge3", "edge5", "edge7"] },
  path2: { edges: ["edge2", "edge4", "edge6", "edge10"] },
}

const configs = reactive(
  vNG.defineConfigs({
    node: {
      normal: { type: "circle", radius: 20, color: "#99ccff" },
      hover: { color: "#88bbff" },
      label: { visible: false, fontSize: 8 },
    },
    edge: {
      gap: 12,
      normal: { color: "#6699cc" },
    },
    path: {
      visible: true,
      selectable: true as boolean | number,
      clickable: true,
      hoverable: true,
      normal: {
        width: 10,
      },
    },
  })
)

const selectedPaths = ref<string[]>([])

const limit = ref(-1)
watch(limit, v => {
  selectedPaths.value = [] // reset
  switch (v) {
    case 0: // disabled
      configs.path.selectable = false
      break
    case 1: // limit
      configs.path.selectable = v
      break
    case -1: // unlimited
    default:
      configs.path.selectable = true
      break
  }
})
</script>

<template>
  <div class="demo-control-panel">
    <label>Selected:</label>
    <el-select
      v-model="selectedPaths"
      :disabled="limit === 0"
      multiple
      :multiple-limit="limit"
      placeholder="Select"
    >
      <el-option
        v-for="(node, key) in paths"
        :key="key"
        :label="node.name"
        :value="key"
      />
    </el-select>

    <label>Limit:</label>
    <el-select v-model="limit" :width="400">
      <el-option label="0 (disable)" :value="0" />
      <el-option label="1 path" :value="1" />
      <el-option label="unlimited" :value="-1" />
    </el-select>
  </div>

  <v-network-graph
    v-model:selected-paths="selectedPaths"
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :paths="paths"
    :configs="configs"
  />
</template>
