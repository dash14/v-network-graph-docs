# Miscellaneous

## Get the content as SVG data

You can obtain the displayed content as SVG text data.  
In this example, the SVG data is downloaded.

<demo-tabs :demo-height="400" :use-data="true">
<template v-slot:demo>
  <DemoDownload />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/08_misc/01/Download.vue{53-62}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/08_misc/01/data.ts

</template>
</demo-tabs>

## Grid

<demo-tabs :demo-height="500" :use-data="true">
<template v-slot:demo>
  <DemoGridLayer />
</template>
<template v-slot:source>

  <<< @/.vitepress/components/08_misc/02/GridLayer.vue{33-47}

</template>
<template v-slot:data>

  <<< @/.vitepress/components/08_misc/02/data.ts

</template>
</demo-tabs>


<script setup>
import DemoDownload from '../.vitepress/components/08_misc/01/Download.vue'
import DemoGridLayer from '../.vitepress/components/08_misc/02/GridLayer.vue'
</script>

