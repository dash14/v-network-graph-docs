<script setup lang="ts">
import { Paths, UserConfigs } from "v-network-graph"
import data from "./data"

const paths: Paths = [
  { edges: ["edge1", "edge3", "edge5", "edge7"] },
  { edges: ["edge2", "edge4", "edge6", "edge10"] },
]

const configs: UserConfigs = {
  node: {
    normal: { type: "circle", radius: 20, color: "#99ccff" },
    hover: { color: "#88bbff" },
    label: { visible: false, fontSize: 8 },
  },
  edge: {
    gap: 12,
    normal: { color: "#6699cc" },
  },
  path: {
    visible: true,
    path: {
      width: 10,
      dasharray: "10 16",
      animate: true,
      animationSpeed: 40,
    },
  },
}
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :paths="paths"
    :configs="configs"
  />
</template>
