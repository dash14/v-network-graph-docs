import { Nodes, Edges, Layouts, UserConfigs } from "v-network-graph"

const nodes: Nodes = {
  node1: { name: "N1" },
  node2: { name: "N2" },
  node3: { name: "N3" },
}

const edges: Edges = {
  edge1: { source: "node1", target: "node2" },
  edge2: { source: "node2", target: "node3" },
  edge3: { source: "node3", target: "node1" },
}

const layouts: Layouts = {
  nodes: {
    node1: { x: 50, y: 0 },
    node2: { x: 0, y: 75 },
    node3: { x: 100, y: 75 },
  },
}

const configs: UserConfigs = {
  node: {
    selectable: true,
  },
  edge: {
    selectable: true,
  },
}

export default {
  nodes,
  edges,
  layouts,
  configs,
}
