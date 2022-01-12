import * as vNG from "v-network-graph"

export interface Edge extends vNG.Edge {
  selectable: boolean
}
type Edges = Record<string, Edge>

const nodes: vNG.Nodes = {
  node1: { name: "N1" },
  node2: { name: "N2" },
  node3: { name: "N3" },
}

const edges: Edges = {
  edge1: { source: "node1", target: "node2", selectable: true },
  edge2: { source: "node2", target: "node3", selectable: true },
  edge3: { source: "node3", target: "node1", selectable: false },
}

const layouts: vNG.Layouts = {
  nodes: {
    node1: { x: 50, y: 0 },
    node2: { x: 0, y: 75 },
    node3: { x: 100, y: 75 },
  },
}

export default {
  nodes,
  edges,
  layouts,
}
