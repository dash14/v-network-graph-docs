<script setup lang="ts">
import { computed, ref, watch } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"
import { Point } from "v-network-graph"

// ref="graph"
const graph = ref<vNG.Instance>()
// ref="tooltip"
const tooltip = ref<HTMLDivElement>()

// positions of the center of nodes
const layouts = ref(data.layouts)

const NODE_RADIUS = 16
const targetNodeId = ref<string>("")
const tooltipOpacity = ref(0) // 0 or 1
const tooltipPos = ref({ left: "0px", top: "0px" })

const targetNodePos = computed(() => {
  const nodePos = layouts.value.nodes[targetNodeId.value]
  return nodePos || { x: 0, y: 0 }
})

// Update `tooltipPos`
watch(
  () => [targetNodePos.value, tooltipOpacity.value],
  () => {
    if (!graph.value || !tooltip.value) return

    // translate coordinates: SVG -> DOM
    const domPoint = graph.value.translateFromSvgToDomCoordinates(targetNodePos.value)
    // calculates top-left position of the tooltip.
    tooltipPos.value = {
      left: domPoint.x - tooltip.value.offsetWidth / 2 + "px",
      top: domPoint.y - NODE_RADIUS - tooltip.value.offsetHeight - 10 + "px",
    }
  },
  { deep: true }
)

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
    <div
      ref="tooltip"
      class="tooltip"
      :style="{ ...tooltipPos, opacity: tooltipOpacity }"
    >
      <div>{{ data.nodes[targetNodeId]?.name ?? "" }}</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
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
