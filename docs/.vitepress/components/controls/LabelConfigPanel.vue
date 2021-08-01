<template>
  <div class="label-configs">
    <div class="control">
      Visible:
      <el-checkbox v-model="visible" />
    </div>
  </div>
  <div class="label-configs">
    <div class="control">
      Font family:
      <el-select v-model="fontFamily">
        <el-option label="none" value="" />
        <el-option label="sans-serif" value="sans-serif" />
        <el-option label="serif" value="serif" />
        <el-option label="monospace" value="monospace" />
      </el-select>
    </div>
    <div class="control">
      Font size:
      <el-slider v-model="fontSize" :min="1" :max="32" :step="1" />
    </div>
    <div class="control">
      Color:
      <el-color-picker
        v-model="color"
        color-format="hex"
        @active-change="color = $event"
      />
    </div>
  </div>
  <div class="label-configs">
    <div class="control">
      Direction:
      <el-select v-model="direction">
        <el-option label="center" :value="0" />
        <el-option label="north" :value="1" />
        <el-option label="north east" :value="2" />
        <el-option label="east" :value="3" />
        <el-option label="south east" :value="4" />
        <el-option label="south" :value="5" />
        <el-option label="south west" :value="6" />
        <el-option label="west" :value="7" />
        <el-option label="north west" :value="8" />
      </el-select>
    </div>
    <div class="control">
      Margin:
      <el-slider v-model="margin" :min="1" :max="32" :step="1" :disabled="direction == 0" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from "vue"

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    fontFamily: {
      type: String,
      required: false,
      default: "",
    },
    fontSize: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    margin: {
      type: Number,
      required: true,
    },
    direction: {
      type: Number,
      required: true,
    },
  },
  emits: [
    "update:visible",
    "update:fontFamily",
    "update:fontSize",
    "update:color",
    "update:margin",
    "update:direction",
  ],
  setup(props, { emit }) {
    const vars: { [name: string]: ComputedRef<any> } = {}
    const keys = Object.keys(props) as (keyof typeof props)[]
    for (const key of keys) {
      vars[key] = computed({
        get: () => props[key],
        set: v => emit(`update:${key}`, v),
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

:deep(.el-select) {
  width: 120px;
  margin-left: 10px;
  margin-right: 10px;
}

:deep(.el-slider) {
  width: 80px;
  margin-left: 20px;
  margin-right: 10px;
}

:deep(.el-color-picker) {
  margin-left: 10px;
}

</style>
