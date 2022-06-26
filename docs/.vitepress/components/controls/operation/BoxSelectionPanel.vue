<template>
  <div class="config" :class="{ selecting }">
    <div class="button">
      <el-button type="primary" :disabled="selecting" @click="emit('button-click')"
        >Start to select</el-button
      >
      <el-checkbox v-model="startWithKeyDown" :disabled="selecting"
        >Start with Ctrl/Cmd key</el-checkbox
      >
    </div>
    <div class="card">
      <div class="box-selection-configs">
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    selecting: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#000000",
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
    startWithKeyDown: {
      type: Boolean,
      required: true,
    },
  },
  emits: [
    "update:color",
    "update:strokeWidth",
    "update:strokeColor",
    "update:strokeDasharray",
    "update:startWithKeyDown",
    "button-click",
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
    return { ...vars, emit }
  },
})
</script>

<style lang="scss" scoped>
.config {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .button {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 20px;
    :deep(label.el-checkbox) {
      margin: 0;
      font-weight: normal;
      .el-checkbox__label {
        font-size: 12px;
      }
    }
    .el-button {
      height: 50px;
      font-weight: bold;
      line-height: 120%;
    }
  }
  .card {
    flex: 1;
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    background-color: #fff;
    padding: 10px;
  }
}
.config.selecting * {
  cursor: crosshair !important;
}
.box-selection-configs {
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
  .el-input {
    width: 90px;
  }
  margin-left: 0;
  margin-right: 20px;
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
