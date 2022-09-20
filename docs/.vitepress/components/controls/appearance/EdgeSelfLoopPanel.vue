<template>
  <div class="edge-configs">
    <div class="control">
      Radius:
      <el-slider v-model="radius" :min="10" :max="30" :step="1" />
    </div>
    <div class="control">
      Angle:
      <el-slider v-model="angle" :min="0" :max="355" :step="5" />
    </div>
    <div class="control">
      Offset:
      <el-slider v-model="offset" :min="0" :max="30" :step="1" />
    </div>
    <div class="control">
      Clockwise:
      <el-checkbox v-model="clockwise" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    radius: {
      type: Number,
      required: true,
    },
    angle: {
      type: Number,
      required: true,
    },
    offset: {
      type: Number,
      required: true,
    },
    clockwise: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:radius", "update:offset", "update:angle", "update:clockwise"],
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
:deep(.el-slider) {
  width: 50px;
  margin-left: 16px;
  margin-right: 10px;
}
</style>
