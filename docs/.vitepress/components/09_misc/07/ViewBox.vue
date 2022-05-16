<script setup lang="ts">
import { ref, reactive } from "vue"
import * as vNG from "v-network-graph"

import data from "./data"

const configs = reactive(
  vNG.defineConfigs({
    node: {
      normal: { radius: 20 },
      label: { visible: false },
    },
  })
)

const graph = ref<vNG.VNetworkGraphInstance>()

function setViewBoxToRedZone() {
  graph.value?.setViewBox({
    left: 50,
    top: 50,
    right: 450,
    bottom: 250,
  })
}

const savedViewBox = ref<vNG.Box>()

function saveViewBox() {
  savedViewBox.value = graph.value?.getViewBox()
}

function restoreViewBox() {
  if (!savedViewBox.value) return
  graph.value?.setViewBox(savedViewBox.value)
}
</script>

<template>
  <div class="demo-control-panel">
    <el-button @click="setViewBoxToRedZone">Set viewing area to RED zone</el-button>
    &nbsp;
    <el-button @click="saveViewBox">Save viewing box</el-button>
    <template v-if="savedViewBox">
      <el-button @click="restoreViewBox">Restore</el-button>
      <div class="box-data">
        { top: {{ Math.floor(savedViewBox.top) }}, bottom:
        {{ Math.floor(savedViewBox.bottom) }}, left:
        {{ Math.floor(savedViewBox.left) }}, right:
        {{ Math.floor(savedViewBox.right) }} }
      </div>
    </template>
  </div>

  <v-network-graph
    ref="graph"
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
    :layers="{ redZone: 'base' }"
  >
    <!-- Draw a rectangle with a red background -->
    <defs>
      <component :is="'style'">
        <!-- prettier-ignore -->
        .point { fill: #ff000080; }
        .coords { font-size: 11px; fill: #444; }
        .lt { text-anchor: start; dominant-baseline: hanging; transform: translate(5px, 5px); }
        .rt { text-anchor: end; dominant-baseline: hanging; transform: translate(-5px, 5px); }
        .lb { text-anchor: start; dominant-baseline: ideographic; transform: translate(5px, -5px); }
        .rb { text-anchor: end; dominant-baseline: ideographic; transform: translate(-5px, -5px); }
      </component>
    </defs>
    <template #redZone>
      <rect x="50" y="50" width="400" height="200" fill="#ff000030" />
      <circle cx="50" cy="50" r="5" class="point" />
      <circle cx="450" cy="50" r="5" class="point" />
      <circle cx="50" cy="250" r="5" class="point" />
      <circle cx="450" cy="250" r="5" class="point" />
      <text x="50" y="50" class="coords lt">(50, 50)</text>
      <text x="450" y="50" class="coords rt">(450, 50)</text>
      <text x="50" y="250" class="coords lb">(50, 450)</text>
      <text x="450" y="250" class="coords rb">(450, 450)</text>
    </template>
  </v-network-graph>
</template>

<style scoped>
.box-data {
  margin-left: 10px;
  font-size: 90%;
  color: #444;
}
</style>
