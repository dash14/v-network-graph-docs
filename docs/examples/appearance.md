# Appearance Customization

## Specifying style configurations by values

<demo-tabs :use-data="true" :demo-height="500">
<template v-slot:demo>
  <DemoConfigValue />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_appearance/01/ConfigValue.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_appearance/01/data.ts

</template>
</demo-tabs>

## Change the appearance of each node and edge

In Node and Edge configuration, instead of concrete values,
you can specify functions that return a configuration value
with each node or edge as an argument.
In addition, by explicitly specifying the Node or Edge type in
UserConfigs, you can specify the argument type of the function.

<demo-tabs>
<template v-slot:demo>
  <DemoEachObject />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_appearance/02/EachObject.vue

</template>
</demo-tabs>


## Custom Node

In case you want to change not only the shape of the node, but
also its elements and behavior, it is now possible to replace
the components of the node.

The following is an example of replacing the default node
component with a combination of a circle and an icon.  
Arranging the SVG elements in the `override-node` slot will
replace the default nodes with them. In this slot, the (0, 0)
position is the center of the node.

Note that if you want to replace the label of a node, you can
do by using the `override-node-label` slot.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoCustomNode />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_appearance/03/CustomNode.vue{23-36}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_appearance/03/data.ts

</template>
</demo-tabs>

## Style examples

1.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoStyle1 />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_appearance/04/Style1.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_appearance/04/data.ts

</template>
</demo-tabs>

2.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoStyle2 />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_appearance/05/Style2.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_appearance/05/data.ts

</template>
</demo-tabs>

3.

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoStyle3 />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_appearance/06/Style3.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_appearance/06/data.ts

</template>
</demo-tabs>

<script setup>
import DemoConfigValue from '../.vitepress/components/04_appearance/01/ConfigValue.vue'
import DemoEachObject from '../.vitepress/components/04_appearance/02/EachObject.vue'
import DemoCustomNode from '../.vitepress/components/04_appearance/03/CustomNode.vue'

import DemoStyle1 from '../.vitepress/components/04_appearance/04/Style1.vue'
import DemoStyle2 from '../.vitepress/components/04_appearance/05/Style2.vue'
import DemoStyle3 from '../.vitepress/components/04_appearance/06/Style3.vue'
</script>
