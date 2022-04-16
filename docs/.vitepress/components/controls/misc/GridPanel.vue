<template>
  <el-card class="grid-config">
    <div class="grid-base-config">
      <div class="control">
        <label>
          Visible:
          <el-checkbox v-model="visible" />
        </label>
      </div>
    </div>
    <div class="grid-base-config">
      <div class="control">
        Interval:
        <el-slider
          v-model="interval"
          :min="5"
          :max="100"
          :step="5"
          :disabled="!visible"
        />
      </div>
      <div class="control">
        Thick Increments:
        <el-slider
          v-model="thickIncrements"
          :min="0"
          :max="20"
          :step="1"
          :disabled="!visible"
        />
      </div>
    </div>
    <div class="grid-line-configs">
      <div>Normal:</div>
      <div>
        <div class="control">
          Width:
          <el-slider
            v-model="normalWidth"
            :min="0"
            :max="16"
            :step="1"
            :disabled="!visible"
          />
        </div>
        <div class="control">
          Color:
          <el-color-picker
            v-model="normalColor"
            show-alpha
            @active-change="normalColor = $event"
            :disabled="!visible"
          />
        </div>
        <div class="control">
          Dasharray:
          <el-input v-model="normalDasharray" :disabled="!visible" />
        </div>
      </div>
      <div>Thick:</div>
      <div>
        <div class="control">
          Width:
          <el-slider
            v-model="thickWidth"
            :min="0"
            :max="16"
            :step="1"
            :disabled="!visible"
          />
        </div>
        <div class="control">
          Color:
          <el-color-picker
            v-model="thickColor"
            show-alpha
            @active-change="thickColor = $event"
            :disabled="!visible"
          />
        </div>
        <div class="control">
          Dasharray:
          <el-input v-model="thickDasharray" :disabled="!visible" />
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    interval: {
      type: Number,
      required: true,
    },
    thickIncrements: {
      type: Number,
      required: true,
    },
    normalColor: {
      type: String,
      required: true,
    },
    normalWidth: {
      type: Number,
      required: true,
    },
    normalDasharray: {
      type: [String, Number],
      default: 0,
    },
    thickColor: {
      type: String,
      required: true,
    },
    thickWidth: {
      type: Number,
      required: true,
    },
    thickDasharray: {
      type: [String, Number],
      default: 0,
    },
  },
  emits: [
    "update:visible",
    "update:interval",
    "update:thickIncrements",
    "update:normalColor",
    "update:normalWidth",
    "update:normalDasharray",
    "update:thickColor",
    "update:thickWidth",
    "update:thickDasharray",
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
    return vars as Record<keyof typeof props, WritableComputedRef<any>>
  },
})
</script>

<style lang="scss" scoped>
.grid-config {
  width: 100%;
}
.grid-base-config {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 12px;
  label {
    margin: 0;
    font-size: 12px;
  }
}
.grid-line-configs {
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
