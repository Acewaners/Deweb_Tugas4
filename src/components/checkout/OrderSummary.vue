<script setup>
import { computed } from 'vue'

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

// HANYA item yang selected yang ditampilkan
const checkoutItems = computed(() =>
  (props.items || []).filter((item) => item.selected !== false),
)

const cartSubtotal = computed(() =>
  checkoutItems.value.reduce(
    (sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 0),
    0,
  ),
)

const shippingCost = computed(() => 0)
const cartTotal = computed(() => cartSubtotal.value + shippingCost.value)
</script>

<template>
  <div class="bg-white rounded-md shadow-sm border border-gray-200 p-6 space-y-4">
    <h2 class="text-sm md:text-base font-semibold text-gray-900">
      Your Order
    </h2>

    <!-- daftar item: pakai checkoutItems -->
    <div class="divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
      <div
        v-for="item in checkoutItems"
        :key="item.id"
        class="flex items-center justify-between py-2"
      >
        <div class="flex items-center gap-3">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-10 h-10 object-contain"
          />
          <div class="flex flex-col">
            <span class="text-gray-800">
              {{ item.title }}
            </span>
            <span class="text-gray-500 text-xs">
              x{{ item.quantity }}
            </span>
          </div>
        </div>
        <span class="text-gray-700">
          {{ formatCurrency((item.price ?? 0) * (item.quantity ?? 0)) }}
        </span>
      </div>

      <!-- summary -->
      <div class="flex justify-between pt-3">
        <span class="font-medium">Subtotal</span>
        <span>{{ formatCurrency(cartSubtotal) }}</span>
      </div>
      <div class="flex justify-between">
        <span class="font-medium">Shipping</span>
        <span>Free</span>
      </div>
      <div class="flex justify-between font-semibold">
        <span>Total</span>
        <span>{{ formatCurrency(cartTotal) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
