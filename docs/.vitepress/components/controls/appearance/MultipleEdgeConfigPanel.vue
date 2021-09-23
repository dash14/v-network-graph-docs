<template>
  <div class="edge-configs">
    <div class="control">
      Gap:
      <el-slider v-model="gap" :min="0" :max="16" :step="1" />
    </div>
    <div class="control">
      Type:
      <el-select v-model="lineType">
        <el-option label="straight" value="straight" />
        <el-option label="curve" value="curve" />
      </el-select>
    </div>
    <div class="control">
      Summarize:
      <el-checkbox v-model="summarize" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    gap: {
      type: Number,
      required: true,
    },
    lineType: {
      type: String,
      required: true,
    },
    summarize: {
      type: Boolean,
      required: true,
    },
  },
  emits: [
    "update:gap",
    "update:lineType",
    "update:summarize"
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

:deep(.el-input) {
  width: 100px;
  margin-left: 10px;
  margin-right: 10px;
}


:deep(.el-slider) {
  width: 80px;
  margin-left: 20px;
  margin-right: 10px;
}
</style>
