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

## Style gallery

<demo-tabs :use-data="true">
<template v-slot:demo>
  <DemoStyle1 />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/04_appearance/03/Style1.vue

</template>
<template v-slot:data>

  <<< @/.vitepress/components/04_appearance/03/data.ts

</template>
</demo-tabs>

<script setup>
import DemoConfigValue from '../.vitepress/components/04_appearance/01/ConfigValue.vue'
import DemoEachObject from '../.vitepress/components/04_appearance/02/EachObject.vue'
import DemoStyle1 from '../.vitepress/components/04_appearance/03/Style1.vue'
</script>
