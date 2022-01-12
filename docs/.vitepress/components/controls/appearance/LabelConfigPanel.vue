<template>
  <div v-if="visible !== undefined" class="label-configs">
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
      <el-color-picker-custom v-model="color" />
    </div>
  </div>
  <div class="label-configs">
    <div v-if="direction !== undefined" class="control">
      Direction:
      <el-select v-model="direction">
        <el-option label="center" value="center" />
        <el-option label="north" value="north" />
        <el-option label="north east" value="north-east" />
        <el-option label="east" value="east" />
        <el-option label="south east" value="south-east" />
        <el-option label="south" value="south" />
        <el-option label="south west" value="south-west" />
        <el-option label="west" value="west" />
        <el-option label="north west" value="north-west" />
      </el-select>
    </div>
    <div v-if="location !== undefined" class="control">
      Location:
      <el-select v-model="location">
        <el-option label="center" value="center" />
        <el-option label="above" value="above" />
        <el-option label="below" value="below" />
      </el-select>
    </div>
    <div class="control">
      Margin:
      <el-slider v-model="margin" :min="0" :max="32" :step="1" :disabled="direction == 'center'" />
    </div>
    <div v-if="lineHeight !== null" class="control">
      Line height:
      <el-slider v-model="lineHeight" :min="0.5" :max="3" :step="0.1" />
      (for multiline)
    </div>
  </div>
</template>

<script lang="ts">
import { NodeLabelDirectionType } from "v-network-graph"
import { defineComponent, computed, PropType, WritableComputedRef } from "vue"

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: undefined,
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
    lineHeight: {
      type: Number,
      default: null,
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
      type: String as PropType<NodeLabelDirectionType>,
      required: false,
      default: undefined,
    },
    location: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: [
    "update:visible",
    "update:fontFamily",
    "update:fontSize",
    "update:lineHeight",
    "update:color",
    "update:margin",
    "update:direction",
    "update:location",
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

:deep(.el-select) {
  width: 120px;
  margin-left: 10px;
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
