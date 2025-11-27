<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <div class="bg-white rounded-md shadow-sm border border-gray-200 p-4 space-y-3">
    <p class="text-xs md:text-sm font-semibold text-gray-900">
      Payment Method
    </p>

    <label class="flex items-center gap-2 text-xs md:text-sm text-gray-700 cursor-pointer">
      <input
        type="radio"
        value="qris"
        v-model="model"
        class="h-3.5 w-3.5 text-red-500 focus:ring-red-500"
      />
      <span>QRIS</span>
    </label>
  </div>
</template>

<style scoped></style>
