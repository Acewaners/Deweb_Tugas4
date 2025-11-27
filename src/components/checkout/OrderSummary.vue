<script setup>
import { computed } from 'vue'
import OrderItemRow from './OrderItemRow.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  formatCurrency: {
    type: Function,
    required: true,
  },
})

const cartSubtotal = computed(() =>
  props.items.reduce(
    (sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 0),
    0,
  ),
)

const shippingCost = computed(() => 0)
const cartTotal = computed(() => cartSubtotal.value + shippingCost.value)
</script>

<template>
  <div class="bg-white rounded-md shadow-sm border border-gray-200 p-6 space-y-4">
    <!-- Daftar produk -->
    <OrderItemRow
      v-for="item in items"
      :key="item.id"
      :item="item"
      :formatCurrency="formatCurrency"
    />

    <!-- Ringkasan angka -->
    <div class="space-y-2 text-xs md:text-sm text-gray-700">
      <div class="flex justify-between border-b border-gray-100 pb-2">
        <span>Subtotal</span>
        <span>{{ formatCurrency(cartSubtotal) }}</span>
      </div>

      <div class="flex justify-between border-b border-gray-100 pb-2">
        <span>Shipping</span>
        <span>Free</span>
      </div>

      <div class="flex justify-between">
        <span class="font-medium">Total</span>
        <span class="font-medium">
          {{ formatCurrency(cartTotal) }}
        </span>
      </div>
    </div>
  </div>
</template>
