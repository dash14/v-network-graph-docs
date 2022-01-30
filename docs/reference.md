# Reference

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
    scalingObjects: boolean // whether to expand the entire object.    default: false
    panEnabled: boolean     // whether the pan is enabled or not.      default: true
    zoomEnabled: boolean    // whether the zoom is enabled or not.     default: true
    minZoomLevel: number    // minimum zoom level.                     default: 0.1
    maxZoomLevel: number    // maximum zoom level.                     default: 64
    doubleClickZoomEnabled: boolean  // Whether to zoom with double click. default: true
    mouseWheelZoomEnabled:  boolean  // Whether to zoom with mouse wheel or not. default: true
    fit: boolean            // whether to fit the content when loaded. default: false
    layoutHandler: LayoutHandler // class to control node layout.   default: new SimpleLayout()
    onSvgPanZoomInitialized: undefined | (instance) => void // callback on init svg-pan-zoom. default: undefined
    grid: {
      visible: boolean         // whether to show the grid in the background. default: false
      interval: number         // grid line spacing.                          default: 10
      thickIncrements: number  // increments of ticks to draw thick lines.    default: 5
      line: {                   // normal line style
        color: string          //   default: "#e0e0e0"
        width: number          //   default: 1
        dasharray: number       //   default: 1
      }
      thick: {                  // thick line style
        color: string          //   default: "#cccccc"
        width: number          //   default: 1
        dasharray: number       //   default: 0
      }
    }
  }
  node: {
    normal: {
      // * These fields can also be specified with the function as `(node: Node) => value`.
      type: "circle" | "rect"  // shape type.            default: "circle"
      radius: number           // radius of circle.      default: 16
      width: number            // width of rect.         default: (not specified)
      height: number           // height of rect.        default: (not specified)
      borderRadius: number     // border radius of rect. default: (not specified)
      color: string            // fill color.            default: "#4466cc"
      strokeWidth: number      // stroke width.          default: 0
      strokeColor: string | undefined              // stroke color.      default: "#000000"
      strokeDasharray: number | string | undefined  // stroke dash array. default: 0
    }
    hover: { /* same structure as `node.normal`. */ } | undefined
        // default: {
        //   color: "#3355bb"
        //   ... all other values are same as `normal`
        // }
    selected: { /* same structure as `node.normal`. */ } | undefined
        // default: undefined
    draggable: boolean | (node) => boolean // whether the node is draggable or not.  default: true
    selectable: boolean | number | (node) => boolean
        // whether the node is selectable or not. default: false
        // When specified as a number it means the max number of nodes that can be selected.
    label: {
      // * These fields can also be specified with the function as `(node) => value`.
      visible: boolean         // whether the node's label is visible or not. default: true
      fontFamily: string | undefined  // font family.       default: undefined
      fontSize: number                // font size.         default: 11
      lineHeight: number              // line height (multiplier for font size). default: 1.1
      color: string                   // font color.        default: "#000000"
      background: {                    // background config. default: undefined
        visible: boolean          // whether the background is visible or not.
        color: string             // background color.
        padding: number | {        // padding.
          vertical: number        // vertical padding.
          horizontal: number      // horizontal padding.
        }
        borderRadius: number       // border radius.
      } | undefined
      margin: number                  // margin from node. default: 4
      direction: NodeLabelDirection   // node label display direction. default: SOUTH
      text: string    // field name in the node object to use as the label. default: "name"
                      // if function is specified the return value is string of label.
    }
    focusring: {
      visible: boolean // whether the focus ring is visible or not.     default: true
      width: number    // line width of the focus ring.                 default: 4
      padding: number  // distance between the focus ring and the node. default: 3
      color: string     // fill color.                                   default: "#eebb00"
    }
    transition: string | undefined  // entering/leaving transition.      default: undefined
  }
  edge: {
    normal: {
      // * These fields can also be specified with the function as `(edge: Edge) => value`.
      width: number           // width of edge.                           default: 2
      color: string           // line color.                              default: "#4466cc"
      dasharray: number | string | undefined        // stroke dash array. default: 0
      linecap: "butt" | "round" | "square" | undefined // stroke linecap. default: "butt"
      animate: boolean        // whether to animate or not.               default: false
      animationSpeed: number   // animation speed.                         default: 100
    }
    hover: { /* same structure as `normal`. */ } | undefined
        // default: {
        //   color: "#3355bb",
        //   ... all other values are same as `edge.normal`
        // },
    selected: { /* same structure as `normal`. */ } | undefined
        // default: {
        //   color: "#dd8800",
        //   dasharray: (wider than `normal`),
        //   ... all other values are same as `edge.normal`
        // }
    selectable: boolean | number | (edge) => boolean
        // whether the edge is selectable or not. default: false
        // When specified as a number, it means the max number of edges that can be selected.
    gap: number | ((edges: Edges, configs: Configs) => number)
        // number: distance between edges.
        // func : function to calculate gap from edge list between nodes.
        // default: 3
    type: "straight" | "curve" // edge type when there are multiple edges between the nodes.
    marker: {
      source: {
        type:  "none" | "arrow" | "angle" | "circle" | "custom"
                              // type of marker.                          default: "none"
        width: number        // width of marker.                         default: 5
        height: number       // height of marker.                        default: 5
        margin: number       // distance between marker and end of edge. default: -1
        units: "strokeWidth" | "userSpaceOnUse"
                              // units of width, height and margin.            default: "strokeWidth"
        color: string | null // color of marker. null: same as edge color.    default: null
        customId: string | undefined
                              // custom marker ID for marker type is "custom". default: undefined
      }
      target: { /* same structure as `source`. */ }
    }
    margin: number | null
        // margin from end of node (if null, the edge end is the center of node).
        // default: null
    summarize: boolean | ((edges: Edges, configs: Configs) => boolean | null)
        // true : summarize when the width of the edge becomes larger than the node.
        // false: do not summarize.
        // func : function to determine whether to summarize from edge list between nodes.
        // default: func (if type is "curve" then false, otherwise summarize if the edge
        //                is wider than the node size)
    summarized: { // configs for summarized edge
      label: {
        // * These fields can also be specified with the function as
        //   `(edges: Record<string, Edge>) => value`.
        fontSize: number  // font size.  default: 10
        color: string      // font color. default: "#4466cc"
      }
      shape: { /* same structure as `node.normal`. */ }
        // * These fields can also be specified with the function as
        //   `(edges: Record<string, Edge>) => value`.
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
        // * These fields can also be specified with the function as
        //   `(edges: Record<string, Edge>) => value`.
        // default: {
        //   width: 5,
        //   color: "#4466cc",
        //   dasharray: undefined,
        //   linecap: undefined,
        //   animate: false,
        //   animationSpeed: 50
        // }
      }
    }
    keepOrder: "clock" | "vertical" | "horizontal"
      // orientation to be considered when keeping multiple edge alignments.
      //   "clock": Keep the forward/backward when viewed as a clock.
      //   "vertical": Keep the vertical alignment.
      //   "horizontal": Keep the horizontal alignment.
      // default: "clock"
    label: {
      fontFamily: string | undefined  // font family.       default: undefined
      fontSize: number                // font size.         default: 11
      lineHeight: number              // line height (multiplier for font size). default: 1.1
      color: string                   // font color.        default: "#000000"
      background: {                    // background config. default: undefined
        visible: boolean          // whether the background is visible or not.
        color: string             // background color.
        padding: number | {        // padding.
          vertical: number        // vertical padding.
          horizontal: number      // horizontal padding.
        }
        borderRadius: number       // border radius.
      } | undefined
      margin: number              // distance from edge stroke. default: 4
      padding: number              // distance from end node. default: 4
    }
  }
  path: {
    visible: boolean     // whether the paths are visible or not.  default: false
    clickable: boolean   // whether paths are clickable or not.    default: false
    curveInNode: boolean // whether to curve paths within nodes.   default: false
    end: "centerOfNode" | "edgeOfNode" // position of end of path. default: "centerOfNode"
    margin: number       // margin from end of path.               default: 0
    path: {
      // * These fields can also be specified with the function as `(path) => value`.
      width: number      // width of path. default: 6
      color: string      // path color. default: (Func to select a color from a hash of edges.)

      dasharray: number | string | undefined         // stroke dash array. default: undefined
      linecap: "butt" | "round" | "square" | undefined  // stroke linecap. default: "round"
      linejoin: "miter" | "round" | "bevel"            // stroke linejoin. default: "round"
      animate: boolean                       // whether to animate or not. default: false
      animationSpeed: number                  // animation speed.           default: 50
    }
    transition: string | undefined  // entering/leaving transition.         default: undefined
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

<table>
  <thead>
    <tr>
      <th>Event type</th>
      <th>Description</th>
      <th>Event value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"view:load"</td>
      <td>component loaded</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>"view:unload"</td>
      <td>mouse mode changed</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>"view:mode"</td>
      <td>component unloaded</td>
      <td><code>"default"</code> / <code>"node"</code> / <code>"edge"</code></td>
    </tr>
    <tr>
      <td>"view:click"</td>
      <td>background clicked</td>
      <td rowspan="2">
        <code>{ event: MouseEvent }</code><br />
        When a double click occurs, the "view:click" event is fired twice.
        If you want to determine the second click that is judged to be a
        double click, you can use the value of <code>event.detail`</code>.
        (When it is a double click, the value will be 2.)<br />
        <br />
        By default, double-clicking the background will zoom it.
        To disable this behavior, set <code>view.doubleClickZoomEnabled"</code>
        to <code>false</code> in Configuration.
      </td>
    </tr>
    <tr>
      <td>"view:dblclick"</td>
      <td>background double clicked</td>
    </tr>
    <tr>
      <td>"view:zoom"</td>
      <td>zoom level changed</td>
      <td><code>number</code> (new zoom level)</td>
    </tr>
    <tr>
      <td>"view:pan"</td>
      <td>panned</td>
      <td><code>{ x: number, y: number }</code></td>
    </tr>
    <tr>
      <td>"view:fit"</td>
      <td>fitted</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>"view:resize"</td>
      <td>container resized</td>
      <td><code>{ x: number, y: number, width: number, height: number }</code></td>
    </tr>
    <tr>
      <td>"view:contextmenu"</td>
      <td>background right-clicked</td>
      <td>
        <code>{ event: MouseEvent }</code><br />
        (To disable the browser's standard context menu, you have to call
        <code>event.preventDefault()</code> in the handler.)
      </td>
    </tr>
    <tr>
      <td>"node:click"</td>
      <td>node clicked</td>
      <td rowspan="2">
        <code>{ node: string, event: MouseEvent }</code><br />
        When a double click occurs, the "node:click" event is fired twice.
        If you want to determine the second click that is judged to be a
        double click, you can use the value of <code>event.detail`</code>.
        (When it is a double click, the value will be 2.)
      </td>
    </tr>
    <tr>
      <td>"node:dblclick"</td>
      <td>node double clicked</td>
    </tr>
    <tr>
      <td>"node:pointerover"</td>
      <td>pointer over on node</td>
      <td rowspan="4"><code>{ node: string, event: PointerEvent }</code></td>
    </tr>
    <tr>
      <td>"node:pointerout"</td>
      <td>pointer out on node</td>
    </tr>
    <tr>
      <td>"node:pointerdown"</td>
      <td>pointer down on node</td>
    </tr>
    <tr>
      <td>"node:pointerup"</td>
      <td>pointer up on node</td>
    </tr>
    <tr>
      <td>"node:contextmenu"</td>
      <td>node right-clicked</td>
      <td>
        <code>{ node: string, event: MouseEvent }</code><br />
        (To disable the browser's standard context menu, you have to call
        <code>event.preventDefault()</code> in the handler.)
      </td>
    </tr>
    <tr>
      <td>"node:dragstart"</td>
      <td>node drag started</td>
      <td><code>{ NODE_ID: { x: number; y: number }, ... }</code></td>
    </tr>
    <tr>
      <td>"node:pointermove"</td>
      <td>pointer move on node</td>
      <td><code>{ node: string, event: PointerEvent }</code></td>
    </tr>
    <tr>
      <td>"node:dragend"</td>
      <td>node drag ended</td>
      <td><code>{ NODE_ID: { x: number; y: number }, ... }</code></td>
    </tr>
    <tr>
      <td>"node:select"</td>
      <td>node selected</td>
      <td><code>[ NODE_ID, ...]</code></td>
    </tr>
    <tr>
      <td>"edge:click"</td>
      <td>edge clicked</td>
      <td rowspan="2">
        not summarized edge:<br/>
        <code>{ edge: EDGE_ID, edges: [EDGE_ID], event: MouseEvent, summarized: false }</code><br/><br/>
        summarized edge:<br/>
        <code>{ edges: [EDGE_ID, ...], event: MouseEvent, summarized: true }</code><br />
        <br />
        When a double click occurs, the "edge:click" event is fired twice.
        If you want to determine the second click that is judged to be a
        double click, you can use the value of <code>event.detail`</code>.
        (When it is a double click, the value will be 2.)
      </td>
    </tr>
    <tr>
      <td>"edge:dblclick"</td>
      <td>edge double clicked</td>
    </tr>
    <tr>
      <td>"edge:pointerover"</td>
      <td>pointer over on edge</td>
      <td rowspan="4">
        not summarized edge:<br/>
        <code>{ edge: EDGE_ID, edges: [EDGE_ID], event: PointerEvent, summarized: false }</code><br/><br/>
        summarized edge:<br/>
        <code>{ edges: [EDGE_ID, ...], event: PointerEvent, summarized: true }</code>
      </td>
    </tr>
    <tr>
      <td>"edge:pointerout"</td>
      <td>pointer out on edge</td>
    </tr>
    <tr>
      <td>"edge:pointerdown"</td>
      <td>pointer down on edge</td>
    </tr>
    <tr>
      <td>"edge:pointerup"</td>
      <td>pointer up on edge</td>
    </tr>
    <tr>
      <td>"edge:contextmenu"</td>
      <td>edge right-clicked</td>
      <td>
        not summarized edge:<br/>
        <code>{ edge: EDGE_ID, edges: [EDGE_ID], event: MouseEvent, summarized: false }</code><br/><br/>
        summarized edge:<br/>
        <code>{ edges: [EDGE_ID, ...], event: MouseEvent, summarized: true }</code>
      </td>
    </tr>
    <tr>
      <td>"edge:select"</td>
      <td>edge selected</td>
      <td><code>[ EDGE_ID, ... ]</code></td>
    </tr>
    <tr>
      <td>"path:click"</td>
      <td>path clicked</td>
      <td rowspan="2">
        <code>{ path: Path, event: MouseEvent }</code><br />
        When a double click occurs, the "path:click" event is fired twice.
        If you want to determine the second click that is judged to be a
        double click, you can use the value of <code>event.detail`</code>.
      </td>
    </tr>
    <tr>
      <td>"path:dblclick"</td>
      <td>path double clicked</td>
    </tr>
    <tr>
      <td>"path:contextmenu"</td>
      <td>path right-clicked</td>
      <td><code>{ path: Path, event: MouseEvent }</code></td>
    </tr>
  </tbody>
</table>

</div>

## Instance Methods

<div class="reference-table">

<table class="instance-methods">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fitToContents(): void</td>
      <td>Perform zooming/panning according to the graph size.</td>
    </tr>
    <tr>
      <td>getAsSvg(): string</td>
      <td>Get the network-graph contents as SVG text data.</td>
    </tr>
    <tr>
      <td>getPan(): {x, y}</td>
      <td>Get the pan vector.</td>
    </tr>
    <tr>
      <td>getSizes(): Sizes</td>
      <td>
        Get all calculate svg dimensions. <br>
        Sizes: <code>{width, height, viewBox:{x, y, width, height}}</code>
      </td>
    </tr>
    <tr>
      <td>panTo(point: {x, y}): void</td>
      <td>Pan to a rendered position.</td>
    </tr>
    <tr>
      <td>panBy(point: {x, y}): void</td>
      <td>Relatively pan the graph by a specified rendered position vector.</td>
    </tr>
    <tr>
      <td>panToCenter(): void</td>
      <td>Perform a pan to center the contents of the network graph.</td>
    </tr>
    <tr>
      <td>translateFromDomToSvgCoordinates(point: {x, y}): {x, y}</td>
      <td>Translate from DOM to SVG coordinates.</td>
    </tr>
    <tr>
      <td>translateFromSvgToDomCoordinates(point: {x, y}): {x, y}</td>
      <td>Translate from SVG to DOM coordinates.</td>
    </tr>
    <tr>
      <td>zoomIn(): void</td>
      <td>Perform zoom-in.</td>
    </tr>
    <tr>
      <td>zoomOut(): void</td>
      <td>Perform zoom-out.</td>
    </tr>
  </tbody>
</table>

</div>
