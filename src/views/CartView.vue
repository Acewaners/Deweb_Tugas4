<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { cartState } from '@/stores/cartStore'

import CartEmptyState from '@/components/cart/CartEmptyState.vue'
import CartTable from '@/components/cart/CartTable.vue'
import CartActions from '@/components/cart/CartActions.vue'
import CartTotals from '@/components/cart/CartTotals.vue'

defineOptions({
  name: 'CartView',
})

const cartItems = computed(() => cartState.items)

const couponCode = ref('')
const couponMessage = ref('')

const formatCurrency = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value ?? 0)

const updateQuantity = (item, qty) => {
  const parsed = Number(qty)
  item.quantity = Number.isNaN(parsed) || parsed <= 0 ? 1 : parsed
}

const applyCoupon = () => {
  if (!couponCode.value.trim()) {
    couponMessage.value = 'Masukkan kode kupon dulu.'
    return
  }
  couponMessage.value =
    'Kupon diterapkan (dummy). Fitur ini belum terhubung ke backend.'
}

// NEW: update status selected
const updateSelected = (item, selected) => {
  item.selected = selected
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-10 space-y-10">
      <!-- Breadcrumb -->
      <p class="text-xs text-gray-500">
        <RouterLink
          to="/"
          class="text-gray-400 hover:text-red-500 transition-colors"
        >
          Home
        </RouterLink>
        <span class="mx-2 text-gray-400">/</span>
        <span class="text-gray-900 font-medium">Cart</span>
      </p>

      <CartEmptyState v-if="cartItems.length === 0" />

      <template v-else>
        <CartTable
          :items="cartItems"
          :formatCurrency="formatCurrency"
          @update-quantity="updateQuantity"
          @update-selected="updateSelected"
        />

        <section
          class="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-start"
        >
          <div class="md:col-span-2">
            <CartActions
              v-model:couponCode="couponCode"
              :couponMessage="couponMessage"
              @applyCoupon="applyCoupon"
            />
          </div>

          <CartTotals
            :items="cartItems"
            :formatCurrency="formatCurrency"
          />
        </section>
      </template>
    </div>
  </div>
</template>
