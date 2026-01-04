<template>
  <el-tabs type="border-card" value="demo">
    <el-tab-pane label="Demo" :lazy="true">
      <div class="demo">
        <div class="network-graph" :style="style">
          <slot name="demo"></slot>
        </div>
        <div v-if="message" class="float-message">
          <el-icon><warning /></el-icon>
          {{ message }}
        </div>
        <div v-if="hint" class="float-message hint">
          <el-icon><pointer /></el-icon>
          {{ hint }}
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Source">
      <slot name="source"></slot>
    </el-tab-pane>
    <el-tab-pane v-if="useData" label="Data">
      <slot name="data"></slot>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { Warning, Pointer } from "@element-plus/icons-vue"

export default defineComponent({
  components: { Warning, Pointer },
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
      type: [Number, String],
      default: 300,
    },
    useData: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const style = computed<any>(() => {
      let height = props.demoHeight.toString()
      if (/^\d+$/.exec(height)) {
        height += "px"
      }
      return { "--svg-height": height }
    })

    return { style }
  },
})
</script>

<style lang="scss" scoped>
.demo {
  margin: -15px;
}
.network-graph {
  position: relative;
  width: 100%;
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
    .el-input {
      margin-top: 1px;
      margin-bottom: 1px;
    }
  }
  :deep(.v-network-graph) {
    // height: 1px;
    // flex: 1;
    height: var(--svg-height);
  }
}
.el-tab-pane :deep(.language-vue),
.el-tab-pane :deep(.language-ts) {
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
