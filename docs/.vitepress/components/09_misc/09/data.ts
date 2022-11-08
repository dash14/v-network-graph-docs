import * as vNG from "v-network-graph"

export interface TreeNode extends vNG.Node {
  id: string
  name: string
  collapse?: boolean
  children?: Record<string, TreeNode>
}

export type TreeNodes = Record<string, TreeNode>

export const nodeTree: TreeNodes = {
  groupA: {
    id: "groupA",
    name: "Group A",
    collapse: false,
    children: {
      node1: {
        id: "groupA/node1",
        name: "Node 1",
      },
      node2: {
        id: "groupA/node2",
        name: "Node 2",
      },
      node3: {
        id: "groupA/node3",
        name: "Node 3",
      },
    },
  },
  groupB: {
    id: "groupB",
    name: "Group B",
    collapse: false,
    children: {
      node1: {
        id: "groupB/node1",
        name: "Node 1",
      },
      node2: {
        id: "groupB/node2",
        name: "Node 2",
      },
      node3: {
        id: "groupB/node3",
        name: "Node 3",
      },
    },
  },
  groupC: {
    id: "groupC",
    name: "Group C",
    collapse: false,
    children: {
      node1: {
        id: "groupC/node1",
        name: "Node 1",
      },
      node2: {
        id: "groupC/node2",
        name: "Node 2",
      },
      node3: {
        id: "groupC/node3",
        name: "Node 3",
      },
    },
  },
}

export const edges: vNG.Edges = {
  edge1: { source: "groupA", target: "groupB" },
  edge2: { source: "groupB", target: "groupC" },
  edge3: { source: "groupC", target: "groupA" },
  // Group A
  edgeA_1: { source: "groupA", target: "groupA/node1" },
  edgeA_2: { source: "groupA", target: "groupA/node2" },
  edgeA_3: { source: "groupA", target: "groupA/node3" },
  // Group B
  edgeB_1: { source: "groupB", target: "groupB/node1" },
  edgeB_2: { source: "groupB", target: "groupB/node2" },
  edgeB_3: { source: "groupB", target: "groupB/node3" },
  // Group C
  edgeC_1: { source: "groupC", target: "groupC/node1" },
  edgeC_2: { source: "groupC", target: "groupC/node2" },
  edgeC_3: { source: "groupC", target: "groupC/node3" },
}

export const layouts: vNG.Layouts = {
  nodes: {
    "groupA": { x: 0.0, y: -60.0 },
    "groupA/node1": { x: -86.8, y: -115.5 },
    "groupA/node2": { x: 0.8, y: -163.7 },
    "groupA/node3": { x: 87.2, y: -113.3 },
    "groupB": { x: -53.0, y: 32.0 },
    "groupB/node1": { x: -143.1, y: -15.2 },
    "groupB/node2": { x: -140.5, y: 84.7 },
    "groupB/node3": { x: -53.4, y: 133.8 },
    "groupC": { x: 53.0, y: 32.0 },
    "groupC/node1": { x: 140.7, y: -22.1 },
    "groupC/node2": { x: 144.3, y: 77.8 },
    "groupC/node3": { x: 50.3, y: 132.2 },
  },
}
