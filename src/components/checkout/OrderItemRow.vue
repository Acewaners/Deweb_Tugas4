<script setup>
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

const itemSubtotal = () => (props.item.price ?? 0) * (props.item.quantity ?? 0)
</script>

<template>
  <div
    class="flex justify-between items-center border-b border-gray-100 pb-3 mb-2 last:border-b-0 last:pb-0 last:mb-0"
  >
    <div class="flex items-center gap-3">
      <img
        :src="item.image"
        :alt="item.title"
        class="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
      <div class="text-xs md:text-sm text-gray-800">
        <p class="line-clamp-1">{{ item.title }}</p>
        <p class="text-gray-500">x{{ item.quantity }}</p>
      </div>
    </div>
    <div class="text-xs md:text-sm text-gray-700">
      {{ formatCurrency(itemSubtotal()) }}
    </div>
  </div>
</template>
