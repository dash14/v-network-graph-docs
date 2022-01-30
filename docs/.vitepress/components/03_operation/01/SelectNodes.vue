<script setup lang="ts">
import { reactive, ref, watch } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const selectedNodes = ref<string[]>([])

// If you want to change the configuration object later,
// you can use `getFullConfigs()` that can also get the
// type information of the configuration object.
const configs = reactive(vNG.getFullConfigs())

configs.node.selectable = true

const limit = ref(-1)
watch(limit, v => {
  selectedNodes.value = [] // reset
  switch (v) {
    case 0: // disabled
      configs.node.selectable = false
      break
    case 1: // limit
    case 2:
      configs.node.selectable = v
      break
    case -1: // unlimited
    default:
      configs.node.selectable = true
      break
  }
})
</script>

<template>
  <div class="demo-control-panel">
    <label>Selected:</label>
    <el-select
      v-model="selectedNodes"
      :disabled="limit === 0"
      multiple
      :multiple-limit="limit"
      placeholder="Select"
    >
      <el-option
        v-for="(node, key) in data.nodes"
        :key="key"
        :label="node.name"
        :value="key"
      />
    </el-select>

    <label>Limit:</label>
    <el-select v-model="limit">
      <el-option label="0 (disable)" :value="0" />
      <el-option label="1 node" :value="1" />
      <el-option label="2 nodes" :value="2" />
      <el-option label="unlimited" :value="-1" />
    </el-select>
  </div>

  <v-network-graph
    v-model:selected-nodes="selectedNodes"
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
