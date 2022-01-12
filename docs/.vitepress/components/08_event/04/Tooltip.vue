<script setup lang="ts">
import { computed, reactive, ref } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

// ref="graph"
const graph = ref<vNG.Instance>()
// ref="tooltip"
const tooltip = ref<HTMLDivElement>()

// positions of the center of nodes
const layouts = ref(data.layouts)

const NODE_RADIUS = 16
const targetNodeId = ref("")

const tooltipPos = computed(() => {
  if (!graph.value || !tooltip.value) return { x: 0, y: 0 }
  if (!targetNodeId.value) return { x: 0, y: 0 }

  const nodePos = layouts.value.nodes[targetNodeId.value]
  // translate coordinates: SVG -> DOM
  const domPoint = graph.value.translateFromSvgToDomCoordinates(nodePos)
  // calculates top-left position of the tooltip.
  return {
    left: domPoint.x - tooltip.value.offsetWidth / 2 + "px",
    top: domPoint.y - NODE_RADIUS - tooltip.value.offsetHeight - 10 + "px",
  }
})
const tooltipOpacity = ref(0) // 0 or 1

const eventHandlers: vNG.EventHandlers = {
  "node:pointerover": ({ node }) => {
    targetNodeId.value = node
    tooltipOpacity.value = 1 // show
  },
  "node:pointerout": _ => {
    tooltipOpacity.value = 0 // hide
  },
}
</script>

<template>
  <div class="tooltip-wrapper">
    <v-network-graph
      ref="graph"
      :nodes="data.nodes"
      :edges="data.edges"
      v-model:layouts="layouts"
      :configs="data.configs"
      :event-handlers="eventHandlers"
    />
    <!-- Tooltip -->
    <div ref="tooltip" class="tooltip" :style="{ ...tooltipPos, opacity: tooltipOpacity }">
      <div>{{ data.nodes[targetNodeId]?.name ?? "" }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tooltip-wrapper {
  position: relative;
}
.tooltip {
  top: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  width: 80px;
  height: 36px;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  background-color: #fff0bd;
  border: 1px solid #ffb950;
  box-shadow: 2px 2px 2px #aaa;
  transition: opacity 0.2s linear;
}
</style>
