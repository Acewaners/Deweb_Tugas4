<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { wishlistState, removeFromWishlist } from '@/stores/wishlistStore'
import { addToCart } from '@/stores/cartStore'

defineOptions({
  name: 'WishlistPage',
})

const items = computed(() => wishlistState.items)

const formatCurrency = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value ?? 0)

const handleAddToCart = (item) => {
  addToCart({
    id: item.id,
    title: item.title,
    price: Number(item.price),
    image: item.image,
  })
}

const handleRemove = (id) => {
  removeFromWishlist(id)
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
        <span class="text-gray-900 font-medium">Wishlist</span>
      </p>

      <h1 class="text-xl md:text-2xl font-semibold text-gray-900">
        My Wishlist
      </h1>

      <!-- Kosong -->
      <div
        v-if="items.length === 0"
        class="bg-white rounded-md shadow-sm border border-gray-100 p-6 text-sm text-gray-600"
      >
        Wishlist kamu kosong.
        <RouterLink to="/" class="text-red-500 hover:underline">
          Mulai belanja
        </RouterLink>
      </div>

      <!-- Ada data -->
      <div
        v-else
        class="bg-white rounded-md shadow-sm border border-gray-100 divide-y divide-gray-100"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="flex items-center justify-between px-6 py-4 text-sm"
        >
          <div class="flex items-center gap-3">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <div class="flex flex-col">
              <span class="text-gray-800">
                {{ item.title }}
              </span>
              <span class="text-gray-500">
                {{ formatCurrency(item.price) }}
              </span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <button
              type="button"
              class="px-3 py-1.5 border border-gray-300 rounded text-xs md:text-sm text-gray-700
                     hover:bg-gray-100 transition-colors"
              @click="handleAddToCart(item)"
            >
              Add to Cart
            </button>
            <button
              type="button"
              class="px-3 py-1.5 border border-red-400 text-red-500 rounded text-xs md:text-sm
                     hover:bg-red-50 transition-colors"
              @click="handleRemove(item.id)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
