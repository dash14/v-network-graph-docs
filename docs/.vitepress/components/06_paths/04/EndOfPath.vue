<script setup lang="ts">
import { reactive } from "vue"
import * as vNG from "v-network-graph"
import data from "./data"

const paths: vNG.Paths = [
  { edges: ["edge1", "edge3", "edge5", "edge7"] },
  { edges: ["edge2", "edge4", "edge6", "edge10"] },
]

const configs = reactive(
  vNG.defineConfigs({
    node: {
      normal: {
        type: "circle",
        radius: 20,
        color: "#99ccff",
      },
      hover: {
        color: "#88bbff",
      },
      label: {
        visible: false,
        fontSize: 8,
      },
    },
    edge: {
      gap: 12,
      normal: {
        color: "#6699cc",
      },
    },
    path: {
      visible: true,
      curveInNode: false,
      end: "centerOfNode", // "centerOfNode" or "edgeOfNode"
      margin: 0,
      path: {
        width: 10,
        color: "#ff800088",
        dasharray: "",
        linecap: "round",
        linejoin: "round",
        animate: false,
        animationSpeed: 50,
      },
    },
  })
)
</script>

<template>
  <div class="demo-control-panel">
    <demo-path-config-panel
      v-model:end="configs.path.end"
      v-model:margin="configs.path.margin"
      v-model:curveInNode="configs.path.curveInNode"
      v-model:width="configs.path.path.width"
      v-model:color="configs.path.path.color"
      v-model:dasharray="configs.path.path.dasharray"
      v-model:linecap="configs.path.path.linecap"
      v-model:animate="configs.path.path.animate"
      v-model:animationSpeed="configs.path.path.animationSpeed"
    />
  </div>

  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :paths="paths"
    :configs="configs"
  />
</template>
