<template>
  <div class="demo-control-panel">
    <demo-grid-panel
      v-model:visible="configs.view.grid.visible"
      v-model:interval="configs.view.grid.interval"
      v-model:thickIncrements="configs.view.grid.thickIncrements"
      v-model:normalColor="configs.view.grid.line.color"
      v-model:normalStrokeWidth="configs.view.grid.line.strokeWidth"
      v-model:normalStrokeDasharray="configs.view.grid.line.strokeDasharray"
      v-model:thickColor="configs.view.grid.thick.color"
      v-model:thickStrokeWidth="configs.view.grid.thick.strokeWidth"
      v-model:thickStrokeDasharray="configs.view.grid.thick.strokeDasharray"
    />
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { GridLayout } from "v-network-graph"
import data from "./data"

export default defineComponent({
  setup() {
    const configs = reactive({
      view: {
        grid: {
          visible: true,
          interval: 10,
          thickIncrements: 5,
          line: {
            color: "#e0e0e0",
            strokeWidth: 1,
            strokeDasharray: 1,
          },
          thick: {
            color: "#cccccc",
            strokeWidth: 1,
            strokeDasharray: 0,
          },
        },
        layoutHandler: new GridLayout({ grid: 10 }),
      },
    })

    return { data, configs }
  },
})
</script>
