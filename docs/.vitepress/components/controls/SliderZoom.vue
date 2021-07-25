<template>
  <div class="slider-zoom">
    <label>Zoom level:</label>
    <el-slider
      :model-value="modelValue"
      @update:modelValue="update"
      :min="0.1"
      :max="16"
      :step="0.1"
      :show-tooltip="false"
    />
    <span>{{ modelValue.toFixed(1) }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    update(value: number) {
      this.$emit("update:modelValue", value)
    },
  },
})
</script>

<style lang="scss" scoped>
.slider-zoom {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  label,
  span {
    font-size: 12px;
    color: #606266;
  }
  :deep(.el-slider) {
    width: 80px;
    margin: 0 14px;
  }
}
</style>
