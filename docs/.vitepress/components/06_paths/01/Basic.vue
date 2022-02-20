<script setup lang="ts">
import * as vNG from "v-network-graph"
import data from "./data"

const paths: vNG.Paths = {
  path1: { edges: ["edge1", "edge3", "edge5", "edge7"] },
  path2: { edges: ["edge2", "edge4", "edge6", "edge10"] },
}
// Like nodes and edges, Path can be specified as an array.
// In this case, the element must have an `id` field and
// it must be unique in the array.
// An example is shown below:
// const paths: vNG.PathWithId[] = [
//   { id: "path1", edges: ["edge1", "edge3", "edge5", "edge7"] },
//   { id: "path2", edges: ["edge2", "edge4", "edge6", "edge10"] },
// ]
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :paths="paths"
    :configs="data.configs"
  />
</template>
