<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const initialConfigs = vNG.defineConfigs({
  node: {
    selectable: true,
    normal: {
      type: "circle",
      radius: 16,
      // for type is "rect" -->
      width: 32,
      height: 32,
      borderRadius: 4,
      // <-- for type is "rect"
      strokeWidth: 0,
      strokeColor: "#000000",
      strokeDasharray: "0",
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
      strokeDasharray: "0",
      color: "#dd2288",
    },
    selected: {
      type: "circle",
      radius: 16,
      // for type is "rect" -->
      width: 32,
      height: 32,
      borderRadius: 4,
      // <-- for type is "rect"
      strokeWidth: 0,
      strokeColor: "#000000",
      strokeDasharray: "0",
      color: "#4466cc",
    },
    label: {
      visible: true,
      fontFamily: undefined,
      fontSize: 11,
      lineHeight: 1.1,
      color: "#000000",
      margin: 4,
      direction: "south",
      background: {
        visible: false,
        color: "#ffffff",
        padding: {
          vertical: 1,
          horizontal: 4,
        },
        borderRadius: 2,
      },
    },
    focusring: {
      visible: true,
      width: 4,
      padding: 3,
      color: "#eebb00",
      dasharray: "0",
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
    gap: 3,
    type: "straight",
    summarize: true,
    summarized: {
      label: {
        fontSize: 10,
        color: "#4466cc",
      },
      shape: {
        type: "rect",
        radius: 6, // for type is "circle"
        width: 12,
        height: 12,
        borderRadius: 3,
        color: "#ffffff",
        strokeWidth: 1,
        strokeColor: "#4466cc",
        strokeDasharray: "0",
      },
      stroke: {
        width: 5,
        color: "#4466cc",
        dasharray: "0",
        linecap: "butt",
        animate: false,
        animationSpeed: 50,
      },
    },
  },
})
const configs = reactive(initialConfigs)
</script>

<template>
  <div class="demo-control-panel">
    <el-tabs type="border-card">
      <el-tab-pane label="Node">
        <el-tabs>
          <el-tab-pane label="normal">
            <demo-node-config-panel
              v-model:type="configs.node.normal.type"
              v-model:radius="configs.node.normal.radius"
              v-model:width="configs.node.normal.width"
              v-model:height="configs.node.normal.height"
              v-model:borderRadius="configs.node.normal.borderRadius"
              v-model:strokeWidth="configs.node.normal.strokeWidth"
              v-model:strokeColor="configs.node.normal.strokeColor"
              v-model:strokeDasharray="configs.node.normal.strokeDasharray"
              v-model:color="configs.node.normal.color"
            />
          </el-tab-pane>
          <el-tab-pane label="hover">
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
          <el-tab-pane label="selected">
            <demo-node-config-panel
              v-model:type="configs.node.selected.type"
              v-model:radius="configs.node.selected.radius"
              v-model:width="configs.node.selected.width"
              v-model:height="configs.node.selected.height"
              v-model:borderRadius="configs.node.selected.borderRadius"
              v-model:strokeWidth="configs.node.selected.strokeWidth"
              v-model:strokeColor="configs.node.selected.strokeColor"
              v-model:strokeDasharray="configs.node.selected.strokeDasharray"
              v-model:color="configs.node.selected.color"
            />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="Label">
        <el-tabs>
          <el-tab-pane label="basic">
            <demo-label-config-panel
              v-model:visible="configs.node.label.visible"
              v-model:fontFamily="configs.node.label.fontFamily"
              v-model:fontSize="configs.node.label.fontSize"
              v-model:lineHeight="configs.node.label.lineHeight"
              v-model:color="configs.node.label.color"
              v-model:margin="configs.node.label.margin"
              v-model:direction="configs.node.label.direction"
            />
          </el-tab-pane>
          <el-tab-pane label="background">
            <demo-label-background-config-panel
              v-model:visible="configs.node.label.background.visible"
              v-model:color="configs.node.label.background.color"
              v-model:paddingVertical="configs.node.label.background.padding.vertical"
              v-model:paddingHorizontal="
                configs.node.label.background.padding.horizontal
              "
              v-model:borderRadius="configs.node.label.background.borderRadius"
            />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="Focus">
        <demo-focus-config-panel
          v-model:visible="configs.node.focusring.visible"
          v-model:width="configs.node.focusring.width"
          v-model:padding="configs.node.focusring.padding"
          v-model:color="configs.node.focusring.color"
          v-model:dasharray="configs.node.focusring.dasharray"
        />
      </el-tab-pane>
      <el-tab-pane label="Edge">
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
          <el-tab-pane label="multiple edge">
            <demo-multiple-edge-config-panel
              v-model:gap="configs.edge.gap"
              v-model:line-type="configs.edge.type"
              v-model:summarize="configs.edge.summarize"
            />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="Summarized Edge">
        <el-tabs>
          <el-tab-pane label="stroke">
            <demo-edge-config-panel
              v-model:width="configs.edge.summarized.stroke.width"
              v-model:color="configs.edge.summarized.stroke.color"
              v-model:dasharray="configs.edge.summarized.stroke.dasharray"
              v-model:linecap="configs.edge.summarized.stroke.linecap"
              v-model:animate="configs.edge.summarized.stroke.animate"
              v-model:animationSpeed="configs.edge.summarized.stroke.animationSpeed"
            />
          </el-tab-pane>
          <el-tab-pane label="label">
            <demo-summarized-edge-label-config-panel
              v-model:labelFontSize="configs.edge.summarized.label.fontSize"
              v-model:labelColor="configs.edge.summarized.label.color"
              v-model:type="configs.edge.summarized.shape.type"
              v-model:radius="configs.edge.summarized.shape.radius"
              v-model:width="configs.edge.summarized.shape.width"
              v-model:height="configs.edge.summarized.shape.height"
              v-model:borderRadius="configs.edge.summarized.shape.borderRadius"
              v-model:strokeWidth="configs.edge.summarized.shape.strokeWidth"
              v-model:strokeColor="configs.edge.summarized.shape.strokeColor"
              v-model:strokeDasharray="configs.edge.summarized.shape.strokeDasharray"
              v-model:color="configs.edge.summarized.shape.color"
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
