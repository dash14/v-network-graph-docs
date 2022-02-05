import { Nodes, Edges, Layouts, defineConfigs } from "v-network-graph"

const nodes: Nodes = {
  node1: { name: "Node 1" },
  node2: { name: "Node 2" },
  node3: { name: "Node 3" },
  node4: { name: "Node 4" },
}

const edges: Edges = {
  edge1: { source: "node1", target: "node2", name: "Edge 1" },
  edge2: { source: "node2", target: "node3", name: "Edge 2" },
  edge3: { source: "node3", target: "node4", name: "Edge 3" },
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
  node: {
    label: {
      visible: false,
    },
    selectable: false,
  },
  edge: {
    normal: {
      width: 5,
    },
  },
})

export default {
  nodes,
  edges,
  layouts,
  configs,
}
