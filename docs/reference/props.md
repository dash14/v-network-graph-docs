# Props

<div class="reference-table">

| Prop name      | Description                     | Type          | Required | Default | Update |
| -------------- | ------------------------------- | ------------- | -------- | ------- | ------ |
| nodes          | nodes in the graph              | Nodes         | true     | -       | no     |
| edges          | edges in the graph              | Edges         | true     | -       | no     |
| paths          | paths                           | Paths         | false    | {}      | no     |
| layouts        | positions of the nodes          | Layouts       | false    | {}      | yes    |
| selected-nodes | node ID list user selected      | string[]      | false    | []      | yes    |
| selected-edges | edge ID list user selected      | string[]      | false    | []      | yes    |
| selected-paths | path ID list user selected      | string[]      | false    | []      | yes    |
| zoom-level     | zoom level                      | number        | false    | 1.0     | yes    |
| configs        | configurations                  | UserConfigs   | false    | {}      | no     |
| layers         | additional layers               | Layers        | false    | {}      | no     |
| event-handlers | handlers to get detailed events | EventHandlers | false    | {}      | no     |

A prop with the Update column set to yes can receive updated data with
a 2-way binding using `v-model:{prop name}`.

See below for definitions of the original interface types listed in the Type column.  
(cf. https://github.com/dash14/v-network-graph/blob/main/src/common/types.ts)

</div>

<div class="reference-props-types">

### Nodes:

```js
{
  "NODE_ID1": { /* with arbitrary information of this node */ },
  "NODE_ID2": { ... },
  ...
}
```

### Edges:

```js
{
  "EDGE_ID1": {
    source: "SOURCE_NODE_ID",
    target: "TARGET_NODE_ID",
    /* with arbitrary information of this edge */
  },
  "EDGE_ID2": { ... },
  ...
}
```

### Paths:

```js
{
  "PATH_ID1": {
    /* The edge IDs through which the path passes: */
    edges: [ "EDGE_ID1", "EDGE_ID2", ... ]
    /* with arbitrary information of this node */
  },
  "PATH_ID2": { ... },
  ...
}
```

### Layouts:

```js
{
  "nodes": {
    "NODE_ID1": { x: POS_X, y: POS_Y },
    "NODE_ID2": { ... },
    ...
  }
}
```

### UserConfigs:

See the "[Configurations](./configurations.md)" page.

### Layers:

```js
{
  "LAYER_ID": POSITION, // "paths" | "nodes" | "focusring" | "edges" | "base" | "grid" | "background" | "root"
  ...
}
```

The layer specified by `"LAYER_ID"` will be placed above the layer
specified by `POSITION`.  
The actual drawing of the layer is done using v-slots.
Examples are in preparation.

### EventHandlers:

```js
{
  "*": (type, event) => { /* processing... */ },
  "EVENT_TYPE": (event) => { /* processing... */ },
  ...
}
```

See also [Events (with event-handlers)](./events.md#events-with-event-handlers).  
For more information of `type` and `event`, please refer to the following URL.  
https://github.com/dash14/v-network-graph/blob/main/src/common/types.ts#L147

</div>
