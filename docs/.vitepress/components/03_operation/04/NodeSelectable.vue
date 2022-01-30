<script setup lang="ts">
import { ref } from "vue"
import * as vNG from "v-network-graph"
import data, { Node } from "./data"

const selectedNodes = ref<string[]>([])

const configs = vNG.defineConfigs<Node>({
  node: {
    selectable: node => node.selectable,
    draggable: node => node.draggable,
  },
})
</script>

<template>
  <div class="demo-control-panel">
    <label>Selected:</label>
    <el-select v-model="selectedNodes" multiple placeholder="Select">
      <template v-for="(node, key) in data.nodes">
        <el-option
          v-if="node.selectable"
          :key="key"
          :label="node.name"
          :value="key"
        />
      </template>
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
