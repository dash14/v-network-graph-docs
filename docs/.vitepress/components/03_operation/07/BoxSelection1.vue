<script setup lang="ts">
import { reactive, ref } from "vue"
import { defineConfigs, VNetworkGraphInstance, EventHandlers } from "v-network-graph"
import data from "./data"

const graph = ref<VNetworkGraphInstance>()

const configs = reactive(
  defineConfigs({
    view: {
      boxSelectionEnabled: false,
      selection: {
        box: {
          color: "#0000ff20",
          strokeWidth: 1,
          strokeColor: "#aaaaff",
          strokeDasharray: "0",
        },
      },
    },
    node: {
      selectable: true,
    },
  })
)

const isBoxSelectionMode = ref(false)
const eventHandlers: EventHandlers = {
  "view:mode": mode => {
    // Observe mode change events
    isBoxSelectionMode.value = mode === "box-selection"
  },
}

function startBoxSelection() {
  graph.value?.startBoxSelection()
}
</script>

<template>
  <div class="demo-control-panel">
    <demo-box-selection-panel
      :selecting="isBoxSelectionMode"
      v-model:color="configs.view.selection.box.color"
      v-model:strokeWidth="configs.view.selection.box.strokeWidth"
      v-model:strokeColor="configs.view.selection.box.strokeColor"
      v-model:strokeDasharray="configs.view.selection.box.strokeDasharray"
      v-model:startWithKeyDown="configs.view.boxSelectionEnabled"
      @button-click="startBoxSelection"
    />
  </div>

  <v-network-graph
    ref="graph"
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
    :event-handlers="eventHandlers"
  />

  <div v-if="isBoxSelectionMode" class="mode">box-selection mode</div>
</template>

<style scoped>
.mode {
  position: absolute;
  bottom: 10px;
  left: 10px;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 14px;
  color: #ffffff;
  background-color: #317dc9;
  font-style: italic;
  pointer-events: none;
}
</style>
