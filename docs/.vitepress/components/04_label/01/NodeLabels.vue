<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const initialConfigs = vNG.defineConfigs({
  node: {
    label: {
      visible: true,
      fontFamily: undefined,
      fontSize: 11,
      lineHeight: 1.1,
      color: "#000000",
      margin: 4,
      direction: "south",
      text: "name",
    },
  },
})
const configs = reactive(initialConfigs)
</script>

<template>
  <div class="demo-control-panel">
    <el-tabs type="border-card">
      <el-tab-pane label="Content">
        <div class="control">
          <label>Field to show on the label:</label>
          <el-select v-model="configs.node.label.text">
            <el-option label="id" value="id" />
            <el-option label="name" value="name" />
            <el-option label="type" value="type" />
          </el-select>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Appearance">
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
    </el-tabs>
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
