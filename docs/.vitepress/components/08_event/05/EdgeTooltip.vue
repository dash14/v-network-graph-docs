<script setup lang="ts">
import { computed, ref, watch } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

// ref="graph"
const graph = ref<vNG.Instance>()
// ref="tooltip"
const tooltip = ref<HTMLDivElement>()

// positions of the center of nodes
const layouts = ref(data.layouts)

const EDGE_MARGIN_TOP = 2
const targetEdgeId = ref("")
const tooltipOpacity = ref(0) // 0 or 1
const tooltipPos = ref({ left: "0px", top: "0px" })

const edgeCenterPos = computed(() => {
  const edge = data.edges[targetEdgeId.value]
  if (!edge) return { x: 0, y: 0 }

  const sourceNode = data.edges[targetEdgeId.value].source
  const targetNode = data.edges[targetEdgeId.value].target
  return {
    x: (layouts.value.nodes[sourceNode].x + layouts.value.nodes[targetNode].x) / 2,
    y: (layouts.value.nodes[sourceNode].y + layouts.value.nodes[targetNode].y) / 2,
  }
})

// Update `tooltipPos`
watch(
  () => [edgeCenterPos.value, tooltipOpacity.value],
  () => {
    if (!graph.value || !tooltip.value) return { x: 0, y: 0 }
    if (!targetEdgeId.value) return { x: 0, y: 0 }

    // translate coordinates: SVG -> DOM
    const domPoint = graph.value.translateFromSvgToDomCoordinates(edgeCenterPos.value)
    // calculates top-left position of the tooltip.
    tooltipPos.value = {
      left: domPoint.x - tooltip.value.offsetWidth / 2 + "px",
      top: domPoint.y - EDGE_MARGIN_TOP - tooltip.value.offsetHeight - 10 + "px",
    }
  },
  { deep: true }
)

const eventHandlers: vNG.EventHandlers = {
  "edge:pointerover": ({ edge }) => {
    targetEdgeId.value = edge ?? ""
    tooltipOpacity.value = 1 // show
  },
  "edge:pointerout": _ => {
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
      <div>
        {{ `${data.edges[targetEdgeId]?.name ?? ""}` }}
      </div>
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
  padding: 10px;
  text-align: center;
  font-size: 12px;
  background-color: #fff0bd;
  border: 1px solid #ffb950;
  box-shadow: 2px 2px 2px #aaa;
  transition: opacity 0.2s linear;
}
</style>
