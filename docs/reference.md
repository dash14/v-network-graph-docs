# Reference for &lt;v-network-graph&gt;

## Attributes

<div class="reference-table">

| Attribute      | Description                     | Type          | Required | Default | Update |
| -------------- | ------------------------------- | ------------- | -------- | ------- | ------ |
| nodes          | nodes in the graph              | Nodes         | true     | -       | no     |
| edges          | edges in the graph              | Edges         | true     | -       | no     |
| layouts        | positions of the nodes          | Layouts       | false    | {}      | yes    |
| selected-nodes | node ID list user selected      | string[]      | false    | []      | yes    |
| selected-edges | edge ID list user selected      | string[]      | false    | []      | yes    |
| zoom-level     | zoom level                      | number        | false    | 1.0     | yes    |
| configs        | configurations                  | UserConfigs   | false    | {}      | no     |
| layers         | additional layers               | Layers        | false    | {}      | no     |
| event-handlers | handlers to get detailed events | EventHandlers | false    | {}      | no     |

Attributes with the "Update" column set to yes will receive the update data
with 2-way binding using v-model:attribute.

See below for definitions of the original interface types listed in the Type column.  
(cf. https://github.com/dash14/v-network-graph/blob/main/src/common/types.ts)

</div>

<div class="reference-attributes-types">

### Nodes:

```js
{
  "NODE_ID": { /* with arbitrary information of this node */ },
  ...
}
```

### Edges:

```js
{
  "EDGE_ID": {
    source: "SOURCE_NODE_ID",
    target: "TARGET_NODE_ID",
    /* with arbitrary information of this edge */
  },
  ...
}
```

### Layouts:

```js
{
  "nodes": {
    "NODE_ID": { x: POS_X, y: POS_Y },
    ...
  }
}
```

### UserConfigs:

See ["Configurations"](#configurations)

### Layers:

```js
{
  "LAYER_ID": POSITION, // "nodes" | "focusring" | "edges" | "background"
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

See also [Events (with event-handler)](#events-with-event-handler).  
For more information of `type` and `event`, please refer to the following URL.  
https://github.com/dash14/v-network-graph/blob/main/src/common/types.ts#L63

</div>

## Configurations

Indicates the contents to be specified in the `configs` of attributes.  
All fields are optional.
Values that are not specified will be used as default values.

<div class="reference-configs">

```ts
{
  view: {
    scalingObjects: boolean, // whether to expand the entire object. default: false
    panEnabled: boolean,     // whether the pan is enabled or not.   default: true
    zoomEnabled: boolean,    // whether the zoom is enabled or not.  default: true
    minZoomLevel: number,    // minimum zoom level.                  default: 0.1
    maxZoomLevel: number,    // maximum zoom level.                  default: 64
    layoutHandler: LayoutHandler, // class to control node layout.   default: new SimpleLayout()
    onSvgPanZoomInitialized: undefined | (instance) => void // callback on init svg-pan-zoom. default: undefined
  },
  node: {
    normal: {
      // * These fields can also be specified with the function as `(node) => value`.
      type: "circle" | "rect",  // shape type.            default: "circle"
      radius: number,           // radius of circle.      default: 16
      width: number,            // width of rect.         default: (not specified)
      height: number,           // height of rect.        default: (not specified)
      borderRadius: number,     // border radius of rect. default: (not specified)
      color: string,            // fill color.            default: "#4466cc"
      strokeWidth: number,      // stroke width.          default: 0
      strokeColor: string | undefined,              // stroke color.      default: "#000000"
      strokeDasharray: number | string | undefined  // stroke dash array. default: 0
    },
    hover: { /* same structure as `node.normal`. */ } | undefined,
        // default: {
        //   color: "#3355bb",
        //   ... all other values are same as `normal`
        // }
    selected: { /* same structure as `node.normal`. */ } | undefined,
        // default: undefined
    draggable: boolean,         // whether the node is draggable or not.  default: true
    selectable: boolean,        // whether the node is selectable or not. default: false
    label: {
      // * These fields can also be specified with the function as `(node) => value`.
      visible: boolean,         // whether the node's label is visible or not. default: true
      fontFamily: string | undefined,  // font family.      default: undefined
      fontSize: number,                // font size.        default: 11
      color: string,                   // font color.       default: "#000000"
      margin: number,                  // margin from node. default: 4
      direction: NodeLabelDirection,   // node label display direction. default: SOUTH
      text: string    // field name in the node object to use as the label. default: "name"
                      // if function is specified, the return value is string of label.
    },
    focusring: {
      visible: boolean, // whether the focus ring is visible or not.     default: true
      width: number,    // line width of the focus ring.                 default: 4
      padding: number,  // distance between the focus ring and the node. default: 3
      color: string     // fill color.                                   default: "#eebb00"
    }
  },
  edge: {
    normal: {
      // * These fields can also be specified with the function as `(edge) => value`.
      width: number,           // width of edge.                           default: 2
      color: string,           // line color.                              default: "#4466cc"
      dasharray: number | string | undefined,        // stroke dash array. default: 0
      linecap: "butt" | "round" | "square" | undefined, // stroke linecap. default: "butt"
      animate: boolean,        // whether to animate or not.               default: false
      animationSpeed: number   // animation speed.                         default: 100
    },
    hover: { /* same structure as `normal`. */ } | undefined,
        // default: {
        //   color: "#3355bb",
        //   ... all other values are same as `edge.normal`
        // },
    selected: { /* same structure as `normal`. */ } | undefined,
        // default: {
        //   color: "#dd8800",
        //   dasharray: (wider than `normal`),
        //   ... all other values are same as `edge.normal`
        // }
    selectable: boolean,   // whether the edge is selectable or not. default: false
    gap: number,           // distance between edges. default: 3
    summarize: boolean | ((edges: Edges, configs: Configs) => boolean),
        // true : summarize when the width of the edge becomes larger than the node.
        // false: do not summarize.
        // func : function to determine whether to summarize from edge list between nodes.
        // default: true
    summarized: { // configs for summarized edge
      label: {
        fontSize: number,  // font size.  default: 10
        color: string      // font color. default: "#4466cc"
      },
      shape: { /* same structure as `node.normal`. */ },
        // default: {
        //   type: "rect",
        //   width: 12,
        //   height: 12,
        //   borderRadius: 3,
        //   color: "#ffffff",
        //   strokeWidth: 1,
        //   strokeColor: "#4466cc",
        //   strokeDasharray: undefined
        // }
      stroke: { /* same structure as `edge.normal`. */ }
        // default: {
        //   width: 5,
        //   color: "#4466cc",
        //   dasharray: undefined,
        //   linecap: undefined,
        //   animate: false,
        //   animationSpeed: 100
        // }
      }
    }
  }
}
```

</div>

## Events (Vue component)

<div class="reference-table">

| Event                | Description           |
| -------------------- | --------------------- |
| update:zoomLevel     | update zoom level     |
| update:selectedNodes | update selected nodes |
| update:selectedEdges | update selected edges |
| update:layouts       | update layouts        |

</div>

## Events (with event-handler)

The following is a list of events that can be specified for attribute `event-handlers`.

<div class="reference-table">

| Event type         | Description          | Event value                                  |
| ------------------ | -------------------- | -------------------------------------------- |
| "view:load"        | component loaded     | `undefined`                                  |
| "view:unload"      | component unloaded   | `undefined`                                  |
| "view:mode"        | mouse mode changed   | `"default"` / `"node"` / `"edge"`            |
| "view:zoom"        | zoom level changed   | `number` (new zoom level)                    |
| "view:pan"         | panned               | `{ x: number; y: number }`                   |
| "view:fit"         | fitted               | `undefined`                                  |
| "node:click"       | node clicked         | `{ node: string, event: PointerEvent }`      |
| "node:pointerover" | pointer over on node | `{ node: string, event: PointerEvent }`      |
| "node:pointerout"  | pointer out on node  | `{ node: string, event: PointerEvent }`      |
| "node:pointerup"   | pointer up on node   | `{ node: string, event: PointerEvent }`      |
| "node:pointerdown" | pointer down on node | `{ node: string, event: PointerEvent }`      |
| "node:dragstart"   | node drag started    | `{ NODE_ID: { x: number; y: number }, ... }` |
| "node:pointermove" | pointer move on node | `{ node: string, event: PointerEvent }`      |
| "node:dragend"     | node drag ended      | `{ NODE_ID: { x: number; y: number }, ... }` |
| "node:select"      | node selected        | `[ NODE_ID, ...]`                            |
| "edge:pointerup"   | pointer up on edge   | `{ edge: string, event: PointerEvent }`      |
| "edge:pointerdown" | pointer down on edge | `{ edge: string, event: PointerEvent }`     |
| "edge:click"       | edge clicked         | `{ edge: string, event: PointerEvent }`     |
| "edge:select"      | edge selected        | `[ EDGE_ID, ... ]`                           |

</div>
