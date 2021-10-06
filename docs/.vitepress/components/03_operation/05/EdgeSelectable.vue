<template>
  <div class="demo-control-panel">
    <label>Selected:</label>
    <el-select
      v-model="selectedEdges"
      multiple
      placeholder="Select"
    >
      <template v-for="(edge, key) in data.edges">
        <el-option
          v-if="edge.selectable"
          :key="key"
          :label="`[${data.nodes[edge.source].name}=${data.nodes[edge.target].name}]`"
          :value="key"
        />
      </template>
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

<script lang="ts">
import { defineComponent, ref } from "vue"
import { UserConfigs } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    const selectedEdges = ref<string[]>([])

    const configs: UserConfigs = {
      edge: {
        normal: {
          width: 3
        },
        selectable: (e) => e.selectable
      }
    }

    return { data, selectedEdges, configs }
  },
})
</script>
