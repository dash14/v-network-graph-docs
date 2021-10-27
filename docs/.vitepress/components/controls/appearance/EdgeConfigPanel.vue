<template>
  <div class="edge-configs">
    <div class="control">
      Width:
      <el-slider v-model="width" :min="1" :max="16" :step="1" />
    </div>
    <div class="control">
      Color:
      <el-color-picker-custom v-model="color" />
    </div>
    <div class="control">
      Dasharray:
      <el-input v-model="dasharray" />
    </div>
    <div class="control">
      Line cap:
      <el-select v-model="linecap">
        <el-option label="butt" value="butt" />
        <el-option label="round" value="round" />
        <el-option label="square" value="square" />
      </el-select>
    </div>
  </div>
  <div class="edge-configs">
    <div class="control">
      Animate:
      <el-checkbox v-model="animate" />
    </div>
    <div class="control">
      Speed:
      <el-slider v-model="animationSpeed" :min="10" :max="100" :step="10" />
    </div>
    <div class="control">
      To enable animation, dasharray must also be set to non-zero.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    width: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    dasharray: {
      type: String,
      default: "0",
    },
    linecap: {
      type: String,
      default: "butt",
    },
    animate: {
      type: Boolean,
      required: true,
    },
    animationSpeed: {
      type: Number,
      required: true,
    },
  },
  emits: [
    "update:width",
    "update:color",
    "update:dasharray",
    "update:linecap",
    "update:animate",
    "update:animationSpeed",
  ],
  setup(props, { emit }) {
    const vars: { [name: string]: WritableComputedRef<any> } = {}
    const keys = Object.keys(props) as (keyof typeof props)[]
    for (const key of keys) {
      vars[key] = computed({
        get: () => props[key],
        set: v => emit(`update:${key}` as any, v),
      })
    }
    return vars
  },
})
</script>

<style lang="scss" scoped>
.edge-configs {
  width: 100%;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.control {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
}

:deep(.el-select),
:deep(.el-input) {
  width: 80px;
  margin-left: 10px;
}

:deep(.el-select) {
  margin-left: 0;
  margin-right: 10px;
}

:deep(.el-slider) {
  width: 50px;
  margin-left: 16px;
  margin-right: 10px;
}

:deep(.el-color-picker) {
  margin-left: 10px;
}
</style>
