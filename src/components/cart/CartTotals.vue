<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

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
  <div>
    <div class="bg-white rounded-md shadow-sm border border-gray-200 p-6 space-y-4">
      <h2 class="text-sm md:text-base font-semibold text-gray-900 mb-2">
        Cart Total
      </h2>

      <div class="space-y-3 text-xs md:text-sm text-gray-700">
        <div class="flex justify-between border-b border-gray-100 pb-2">
          <span>Subtotal</span>
          <span>{{ formatCurrency(cartSubtotal) }}</span>
        </div>

        <div class="flex justify-between border-b border-gray-100 pb-2">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div class="flex justify-between">
          <span>Total</span>
          <span>{{ formatCurrency(cartTotal) }}</span>
        </div>
      </div>

      <RouterLink
        to="/checkout"
        class="w-full mt-4 px-4 py-2 text-xs md:text-sm font-medium text-white rounded
               hover:bg-red-600 active:bg-red-700 transition-colors text-center block"
        style="background-color:#e04b4b"
      >
        Proceed to checkout
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
