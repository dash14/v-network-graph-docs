<script setup lang="ts">
import * as vNG from "v-network-graph"
import data from "./data"

const configs = vNG.defineConfigs({
  node: {
    selectable: true,
  },
  edge: {
    selectable: true,
    normal: { color: "#5555dd" },
    hover: { color: "#dd5555" },
    selected: { color: "#dddd55" },
    gap: 10,
  },
})

/**
 * Make `transform` value of the object placing on the edge.
 * @param area - label area calculated by v-network-graph
 * @param scale - zooming scale
 */
function makeTransform(area: vNG.EdgeLabelArea, scale: number) {
  const x = (area.source.above.x + area.target.below.x) / 2
  const y = (area.source.above.y + area.target.below.y) / 2
  const radian = Math.atan2(
    area.target.above.y - area.source.above.y,
    area.target.above.x - area.source.above.x
  )
  const degree = (radian * 180.0) / Math.PI

  return [
    `translate(${x} ${y})`,
    `scale(${scale}, ${scale})`,
    `rotate(${degree})`,
  ].join(" ")
}
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  >
    <!-- To use CSS within SVG, use <defs>. -->
    <defs>
      <!-- Cannot use <style> directly due to restrictions of Vue. -->
      <component is="style">
        <!-- prettier-ignore -->
        .marker {
          fill: {{ configs.edge.normal.color }};
          transition: fill 0.1s linear;
          pointer-events: none;
        }
        .marker.hovered { fill: {{ configs.edge.hover.color }}; }
        .marker.selected { fill: {{ configs.edge.selected.color }}; }
      </component>
    </defs>
    <template #edge-label="{ scale, area, hovered, selected }">
      <!-- Triangle -->
      <path
        class="marker"
        :class="{ hovered, selected }"
        d="M-5 -5 L5 0 L-5 5 Z"
        :transform="makeTransform(area, scale)"
      />
    </template>
  </v-network-graph>
</template>
