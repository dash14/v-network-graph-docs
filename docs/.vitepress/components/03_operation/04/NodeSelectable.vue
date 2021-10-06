<template>
  <div class="demo-control-panel">
    <label>Selected:</label>
    <el-select
      v-model="selectedNodes"
      multiple
      placeholder="Select"
    >
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

<script lang="ts">
import { UserConfigs } from "v-network-graph"
import { defineComponent, ref } from "vue"
import data from "./data"

export default defineComponent({
  setup() {
    const selectedNodes = ref<string[]>([])

    const configs: UserConfigs = {
      node: {
        selectable: node => node.selectable,
        draggable: node => node.draggable
      }
    }

    return { data, selectedNodes, configs }
  },
})
</script>
