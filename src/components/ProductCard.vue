<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { HeartIcon, EyeIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/24/solid'
import { addToCart } from '@/stores/cartStore'
import { authState } from '@/stores/authStore'
import { toggleWishlist, isInWishlist } from '@/stores/wishlistStore'

defineOptions({
  name: 'ProductCard',
})

const router = useRouter()

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: [String, Number],
    required: true,
  },
  oldPrice: {
    type: [String, Number],
    default: null,
  },
  rating: {
    type: Number,
    default: 5,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: '/airpods.png',
  },
})

// ADD TO CART – hanya boleh kalau sudah login
const handleAddToCart = () => {
  if (!authState.isAuthenticated) {
    router.push({
      path: '/signup',
      query: { redirect: router.currentRoute.value.fullPath },
    })
    return
  }

  addToCart({
    id: props.id,
    title: props.title,
    price: Number(props.price),
    image: props.image,
  })
}

// WISHLIST
const inWishlist = computed(() => isInWishlist(props.id))

const handleToggleWishlist = () => {
  if (!authState.isAuthenticated) {
    router.push({
      path: '/signup',
      query: { redirect: router.currentRoute.value.fullPath },
    })
    return
  }

  toggleWishlist({
    id: props.id,
    title: props.title,
    price: Number(props.price),
    image: props.image,
  })
}
</script>

<template>
  <div
    class="bg-gray-100 rounded-lg p-4 relative group hover:shadow-md transition-shadow overflow-hidden"
  >
    <!-- Wishlist & Eye Icons -->
    <div class="absolute top-3 right-3 flex flex-col space-y-2 z-10">
      <!-- HEART: toggle wishlist -->
      <button
        class="bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-50 transition-colors"
        @click.stop="handleToggleWishlist"
      >
        <HeartIcon
          class="w-5 h-5 transition-colors"
          :class="
            inWishlist
              ? 'text-red-500'
              : 'text-gray-600 hover:text-red-500'
          "
        />
      </button>

      <!-- Eye (belum ada fungsi khusus) -->
      <button class="bg-white rounded-full p-1.5 shadow-sm hover:bg-gray-50 transition-colors">
        <EyeIcon class="w-5 h-5 text-gray-600 hover:text-black transition-colors" />
      </button>
    </div>

    <!-- Product Image Container -->
    <div class="relative">
      <div class="aspect-square flex items-center justify-center py-4">
        <img :src="image" :alt="title" class="w-full h-full object-contain" />
      </div>

      <div
        class="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out"
      >
        <button
          class="w-full cursor-pointer bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors text-sm font-medium"
          @click.stop="handleAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>

    <!-- Product Info -->
    <div class="space-y-2 mt-4">
      <h3 class="font-medium text-sm md:text-base line-clamp-2 min-h-10">
        {{ title }}
      </h3>

      <div class="flex items-center gap-3">
        <span class="text-red-500 font-semibold text-base md:text-lg">Rp.{{ price }}</span>
        <span v-if="oldPrice" class="text-gray-400 line-through text-sm">Rp.{{ oldPrice }}</span>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex items-center">
          <StarIcon v-for="star in 5" :key="star" class="w-4 h-4 text-yellow-400" />
        </div>
        <span class="text-gray-500 text-sm">({{ reviews }})</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
