# Getting Started

## Installation

<div class="getting-started-command">

Install with npm

```bash
npm install v-network-graph
```

and setup in main.ts

```ts
// main.ts
import { createApp } from "vue"
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"
import App from "./App.vue"

const app = createApp(App)

app.use(VNetworkGraph)
app.mount("#app")
```

</div>


## Installation on Nuxt 3 project

<div class="getting-started-command">

Add css to `nuxt.config.ts`

```ts
// nuxt.config.ts
import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["v-network-graph/lib/style.css"],
})
```

Make the plugin to `plugins/v-network-graph.ts`

```ts
// plugins/v-network-graph.ts
import { defineNuxtPlugin } from "#app"
import VNetworkGraph from "v-network-graph"

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VNetworkGraph)
})
```

</div>


## Usage

The basic usage is shown below.

<div class="getting-started-command">

```vue
<script setup lang="ts">
const nodes = {
  node1: { name: "Node 1" },
  node2: { name: "Node 2" },
  node3: { name: "Node 3" },
  node4: { name: "Node 4" },
}

const edges = {
  edge1: { source: "node1", target: "node2" },
  edge2: { source: "node2", target: "node3" },
  edge3: { source: "node3", target: "node4" },
}
</script>

<template>
  <v-network-graph
    :nodes="nodes"
    :edges="edges"
  />
</template>
```

</div>

For detailed usage, please check out the following:
* [Examples](./examples/)
* [Reference](./reference/)
