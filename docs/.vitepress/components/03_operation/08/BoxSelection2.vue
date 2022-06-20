<script setup lang="ts">
import { ref } from "vue"
import { defineConfigs, VNetworkGraphInstance, EventHandlers } from "v-network-graph"
import data from "./data"

const graph = ref<VNetworkGraphInstance>()

const configs = defineConfigs({
  node: {
    selectable: true,
  },
})

const isBoxSelectionMode = ref(false)
const eventHandlers: EventHandlers = {
  "view:mode": mode => {
    // Observe mode change events
    isBoxSelectionMode.value = mode === "box-selection"
  },
}

function startBoxSelection() {
  graph.value?.startBoxSelection({
    stop: "click", // Trigger to exit box-selection mode
    type: "append", // Behavior when a node is within a selection rectangle
    withShiftKey: "invert", // `type` value if the shift key is pressed
  })
}

function stopBoxSelection() {
  graph.value?.stopBoxSelection()
}
</script>

<template>
  <div class="demo-control-panel">
    <el-button
      type="primary"
      :disabled="isBoxSelectionMode"
      @click="startBoxSelection"
      >Start to selection</el-button
    >
    <el-button
      type="primary"
      :disabled="!isBoxSelectionMode"
      @click="stopBoxSelection"
      >Stop to selection</el-button
    >
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
