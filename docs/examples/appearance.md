# Appearance Customization

## Specifying style configurations by values

<demo-tabs :demo-height="500">
<template v-slot:demo>
  <DemoDirect />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/appearance/Direct.vue

</template>
</demo-tabs>

## Change the appearance of each node and edge.

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

  <<< @/.vitepress/components/appearance/EachObject.vue

</template>
</demo-tabs>

## Style gallery

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoStyle1 />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/appearance/gallery/Style1.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/appearance/gallery/data.ts

</template>
</demo-tabs>

<script setup>
import DemoStyle1 from '../.vitepress/components/appearance/gallery/Style1.vue'
</script>
