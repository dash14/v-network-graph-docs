import * as vNG from "v-network-graph"

export interface Node extends vNG.Node {
  selectable: boolean
  draggable: boolean
}
type Nodes = Record<string, Node>

const nodes: Nodes = {
  node1: { name: "N1", selectable: true, draggable: true },
  node2: { name: "N2\nnot draggable", selectable: true, draggable: false },
  node3: { name: "N3\nnot selectable", selectable: false, draggable: true },
}

const edges: vNG.Edges = {
  edge1: { source: "node1", target: "node2" },
  edge2: { source: "node2", target: "node3" },
  edge3: { source: "node3", target: "node1" },
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
