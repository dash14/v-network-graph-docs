# Configurations


Indicates the contents to be specified in the `configs` of props.  
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
    boxSelectionEnabled:    boolean
                            // Whether to enable box-selection with special key down.
                            // default: false
                            // * `node.selectable` must also be true.
                            // * The special key is specified in `view.selection.detector`
                            //   as a function with detection process.
    autoPanAndZoomOnLoad: false | "center-zero" | "center-content" | "fit-content"
                            // whether to automatically perform pan and zoom on loading.
                            // - false: do not perform pan and zoom
                            // - "center-zero"    : perform pan to center the (0, 0)
                            // - "center-content" : perform pan to center the content
                            // - "fit-content"    : perform pan and zoom to fit the content
                            // default: "center-content"
    autoPanOnResize: boolean // whether to pan automatically to keep the center when resizing.
                             // default: true
    layoutHandler: LayoutHandler // class to control node layout.   default: new SimpleLayout()
    onSvgPanZoomInitialized: undefined | (instance) => void // callback on init svg-pan-zoom. default: undefined
    grid: {
      visible: boolean         // whether to show the grid in the background. default: false
      interval: number         // grid line spacing.                          default: 10
      thickIncrements: number  // increments of ticks to draw thick lines.    default: 5
      line: {                  // normal line style.
        color: string          //   default: "#e0e0e0"
        width: number          //   default: 1
        dasharray: string | number //   default: 1
      }
      thick: {                 // thick line style.
        color: string          //   default: "#cccccc"
        width: number          //   default: 1
        dasharray: string | number //   default: 0
      }
    }
    selection: {
      box: {                  // rectangle of selection box style.
        color: string         //   background color. default: "#0000ff20"
        strokeWidth: number   //   stroke width. default: 1
        strokeColor: string   //   stroke color. default: "#aaaaff"
        strokeDasharray: string | number  // stroke dasharray. default: 0
      }
      detector: (event: KeyboardEvent) => boolean
          // process for detecting special key down and up, to be used if
          // `boxSelectionEnabled` is true.
          // The argument is passed the keydown and keyup events. By returning
          // true for each, it is assumed that a down/up event has occurred
          // with the key.
          // default:
          //   Process to detect Ctrl key down/up (If Mac OS, detect Cmd key).
    }
    builtInLayerOrder: LayerName[]
        // built-in layers which are to be reordered.
        // default: [] (Display in default order)
    onBeforeInitialDisplay: (() => Promise<any>) | (() => any) | undefined
        // hook called before initial display. default: undefined
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
      margin: number,                  // margin from node. default: 4
      direction: "center" | "north" | "north-east" |
                 "east" | "south-east" | "south" |
                 "south-west" | "west" | "north-west"
                 // node label display direction. default: "south"
      directionAutoAdjustment: boolean | (params: NodeLabelDirectionHandlerParams) => NodeLabelDirectionType
                 // whether auto adjustment node label display position. default: false
      text: string    // field name in the node object to use as the label. default: "name"
                      // if function is specified the return value is string of label.
    }
    focusring: {
      visible: boolean // whether the focus ring is visible or not.     default: true
      width: number    // line width of the focus ring.                 default: 4
      padding: number  // distance between the focus ring and the node. default: 3
      color: string     // fill color.                                   default: "#eebb00"
    }
    zOrder: {
      enabled: boolean  // whether the z-order control is enable or not. default: false
      zIndex: number | (node: Node) => number // node's z-index value.   default: 0
      bringToFrontOnHover: boolean    // whether to bring to front on hover.    default: true
      bringToFrontOnSelected: boolean // whether to bring to front on selected. default: true
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
        //   width: () => {normal's value} + 1
        //   color: "#3355bb",
        //   ... all other values are same as `edge.normal`
        // }
    selected: { /* same structure as `normal`. */ } | undefined
        // default: {
        //   width: () => {normal's value} + 1
        //   color: "#dd8800",
        //   dasharray: (wider than normal's value),
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
        // * These fields can also be specified with the function as `(args: [Edge, StrokeStyle]) => value`.
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
    selfLoop: {
      // * These fields can also be specified with the function as `(edge: Edge) => value`.
      radius: number       // radius of edge. default: 12
      isClockwise: boolean // whether the arc is clockwise or not. default: true
      offset: number       // distance to node. default: 10
      angle:               // angle from node to be displayed. default: 270
    }
    keepOrder: "clock" | "vertical" | "horizontal"
      // orientation to be considered when keeping multiple edge alignments.
      //   "clock": Keep the forward/backward when viewed as a clock.
      //   "vertical": Keep the vertical alignment.
      //   "horizontal": Keep the horizontal alignment.
      // default: "clock"
    label: {
      // * These fields can also be specified with the function as `(edge: Edge) => value`.
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
    zOrder: {
      enabled: boolean  // whether the z-order control is enable or not. default: false
      zIndex: number | (node: Node) => number // edge's z-index value.   default: 0
      bringToFrontOnHover: boolean    // whether to bring to front on hover.    default: true
      bringToFrontOnSelected: boolean // whether to bring to front on selected. default: true
    }
  }
  path: {
    visible: boolean     // whether the paths are visible or not.  default: false
    clickable: boolean | (path) => boolean  // whether paths are clickable or not. default: false
    hoverable: boolean | (path) => boolean  // whether paths are hoverable or not. default: false
    selectable: boolean | number | (path) => boolean
        // whether the path is selectable or not. default: false
        // When specified as a number, it means the max number of paths that can be selected.
    curveInNode: boolean // whether to curve paths within nodes.   default: false
    end: "centerOfNode" | "edgeOfNode" // position of end of path. default: "centerOfNode"
    margin: number       // margin from end of path.               default: 0
    path: { /* @deprecated */ }
    normal: {
      // * These fields can also be specified with the function as `(path) => value`.
      width: number      // width of path. default: 6
      color: string      // path color. default: (Func to select a color from a hash of edges.)
      dasharray: number | string | undefined         // stroke dash array. default: undefined
      linecap: "butt" | "round" | "square" | undefined  // stroke linecap. default: "round"
      linejoin: "miter" | "round" | "bevel"            // stroke linejoin. default: "round"
      animate: boolean                       // whether to animate or not. default: false
      animationSpeed: number                  // animation speed.           default: 50
    }
    hover: { /* same structure as `normal`. */ } | undefined
        // default: {
        //   width: () => {normal's value} + 2
        //   ... all other values are same as `path.normal`
        // }
    selected: { /* same structure as `normal`. */ }
        // default: {
        //   width: () => {normal's value} + 2
        //   dasharray: "6 12",
        //   ... all other values are same as `path.normal`
        // }
    zOrder: {
      enabled: boolean  // whether the z-order control is enable or not. default: false
      zIndex: number | (node: Node) => number // path's z-index value.   default: 0
      bringToFrontOnHover: boolean    // whether to bring to front on hover.    default: true
      bringToFrontOnSelected: boolean // whether to bring to front on selected. default: true
    }
    transition: string | undefined  // entering/leaving transition. default: undefined
  }
}
```

</div>
