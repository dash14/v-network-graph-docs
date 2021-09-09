<template>
  <div class="focus-configs">
    <div class="control">
      Visible:
      <el-checkbox v-model="visible" />
    </div>
  </div>
  <div class="focus-configs">
    <div class="control">
      Width:
      <el-slider v-model="width" :min="1" :max="32" :step="1" />
    </div>
    <div class="control">
      Padding:
      <el-slider v-model="padding" :min="1" :max="32" :step="1" />
    </div>
    <div class="control">
      Color:
      <el-color-picker-custom v-model="color" />
    </div>
    <div class="control">
      Dasharray:
      <el-input v-model="dasharray" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    padding: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    dasharray: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "update:visible",
    "update:width",
    "update:padding",
    "update:color",
    "update:dasharray",
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
.focus-configs {
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

:deep(.el-select) {
  width: 120px;
  margin-left: 10px;
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

:deep(.el-input) {
  width: 60px;
  margin-left: 10px;
}
</style>
