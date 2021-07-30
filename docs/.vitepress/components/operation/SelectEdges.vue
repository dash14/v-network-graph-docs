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
        v-for="(edge, key) in edges"
        :key="key"
        :label="`[${nodes[edge.source].name}=${nodes[edge.target].name}]`"
        :value="key"
      />
    </el-select>

    <label>Limit:</label>
    <el-select v-model="limit">
      <el-option :key="0" label="0 (disable)" :value="0" />
      <el-option :key="1" label="1 edge" :value="1" />
      <el-option :key="2" label="2 edges" :value="2" />
      <el-option :key="3" label="unlimited" :value="-1" />
    </el-select>
  </div>

  <v-network-graph
    v-model:selected-edges="selectedEdges"
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue"
import { Nodes, Edges } from "v-network-graph"

export default defineComponent({
  setup() {
    const nodes: Nodes = {
      node1: { name: "N1" },
      node2: { name: "N2" },
      node3: { name: "N3" },
    }
    const edges: Edges = {
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
    const selectedEdges = ref<string[]>([])
    const configs = reactive({
      edge: {
        selectable: true as boolean | number, // enable (unlimited)
        stroke: {
          width: 3
        }
      },
    })

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

    return { nodes, edges, layouts, selectedEdges, configs, limit }
  },
})
</script>
