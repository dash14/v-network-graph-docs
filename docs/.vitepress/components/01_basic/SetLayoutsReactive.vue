<template>
  <v-network-graph
    v-model:layouts="layouts"
    :nodes="nodes"
    :edges="edges"
  />
  <pre class="layouts">{{ layoutsText }}</pre>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue"

export default defineComponent({
  setup() {
    const nodes = {
      node1: { name: "Node 1" },
      node2: { name: "Node 2" },
      node3: { name: "Node 3" },
      node4: { name: "Node 4" },
    }
    const edges = {
      edge1: { source: "node1", target: "node2" },
      edge2: { source: "node2", target: "node3" },
      edge3: { source: "node3", target: "node4" },
    }
    const layouts = reactive({
      nodes: {
        node1: { x: 0, y: 0 },
        node2: { x: 50, y: 50 },
        node3: { x: 100, y: 0  },
        node4: { x: 150, y: 50  },
      }
    })
    const layoutsText = computed(() => {
      return JSON.stringify(layouts, null, 2)
    })
    return { nodes, edges, layouts, layoutsText }
  },
})
</script>

<style scoped>
.layouts {
  position: absolute;
  inset: auto 10px 10px auto;
  padding: 10px;
  background: #ffff0044;
  border-radius: 4px;
  font-size: 10px;
  line-height: 11px;
}
</style>