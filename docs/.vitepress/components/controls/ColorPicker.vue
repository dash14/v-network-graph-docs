<script setup lang="ts">
import { computed, ref, watch } from "vue"

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: null,
  },
})

const emit = defineEmits(["update:modelValue"])

const hexValue = computed<string | null>({
  get() {
    return props.modelValue
  },
  set(value: string | null) {
    if (props.modelValue !== value) {
      emit("update:modelValue", value)
    }
  },
})
const input = ref<string>(props.modelValue)

const rgbaValue = computed<string | null>({
  get() {
    return hexValue.value ? hex2rgba(hexValue.value) : null
  },
  set(color: string | null) {
    hexValue.value = color ? rgba2hex(color) : null
  },
})

watch(hexValue, v => {
  input.value = v ?? ""
})

function hex2rgba(hex: string, alpha: number = 1) {
  const cleanedHEX = hex.replace(/#/, "")
  const r = parseInt("0x" + cleanedHEX.slice(0, 2))
  const g = parseInt("0x" + cleanedHEX.slice(2, 4))
  const b = parseInt("0x" + cleanedHEX.slice(4, 6))
  const a = Math.round((parseInt("0x" + cleanedHEX.slice(6, 8)) / 256) * 100) / 100
  const rgba = `rgb${a ? "a" : ""}(${r ? r : 0}, ${g ? g : 0}, ${b ? b : 0}${a ? ", " + a : ""})`
  return rgba
}

function rgba2hex(orig: string) {
  let a: number | undefined, isPercent: boolean
  const rgb = orig.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i)
  const alpha = ((rgb && rgb[4]) || "").trim()
  let hex = rgb
    ? "#" +
      (Number(rgb[1]) | (1 << 8)).toString(16).slice(1) +
      (Number(rgb[2]) | (1 << 8)).toString(16).slice(1) +
      (Number(rgb[3]) | (1 << 8)).toString(16).slice(1)
    : orig
  if (alpha !== "") {
    isPercent = alpha.indexOf("%") > -1
    a = parseFloat(alpha)
    if (!isPercent && a >= 0 && a <= 1) {
      a = Math.round(255 * a)
    } else if (isPercent && a >= 0 && a <= 100) {
      a = Math.round((255 * a) / 100)
    } else {
      a = undefined
    }
  }
  if (a && a !== 255) {
    hex += (a | (1 << 8)).toString(16).slice(1)
  }
  return hex
}
</script>

<template>
  <el-color-picker
    v-bind="$attrs"
    class="color-picker"
    v-model="rgbaValue"
    color-format="rgb"
    show-alpha
    @active-change="rgbaValue = $event"
  />
  <el-input v-model="input" @change="hexValue = input" class="input" />
</template>

<style lang="scss" scoped>
.el-color-picker + .input {
  width: 86px;
  margin-left: 2px;
  :deep(.el-input__inner) {
    padding: 0 5px;
    text-align: center;
  }
}
</style>
