<script setup lang="ts">
import * as vNG from "v-network-graph"
import { reactive } from "vue"
import data from "./data"

const configs = reactive(
  vNG.defineConfigs({
    view: {
      grid: {
        visible: true,
        interval: 10,
        thickIncrements: 5,
        line: {
          color: "#e0e0e0",
          width: 1,
          dasharray: 1,
        },
        thick: {
          color: "#cccccc",
          width: 1,
          dasharray: 0,
        },
      },
      layoutHandler: new vNG.GridLayout({ grid: 10 }),
    },
  })
)
</script>

<template>
  <div class="demo-control-panel">
    <demo-grid-panel
      v-model:visible="configs.view.grid.visible"
      v-model:interval="configs.view.grid.interval"
      v-model:thick-increments="configs.view.grid.thickIncrements"
      v-model:normal-color="configs.view.grid.line.color"
      v-model:normal-width="configs.view.grid.line.width"
      v-model:normal-dasharray="configs.view.grid.line.dasharray"
      v-model:thick-color="configs.view.grid.thick.color"
      v-model:thick-width="configs.view.grid.thick.width"
      v-model:thick-dasharray="configs.view.grid.thick.dasharray"
    />
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>
