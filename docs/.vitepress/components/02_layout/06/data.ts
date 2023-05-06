import { Nodes, Edges } from "v-network-graph"

const nodes: Nodes = {
  node0: {},
  node1: {},
  node2: {},
  node3: {},
  node4: {},
  node5: {},
  node6: {},
  node7: {},
  node8: {},
  node9: {},
  node10: {},
  node11: {},
  node12: {},
  node13: {},
  node14: {},
  node15: {},
  node16: {},
  node17: {},
  node18: {},
  node19: {},
}

const edges: Edges = {
  "edge0-5": { source: "node0", target: "node5" },
  "edge1-0": { source: "node1", target: "node0" },
  "edge2-0": { source: "node2", target: "node0" },
  "edge3-0": { source: "node3", target: "node0" },
  "edge4-0": { source: "node4", target: "node0" },
  "edge5-10": { source: "node5", target: "node10" },
  "edge6-5": { source: "node6", target: "node5" },
  "edge7-5": { source: "node7", target: "node5" },
  "edge8-5": { source: "node8", target: "node5" },
  "edge9-5": { source: "node9", target: "node5" },
  "edge10-15": { source: "node10", target: "node15" },
  "edge11-10": { source: "node11", target: "node10" },
  "edge12-10": { source: "node12", target: "node10" },
  "edge13-10": { source: "node13", target: "node10" },
  "edge14-10": { source: "node14", target: "node10" },
  "edge15-0": { source: "node15", target: "node0" },
  "edge16-15": { source: "node16", target: "node15" },
  "edge17-15": { source: "node17", target: "node15" },
  "edge18-15": { source: "node18", target: "node15" },
  "edge19-15": { source: "node19", target: "node15" },
}

export default {
  nodes,
  edges,
}
