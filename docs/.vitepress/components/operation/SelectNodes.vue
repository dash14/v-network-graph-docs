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
        v-for="(node, key) in nodes"
        :key="key"
        :label="node.name"
        :value="key"
      />
    </el-select>

    <label>Limit:</label>
    <el-select v-model="limit">
      <el-option :key="0" label="0 (disable)" :value="0" />
      <el-option :key="1" label="1 node" :value="1" />
      <el-option :key="2" label="2 nodes" :value="2" />
      <el-option :key="3" label="unlimited" :value="-1" />
    </el-select>
  </div>

  <v-network-graph
    v-model:selected-nodes="selectedNodes"
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref, watch } from "vue"
import { UserConfigs, NodeLabelDirection } from "v-network-graph"

export default defineComponent({
  setup() {
    const nodes = {
      node1: { name: "N1" },
      node2: { name: "N2" },
      node3: { name: "N3" },
    }
    const edges = {
      edge1: { source: "node1", target: "node2" },
      edge2: { source: "node2", target: "node3" },
      edge3: { source: "node3", target: "node1" },
    }
    const layouts = reactive({
      nodes: {
        node1: { x: 50, y: 0 },
        node2: { x: 0, y: 75 },
        node3: { x: 100, y: 75 },
      },
    })
    const selectedNodes = ref<string[]>([])
    const configs = reactive<UserConfigs>({
      node: {
        selectable: true // enable (unlimited)
      },
    })

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

    return { nodes, edges, layouts, selectedNodes, configs, limit }
  },
})
</script>
