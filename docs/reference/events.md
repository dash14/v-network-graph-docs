# Events

## Events (Vue component)

<div class="reference-table">

| Event                | Description           |
| -------------------- | --------------------- |
| update:zoomLevel     | update zoom level     |
| update:selectedNodes | update selected nodes |
| update:selectedEdges | update selected edges |
| update:selectedPaths | update selected paths |
| update:layouts       | update layouts        |

</div>

## Events (with event-handlers)

The following is a list of events that can be specified for `event-handlers` prop.

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
      <td>"path:pointerover"</td>
      <td>pointer over on path</td>
      <td rowspan="4">
        <code>{ path: PATH_ID, event: PointerEvent }</code>
      </td>
    </tr>
    <tr>
      <td>"path:pointerout"</td>
      <td>pointer out on path</td>
    </tr>
    <tr>
      <td>"path:pointerdown"</td>
      <td>pointer down on path</td>
    </tr>
    <tr>
      <td>"path:pointerup"</td>
      <td>pointer up on path</td>
    </tr>
    <tr>
      <td>"path:contextmenu"</td>
      <td>path right-clicked</td>
      <td><code>{ path: Path, event: MouseEvent }</code></td>
    </tr>
    <tr>
      <td>"path:select"</td>
      <td>path selected</td>
      <td><code>[ PATH_ID, ... ]</code></td>
    </tr>
  </tbody>
</table>

</div>
