<script setup lang="ts">
import * as vNG from "v-network-graph"
import { reactive, ref } from "vue"
import data from "./data"

const verticalAlign = ref("above")

const configs = reactive(
  vNG.defineConfigs({
    node: {
      label: {
        visible: false,
      },
    },
    edge: {
      label: {
        fontFamily: undefined,
        fontSize: 11,
        lineHeight: 1.1,
        color: "#000000",
        margin: 4,
        background: {
          visible: true,
          color: "#ffffff",
          padding: {
            vertical: 1,
            horizontal: 4,
          },
          borderRadius: 2,
        },
      },
    },
  })
)
</script>

<template>
  <div class="demo-control-panel">
    <el-tabs type="border-card">
      <el-tab-pane label="Label">
        <demo-label-config-panel
          v-model:font-family="configs.edge.label.fontFamily"
          v-model:font-size="configs.edge.label.fontSize"
          v-model:color="configs.edge.label.color"
          v-model:margin="configs.edge.label.margin"
          v-model:location="verticalAlign"
        />
      </el-tab-pane>
      <el-tab-pane label="Background">
        <demo-label-background-config-panel
          v-model:visible="configs.edge.label.background.visible"
          v-model:padding-vertical="configs.edge.label.background.padding.vertical"
          v-model:padding-horizontal="configs.edge.label.background.padding.horizontal"
          v-model:color="configs.edge.label.background.color"
          v-model:border-radius="configs.edge.label.background.borderRadius"
        />
      </el-tab-pane>
    </el-tabs>
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  >
    <template #edge-label="{ edge, ...slotProps }">
      <v-edge-label
        :text="edge.label"
        align="center"
        :vertical-align="verticalAlign"
        v-bind="slotProps"
      />
    </template>
  </v-network-graph>
</template>
