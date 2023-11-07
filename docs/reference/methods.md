# Methods

## Instance Methods

Instance methods of `<v-network-graph>` component shown below.

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
      <td>fitToContents(options?: FitOptions): void</td>
      <td>
        Perform zooming/panning according to the graph size.<br/>
        FitOptions: <code>{ margin?: FitContentMargin }</code><br/>
        FitContentMargin:
        <pre class="code">number | "${number}%" | "${number}px"
| {
    top?:    number | `${number}%` | `${number}px`,
    left?:   number | `${number}%` | `${number}px`,
    right?:  number | `${number}%` | `${number}px`,
    bottom?: number | `${number}%` | `${number}px`
  }</pre>
        If margin is not specified, the <code>configs.view.fitContentMargin</code> configuration will be used. (default: "8%")
      </td>
    </tr>
    <tr>
      <td>exportAsSvgText(options: ExportOptions): Promise&lt;string&gt;</td>
      <td>
        Export the network-graph contents as SVG text data.<br/>
        ExportOptions: <code>{ embedImages?: boolean }</code>
      </td>
    </tr>
    <tr>
      <td>exportAsSvgElement(options: ExportOptions): Promise&lt;SVGElement&gt;</td>
      <td>
        Export the network-graph contents as cloned SVG element data.<br/>
        ExportOptions: <code>{ embedImages?: boolean }</code>
      </td>
    </tr>
    <tr>
      <td><em>[Deprecated]</em><br/>getAsSvg(): string</td>
      <td><em>[Deprecated]</em><br/>Get the network-graph contents as SVG text data.</td>
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
      <td>startBoxSelection(options: BoxSelectionOption): void</td>
      <td>
        Start the box-selection mode to select nodes within the dragged rectangle range.
        <br/>
        BoxSelectionOption:
        <pre class="code">{
  stop?: "pointerup" | "click" | "manual"
  type?: "append" | "invert"
  withShiftKey?: "append" | "invert" | "same"
}</pre>
        <ul>
          <li>stop: Trigger to stop mode (default: "pointerup")</li>
          <li>type: Selection type (default: "append")</li>
          <li>
            withShiftKey: Selection type if shift key pressed at drag start
            (default: "same")
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>stopBoxSelection(): void</td>
      <td>Stop the box-selection mode.</td>
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
    <tr>
      <td>getViewBox(): Box</td>
      <td>
        Get the coordinates of the area being displayed.<br />
        Box: <code>{ top: number, bottom: number, left: number, right: number }</code>
      </td>
    </tr>
    <tr>
      <td>setViewBox(box: Box): void</td>
      <td>Set the coordinates of the area being displayed.</td>
    </tr>
    <tr>
      <td>
        transitionWhile(func: () => void | Promise&lt;void&gt;, duration: number = 300, timingFunction: string = "linear"): void
      </td>
      <td>
        When the position of a node changes within the function specified by the argument,
        a transition animation is triggered.<br />
        <code>duration</code> in milliseconds.
      </td>
    </tr>

  </tbody>
</table>

</div>
