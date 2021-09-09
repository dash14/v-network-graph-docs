<template>
  <div v-if="visible !== undefined" class="label-configs">
    <div class="control">
      Visible:
      <el-checkbox v-model="visible" />
    </div>
  </div>
  <div class="label-configs">
    <div class="control">
      padding vertical:
      <el-slider v-model="paddingVertical" :min="0" :max="32" :step="1" />
    </div>
    <div class="control">
      horizontal:
      <el-slider v-model="paddingHorizontal" :min="0" :max="32" :step="1" />
    </div>
    <div class="control">
      border radius:
      <el-slider v-model="borderRadius" :min="0" :max="32" :step="1" />
    </div>
    <div class="control">
      Color:
      <el-color-picker-custom v-model="color" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: undefined
    },
    paddingVertical: {
      type: Number,
      required: true,
    },
    paddingHorizontal: {
      type: Number,
      required: true,
    },
    borderRadius: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  emits: [
    "update:visible",
    "update:paddingVertical",
    "update:paddingHorizontal",
    "update:borderRadius",
    "update:color",
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
.label-configs {
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

:deep(.el-slider) {
  width: 50px;
  margin-left: 16px;
  margin-right: 10px;
}

:deep(.el-color-picker) {
  margin-left: 10px;
}
</style>
