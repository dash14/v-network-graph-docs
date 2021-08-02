<template>
  <el-tabs type="border-card" value="demo">
    <el-tab-pane label="Demo" :lazy="true">
      <div class="demo" :style="{ height: `${demoHeight}px` }">
        <div class="network-graph">
          <slot name="demo"></slot>
        </div>
        <div v-if="message" class="float-message">
          <i class="el-icon-warning-outline"></i>
          {{ message }}
        </div>
        <div v-if="hint" class="float-message hint">
          <i class="el-icon-thumb"></i>
          {{ hint }}
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
      default: "",
    },
    hint: {
      type: String,
      default: "",
    },
    demoHeight: {
      type: Number,
      default: 300,
    },
  },
})
</script>

<style lang="scss" scoped>
.demo {
  margin: -15px;
  height: 300px;
}
.network-graph {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  :deep(.demo-control-panel) {
    .el-tabs {
      width: 100%;
      .el-tabs {
        position: relative;
        top: -6px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
  :deep(.v-network-graph) {
    height: 1px;
    flex: 1;
  }
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
.hint {
  inset: auto auto 10px 10px;
  background-color: #eeeeeedd;
}
</style>
