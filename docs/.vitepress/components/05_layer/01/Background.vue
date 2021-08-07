<template>
  <v-network-graph
    ref="graph"
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :configs="data.configs"
    :layers="layers"
  >
    <!-- Addtional layer -->
    <template #worldmap>
      <image
        :href="withBase('/worldmap.svg')"
        x="0"
        y="0"
        width="1000px"
        @load="onLoadImage"
      />
    </template>
  </v-network-graph>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { VNetworkGraph } from "v-network-graph"
import { withBase } from "vitepress"
import data from "./data"

export default defineComponent({
  setup() {
    // additional layers definition
    const layers = {
      // {layername}: {position}
      worldmap: "background",
    }

    // ref="graph"
    const graph = ref<InstanceType<typeof VNetworkGraph>>()
    const onLoadImage = () => {
      graph.value?.fitToContents()
    }
    return { data, layers, graph, onLoadImage, withBase }
  },
})
</script>
