<script setup lang="ts">
const nodes = [
  { id: "node1", name: "Node 1" },
  { id: "node2", name: "Node 2" },
  { id: "node3", name: "Node 3" },
  { id: "node4", name: "Node 4" },
]

const edges = [
  { id: "edge1", source: "node1", target: "node2" },
  { id: "edge2", source: "node2", target: "node3" },
  { id: "edge3", source: "node3", target: "node4" },
]
</script>

<template>
  <v-network-graph :nodes="nodes" :edges="edges" />
</template>
