<template>
  <el-tabs type="border-card" value="demo" >
    <el-tab-pane label="Demo" :lazy="true">
      <div class="demo" :style="{ height: `${demoHeight}px` }">
        <slot name="demo"></slot>
        <div v-if="message" class="float-message">
          <i class="el-icon-warning-outline"></i>
          {{ message }}
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Source">
      <slot name="source"></slot>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    message: {
      type: String,
      default: ""
    },
    demoHeight: {
      type: Number,
      default: 300
    }
  }
})
</script>

<style lang="scss" scoped>
.demo {
  margin: -15px;
  height: 300px;
}
.el-tab-pane :deep(.language-vue) {
  margin: 0;
}
.float-message {
  position: absolute;
  padding: 10px;
  font-size: 12px;
  line-height: 10px;
  border-radius: 4px;
  inset: 10px auto auto 10px;
  background-color: #88888844;
}
// .source {
//   max-height: 400px;
//   overflow-y: auto;
// }
</style>