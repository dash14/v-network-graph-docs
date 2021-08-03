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


## Style Gallery



<script setup>
import DemoDirect from '../.vitepress/components/appearance/Direct.vue'
import DemoEachObject from '../.vitepress/components/appearance/EachObject.vue'
</script>
