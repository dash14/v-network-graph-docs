import { Nodes, Edges, Layouts } from "v-network-graph"

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
}

const layouts: Layouts = {
  nodes: {
    node1: { x: 100, y: 100 },
    node2: { x: 200, y: 200 },
    node3: { x: 300, y: 100 },
    node4: { x: 400, y: 200 },
  },
}

export default {
  nodes,
  edges,
  layouts,
}
