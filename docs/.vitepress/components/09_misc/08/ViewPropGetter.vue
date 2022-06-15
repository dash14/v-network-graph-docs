<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted } from "vue"
import * as vNG from "v-network-graph"

import data from "./data"

const holdingShift = ref(false)
const holdingCtrl = ref(false)

const onKeyDown = (e: KeyboardEvent) => {
  if (e.shiftKey) holdingShift.value = true
  if (e.ctrlKey) holdingCtrl.value = true
}
const onKeyUp = (e: KeyboardEvent) => {
  if (!e.shiftKey) holdingShift.value = false
  if (!e.ctrlKey) holdingCtrl.value = false
}
onMounted(() => {
  document.addEventListener("keydown", onKeyDown)
  document.addEventListener("keyup", onKeyUp)
})
onUnmounted(() => {
  document.removeEventListener("keydown", onKeyDown)
  document.removeEventListener("keyup", onKeyUp)
})

const configs = vNG.defineConfigs({
  view: {
    get panEnabled() {
      return !holdingShift.value
    },
    get zoomEnabled() {
      return holdingCtrl.value
    },
  },
})
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="configs"
  />

  <div class="keys">
    <div>
      <div :class="{ holding: holdingShift }">Shift</div>
      Disable panning while holding shift key
    </div>
    <div>
      <div :class="{ holding: holdingCtrl }">Ctrl</div>
      Enable zooming while holding ctrl key
    </div>
  </div>
</template>

<style scoped>
.keys {
  position: absolute;
  left: 6px;
  bottom: 6px;
  display: flex;
  flex-direction: column;
  pointer-events: none;
}
.keys > div {
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  color: #666;
}
.keys > div > div {
  margin-right: 4px;
  text-align: center;
  width: 50px;
  padding: 2px;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #bbb;
  background-color: #eee;
}
.keys div.holding {
  border-color: #888;
  color: #444;
  background-color: #ccc;
}
</style>
