<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const initialConfigs = vNG.defineConfigs({
  node: {
    normal: {
      color: "#4466cc88",
    },
  },
  edge: {
    selectable: true,
    normal: {
      width: 3,
      color: "#4466cc",
      dasharray: "0",
      linecap: "butt",
      animate: false,
      animationSpeed: 50,
    },
    hover: {
      width: 4,
      color: "#3355bb",
      dasharray: "0",
      linecap: "butt",
      animate: false,
      animationSpeed: 50,
    },
    selected: {
      width: 3,
      color: "#dd8800",
      dasharray: "6",
      linecap: "round",
      animate: false,
      animationSpeed: 50,
    },
    gap: 5,
    type: "straight",
    margin: 2,
    marker: {
      source: {
        type: "none",
        width: 4,
        height: 4,
        margin: -1,
        units: "strokeWidth",
        color: null,
      },
      target: {
        type: "arrow",
        width: 4,
        height: 4,
        margin: -1,
        units: "strokeWidth",
        color: null,
      },
    },
  },
})
const configs = reactive(initialConfigs)
</script>

<template>
  <div class="demo-control-panel">
    <el-tabs type="border-card">
      <el-tab-pane label="Marker" class="demo-marker-panel">
        <div>Source:</div>
        <demo-edge-marker-config-panel
          v-model:type="configs.edge.marker.source.type"
          v-model:width="configs.edge.marker.source.width"
          v-model:height="configs.edge.marker.source.height"
          v-model:margin="configs.edge.marker.source.margin"
          v-model:color="configs.edge.marker.source.color"
          v-model:units="configs.edge.marker.source.units"
        />
        <div>Target:</div>
        <demo-edge-marker-config-panel
          v-model:type="configs.edge.marker.target.type"
          v-model:width="configs.edge.marker.target.width"
          v-model:height="configs.edge.marker.target.height"
          v-model:margin="configs.edge.marker.target.margin"
          v-model:color="configs.edge.marker.target.color"
          v-model:units="configs.edge.marker.target.units"
        />
      </el-tab-pane>
      <el-tab-pane label="Edge Margin/Gap/Type">
        <demo-edge-margin-gap-config-panel
          v-model:margin="configs.edge.margin"
          v-model:lineType="configs.edge.type"
          v-model:gap="configs.edge.gap"
        />
      </el-tab-pane>
      <el-tab-pane label="Edge Stroke">
        <el-tabs>
          <el-tab-pane label="normal">
            <demo-edge-config-panel
              v-model:width="configs.edge.normal.width"
              v-model:color="configs.edge.normal.color"
              v-model:dasharray="configs.edge.normal.dasharray"
              v-model:linecap="configs.edge.normal.linecap"
              v-model:animate="configs.edge.normal.animate"
              v-model:animationSpeed="configs.edge.normal.animationSpeed"
            />
          </el-tab-pane>
          <el-tab-pane label="hover">
            <demo-edge-config-panel
              v-model:width="configs.edge.hover.width"
              v-model:color="configs.edge.hover.color"
              v-model:dasharray="configs.edge.hover.dasharray"
              v-model:linecap="configs.edge.hover.linecap"
              v-model:animate="configs.edge.hover.animate"
              v-model:animationSpeed="configs.edge.hover.animationSpeed"
            />
          </el-tab-pane>
          <el-tab-pane label="selected">
            <demo-edge-config-panel
              v-model:width="configs.edge.selected.width"
              v-model:color="configs.edge.selected.color"
              v-model:dasharray="configs.edge.selected.dasharray"
              v-model:linecap="configs.edge.selected.linecap"
              v-model:animate="configs.edge.hover.animate"
              v-model:animationSpeed="configs.edge.hover.animationSpeed"
            />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
