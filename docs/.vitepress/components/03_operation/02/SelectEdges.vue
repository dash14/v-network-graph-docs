<script setup lang="ts">
import { reactive, ref, watch } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const selectedEdges = ref<string[]>([])

// If you want to change the configuration object later,
// you can use `getFullConfigs()` that can also get the
// type information of the configuration object.
const configs = reactive(vNG.getFullConfigs())

configs.edge.selectable = true
configs.edge.normal.width = 3

const limit = ref(-1)
watch(limit, v => {
  selectedEdges.value = [] // reset
  switch (v) {
    case 0: // disabled
      configs.edge.selectable = false
      break
    case 1: // limit
    case 2:
      configs.edge.selectable = v
      break
    case -1: // unlimited
    default:
      configs.edge.selectable = true
      break
  }
})
</script>

<template>
  <div class="demo-control-panel">
    <label>Selected:</label>
    <el-select
      v-model="selectedEdges"
      :disabled="limit === 0"
      multiple
      :multiple-limit="limit"
      placeholder="Select"
    >
      <el-option
        v-for="(edge, key) in data.edges"
        :key="key"
        :label="`[${data.nodes[edge.source].name}=${data.nodes[edge.target].name}]`"
        :value="key"
      />
    </el-select>

    <label>Limit:</label>
    <el-select v-model="limit">
      <el-option label="0 (disable)" :value="0" />
      <el-option label="1 edge" :value="1" />
      <el-option label="2 edges" :value="2" />
      <el-option label="unlimited" :value="-1" />
    </el-select>
  </div>

  <v-network-graph
    v-model:selected-edges="selectedEdges"
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
