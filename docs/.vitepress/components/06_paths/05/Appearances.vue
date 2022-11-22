<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const paths: vNG.Paths = {
  path1: { edges: ["edge1", "edge3", "edge5", "edge7"] },
  path2: { edges: ["edge2", "edge4", "edge6", "edge10"] },
}

const initialConfigs = vNG.defineConfigs({
  node: {
    normal: {
      type: "circle",
      radius: 20,
      color: "#99ccff",
    },
    hover: {
      color: "#88bbff",
    },
    label: {
      visible: false,
      fontSize: 8,
    },
  },
  edge: {
    gap: 12,
    normal: {
      color: "#6699cc",
    },
  },
  path: {
    visible: true,
    clickable: true,
    hoverable: true,
    selectable: true,
    curveInNode: false,
    end: "centerOfNode", // "centerOfNode" or "edgeOfNode"
    margin: 0,
    normal: {
      width: 10,
      color: "#ff800088",
      dasharray: "",
      linecap: "round",
      linejoin: "round",
      animate: false,
      animationSpeed: 50,
    },
    hover: {
      width: 12,
      color: "#ff000088",
      dasharray: "",
      linecap: "round",
      linejoin: "round",
      animate: false,
      animationSpeed: 50,
    },
    selected: {
      width: 12,
      color: "#ff000088",
      dasharray: "6 16",
      linecap: "round",
      linejoin: "round",
      animate: true,
      animationSpeed: 30,
    },
  },
})
const configs = reactive(initialConfigs)
</script>

<template>
  <div class="demo-control-panel">
    <el-tabs type="border-card">
      <el-tab-pane label="General">
        <demo-path-config-panel
          v-model:end="configs.path.end"
          v-model:margin="configs.path.margin"
          v-model:curveInNode="configs.path.curveInNode"
          v-model:clickable="configs.path.clickable"
          v-model:hoverable="configs.path.hoverable"
          v-model:selectable="configs.path.selectable"
        />
      </el-tab-pane>
      <el-tab-pane label="Stroke">
        <el-tabs>
          <el-tab-pane label="normal">
            <demo-path-stroke-config-panel
              v-model:width="configs.path.normal.width"
              v-model:color="configs.path.normal.color"
              v-model:dasharray="configs.path.normal.dasharray"
              v-model:linecap="configs.path.normal.linecap"
              v-model:animate="configs.path.normal.animate"
              v-model:animationSpeed="configs.path.normal.animationSpeed"
            />
          </el-tab-pane>
          <el-tab-pane label="hover">
            <demo-path-stroke-config-panel
              v-model:width="configs.path.hover.width"
              v-model:color="configs.path.hover.color"
              v-model:dasharray="configs.path.hover.dasharray"
              v-model:linecap="configs.path.hover.linecap"
              v-model:animate="configs.path.hover.animate"
              v-model:animationSpeed="configs.path.hover.animationSpeed"
            /></el-tab-pane>
          <el-tab-pane label="selected">
            <demo-path-stroke-config-panel
              v-model:width="configs.path.selected.width"
              v-model:color="configs.path.selected.color"
              v-model:dasharray="configs.path.selected.dasharray"
              v-model:linecap="configs.path.selected.linecap"
              v-model:animate="configs.path.selected.animate"
              v-model:animationSpeed="configs.path.selected.animationSpeed"
            /></el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :paths="paths"
    :configs="configs"
  />
</template>
