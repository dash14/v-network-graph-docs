<template>
  <div class="summarized-edge-configs">
    <div>Text:</div>
    <div>
      <div class="control">
        Font size:
        <el-slider v-model="labelFontSize" :min="1" :max="16" :step="1" />
      </div>
      <div class="control">
        Color:
        <el-color-picker-custom v-model="labelColor" />
      </div>
    </div>
    <div>Shape:</div>
    <div>
      <div class="control">
        Type:
        <el-select v-model="type">
          <el-option label="circle" value="circle" />
          <el-option label="rect" value="rect" />
        </el-select>
      </div>
      <template v-if="type == 'circle'">
        <div class="control">
          Radius:
          <el-slider v-model="radius" :min="3" :max="64" :step="1" />
        </div>
      </template>
      <template v-else>
        <div class="control">
          Width:
          <el-slider v-model="width" :min="10" :max="64" :step="1" />
        </div>
        <div class="control">
          Height:
          <el-slider v-model="height" :min="10" :max="64" :step="1" />
        </div>
        <div class="control">
          Border radius:
          <el-slider v-model="borderRadius" :min="0" :max="16" :step="1" />
        </div>
      </template>
    </div>
    <div>Fill:</div>
    <div>
      <div class="control">
        Color:
        <el-color-picker-custom v-model="color" />
      </div>
    </div>
    <div>Stroke:</div>
    <div>
      <div class="control">
        Width:
        <el-slider v-model="strokeWidth" :min="0" :max="16" :step="1" />
      </div>
      <div class="control">
        Color:
        <el-color-picker-custom v-model="strokeColor" />
      </div>
      <div class="control">
        Dasharray:
        <el-input v-model="strokeDasharray" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    labelFontSize: {
      type: Number,
      required: true,
    },
    labelColor: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "circle",
    },
    radius: {
      type: Number,
      default: 16,
    },
    width: {
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
    },
    borderRadius: {
      type: Number,
      default: 4,
    },
    strokeWidth: {
      type: Number,
      default: 4,
    },
    strokeColor: {
      type: String,
      default: "#000000",
    },
    strokeDasharray: {
      type: String,
      default: "none",
    },
    color: {
      type: String,
      default: "#000000",
    },
  },
  emits: [
    "update:labelFontSize",
    "update:labelColor",
    "update:type",
    "update:radius",
    "update:width",
    "update:height",
    "update:borderRadius",
    "update:strokeWidth",
    "update:strokeColor",
    "update:strokeDasharray",
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
.summarized-edge-configs {
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr;

  > div:nth-child(odd) {
    font-size: 13px;
    font-weight: bold;
    background-color: #efefef;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > div:nth-child(even) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 12px;
  }
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
