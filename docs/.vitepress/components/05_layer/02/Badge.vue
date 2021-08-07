<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="layouts"
    :configs="data.configs"
    :layers="layers"
  >
    <!-- Addtional layer -->
    <template #badge="{ scale }">
      <!--
        If the `view.scalingObjects` config is `false`(default),
        scaling does not change the display size of the nodes/edges.
        The `scale` is passed as a scaling factor to implement
        this behavior. -->
      <circle
        v-for="(pos, node) in layouts.nodes" :key="node"
        :cx="pos.x + 9 * scale"
        :cy="pos.y - 9 * scale"
        :r="4 * scale"
        :fill="data.nodes[node].active ? '#00cc00' : '#ff5555'"
      />
    </template>
  </v-network-graph>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import data from "./data"

export default defineComponent({
  setup() {
    // additional layers definition
    const layers = {
      // {layername}: {position}
      badge: "nodes",
    }

    // wrap with reactive() for immediate response to
    // position changes
    const layouts = reactive(data.layouts)

    return { data, layers, layouts }
  },
})
</script>
