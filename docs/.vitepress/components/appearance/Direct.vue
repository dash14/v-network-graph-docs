<template>
  <div class="demo-control-panel">
    <el-tabs type="border-card" class="demo-tab">
      <el-tab-pane label="Node[default]">
        <demo-node-config-panel
          v-model:type="configs.node.shape.type"
          v-model:radius="configs.node.shape.radius"
          v-model:width="configs.node.shape.width"
          v-model:height="configs.node.shape.height"
          v-model:borderRadius="configs.node.shape.borderRadius"
          v-model:strokeWidth="configs.node.shape.strokeWidth"
          v-model:strokeColor="configs.node.shape.strokeColor"
          v-model:strokeDasharray="configs.node.shape.strokeDasharray"
          v-model:color="configs.node.shape.color"
        />
      </el-tab-pane>
      <el-tab-pane label="[hover]">
        <demo-node-config-panel
          v-model:type="configs.node.hover.type"
          v-model:radius="configs.node.hover.radius"
          v-model:width="configs.node.hover.width"
          v-model:height="configs.node.hover.height"
          v-model:borderRadius="configs.node.hover.borderRadius"
          v-model:strokeWidth="configs.node.hover.strokeWidth"
          v-model:strokeColor="configs.node.hover.strokeColor"
          v-model:strokeDasharray="configs.node.hover.strokeDasharray"
          v-model:color="configs.node.hover.color"
        />
      </el-tab-pane>
      <el-tab-pane label="[active]">
      </el-tab-pane>
      <el-tab-pane label="Label">
      </el-tab-pane>
      <el-tab-pane label="Focus">
      </el-tab-pane>
      <el-tab-pane label="Edge">
      </el-tab-pane>
    </el-tabs>
  </div>

  <v-network-graph
    :nodes="nodes"
    :edges="edges"
    :layouts="layouts"
    :configs="configs"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
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

    const configs = reactive({
      node: {
        selectable: true,
        shape: {
          type: "circle",
          radius: 16,
          // for type is "rect" -->
          width: 32,
          height: 32,
          borderRadius: 4,
          // <-- for type is "rect"
          strokeWidth: 0,
          strokeColor: "#000000",
          strokeDasharray: "none",
          color: "#4466cc",
        },
        hover: {
          type: "circle",
          radius: 16,
          // for type is "rect" -->
          width: 32,
          height: 32,
          borderRadius: 4,
          // <-- for type is "rect"
          strokeWidth: 0,
          strokeColor: "#000000",
          strokeDasharray: "none",
          color: "#dd2288",
        }
      }
    })

    return { nodes, edges, layouts, configs }
  },
})
</script>

<style scoped lang="scss">
.demo-tab {
  width: 100%;
}
</style>