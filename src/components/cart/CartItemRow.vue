<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  formatCurrency: {
    type: Function,
    required: true,
  },
})

const emit = defineEmits(['update-quantity', 'update-selected'])

const onChangeQuantity = (event) => {
  const qty = Number(event.target.value)
  emit('update-quantity', props.item, qty)
}

const onToggleSelected = (event) => {
  const checked = event.target.checked
  emit('update-selected', props.item, checked)
}

const itemSubtotal = computed(
  () => (props.item.price ?? 0) * (props.item.quantity ?? 0),
)
</script>

<template>
  <div class="border-b border-gray-100 last:border-b-0">
    <div class="grid grid-cols-4 gap-4 px-6 py-4 items-center text-sm">
      <!-- Product + Checkbox -->
      <div class="flex items-center gap-3">
        <!-- Checkbox untuk pilih item -->
        <input
          type="checkbox"
          class="h-4 w-4 text-red-500 border-gray-300 rounded"
          :checked="item.selected ?? true"
          @change="onToggleSelected"
        />

        <img
          :src="item.image"
          :alt="item.title"
          class="w-12 h-12 md:w-14 md:h-14 object-contain"
        />
        <span class="text-gray-800 text-xs md:text-sm">
          {{ item.title }}
        </span>
      </div>

      <!-- Price -->
      <div class="text-right md:text-left text-xs md:text-sm text-gray-700">
        {{ formatCurrency(item.price) }}
      </div>

      <!-- Quantity -->
      <div class="flex justify-center">
        <select
          class="border border-gray-300 rounded px-2 py-1 text-xs md:text-sm bg-white"
          :value="item.quantity"
          @change="onChangeQuantity"
        >
          <option v-for="n in 10" :key="n" :value="n">
            {{ n.toString().padStart(2, '0') }}
          </option>
        </select>
      </div>

      <!-- Subtotal -->
      <div class="text-right text-xs md:text-sm text-gray-700">
        {{ formatCurrency(itemSubtotal) }}
      </div>
    </div>
  </div>
</template>
