import { Nodes, Edges, Layouts, defineConfigs } from "v-network-graph"

const nodes: Nodes = {
  node1: { name: "Node 1" },
  node2: { name: "Node 2" },
  node3: { name: "Node 3" },
  node4: { name: "Node 4" },
}

const edges: Edges = {
  edge1: { source: "node1", target: "node2" },
  edge2: { source: "node2", target: "node3" },
  edge3: { source: "node3", target: "node4" },
  edge4: { source: "node3", target: "node4" },
  edge5: { source: "node3", target: "node4" },
  edge6: { source: "node3", target: "node4" },
  edge7: { source: "node3", target: "node4" },
  edge8: { source: "node3", target: "node4" },
  edge9: { source: "node3", target: "node4" },
  edge10: { source: "node3", target: "node4" },
  edge11: { source: "node3", target: "node4" },
  edge12: { source: "node3", target: "node4" },
}

const layouts: Layouts = {
  nodes: {
    node1: { x: 0, y: 0 },
    node2: { x: 80, y: 80 },
    node3: { x: 160, y: 0 },
    node4: { x: 240, y: 80 },
  },
}

const configs = defineConfigs({
  edge: {
    normal: {
      width: 3,
    },
  },
})

export default {
  nodes,
  edges,
  layouts,
  configs,
}
