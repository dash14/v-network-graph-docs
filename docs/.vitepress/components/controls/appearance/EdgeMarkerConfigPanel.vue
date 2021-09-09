<template>
  <div class="edge-configs">
    <div class="control">
      Type:
      <el-select v-model="type">
        <el-option label="none" value="none" />
        <el-option label="arrow" value="arrow" />
        <el-option label="angle" value="angle" />
        <el-option label="circle" value="circle" />
      </el-select>
    </div>
    <div class="control">
      Width:
      <el-slider v-model="width" :min="2" :max="10" :step="0.5" :disabled="type === 'none'" />
    </div>
    <div class="control">
      Height:
      <el-slider v-model="height" :min="2" :max="10" :step="0.5" :disabled="type === 'none'" />
    </div>
    <div class="control">
      Margin:
      <el-slider v-model="margin" :min="-8" :max="10" :step="0.5" :disabled="type === 'none'" />
    </div>
    <div class="control color">
      Color:
      <el-color-picker
        :modelValue="color"
        color-format="hex"
        :disabled="color === null || type === 'none'"
        @active-change="color !== null ? $emit('update:color', $event) : null"
      />
      <el-checkbox
        :modelValue="color === null"
        :disabled="type === 'none'"
        @update:modelValue="$emit('update:color', $event ? null : '#000000')"
      >
        Same as stroke
      </el-checkbox>
    </div>
    <div class="control">
      Units:
      <el-select v-model="units" class="select-units" :disabled="type === 'none'">
        <el-option label="strokeWidth" value="strokeWidth" />
        <el-option label="userSpaceOnUse" value="userSpaceOnUse" />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    margin: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: null
    },
    units: {
      type: String,
      required: true,
    },
  },
  emits: [
    "update:type",
    "update:width",
    "update:height",
    "update:margin",
    "update:color",
    "update:units",
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
  flex-wrap: nowrap;
  margin-left: 10px;
  .select-units {
    width: 160px;
  }
  &.color {
    margin-right: 20px;
  }
}

:deep(.el-select) {
  width: 90px;
  margin-left: 8px;
  margin-right: 10px;
}

:deep(.el-slider) {
  width: 45px;
  margin-left: 14px;
  margin-right: 10px;
}

:deep(.el-color-picker) {
  margin-left: 10px;
}

:deep(label.el-checkbox) {
  margin-left: 10px;
  .el-checkbox__label {
    font-size: 12px;
    font-weight: normal;
    color: var(--c-text);
  }
}
</style>
