<template>
  <div class="edge-configs">
    <div class="control">
      <label>Margin:</label>
      <el-slider
        :modelValue="margin !== null ? margin : 0"
        :min="-8"
        :max="32"
        :step="1"
        :disabled="margin === null"
        @update:modelValue="(margin !== null) ? $emit('update:margin', $event) : null"
      />
      (between node and edge)
    </div>
  </div>
  <div class="edge-configs">
    <div class="control">
      <el-checkbox
        :modelValue="margin === null"
        @update:modelValue="$emit('update:margin', $event ? null : 0)"
      >
        Unset margin (connect the centers of the nodes if marker types are null)
      </el-checkbox>
    </div>
  </div>
  <div class="edge-configs">
    <div class="control">
      <label>Gap:</label>
      <el-slider v-model="gap" :min="1" :max="32" :step="1" />
      (between multiple edges)
    </div>
    <div class="control">
      <label>Type:</label>
      <el-select v-model="lineType">
        <el-option label="straight" value="straight" />
        <el-option label="curve" value="curve" />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    margin: {
      type: Number,
      required: false,
      default: null
    },
    lineType: {
      type: String,
      required: true,
    },
    gap: {
      type: Number,
      required: true,
    },
  },
  emits: [
    "update:margin",
    "update:lineType",
    "update:gap",
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
  label {
    margin: 10px 0;
    width: 40px;
  }
}

:deep(.el-slider) {
  width: 80px;
  margin-left: 16px;
  margin-right: 10px;
}
:deep(label.el-checkbox) {
  margin-left: 10px;
  .el-checkbox__label {
    font-size: 12px;
    font-weight: normal;
    color: var(--c-text);
  }
}
:deep(.el-input) {
  width: 100px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>
