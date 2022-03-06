<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const configs = reactive(
  vNG.defineConfigs({
    view: {
      autoPanOnResize: true,
    },
  })
)
</script>

<template>
  <div class="demo-control-panel">
    <el-checkbox v-model="configs.view.autoPanOnResize"
      >Auto panning on resize</el-checkbox
    >
  </div>

  <div class="outer-box">
    <div class="resizable">
      <div class="handle"></div>
      <v-network-graph
        ref="graph"
        :nodes="data.nodes"
        :edges="data.edges"
        :layouts="data.layouts"
        :configs="configs"
      />
    </div>
  </div>
</template>

<style scoped>
.outer-box {
  margin: 12px;
  width: calc(100% - 12px * 2);
  height: 400px;
  position: relative;
  background-color: #aaaaaa;
}
.resizable {
  position: relative;
  resize: both;
  overflow: hidden;
  min-width: 100px;
  min-height: 100px;
  max-width: 100%;
  max-height: 100%;
  width: 90%;
  height: 90%;
  border: 1px solid #444444;
  background-color: #ffffff;
}
.handle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid #ff8f8f;
  border-bottom: 8px solid #ff8f8f;
  pointer-events: none;
}
</style>
