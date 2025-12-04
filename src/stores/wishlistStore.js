import { reactive, computed } from 'vue'

const state = reactive({
  items: [],
})

const wishlistCount = computed(() => state.items.length)

function addToWishlist(product) {
  if (!product || !product.id) {
    console.warn('addToWishlist called without valid product', product)
    return
  }

  const exists = state.items.find((item) => item.id === product.id)
  if (exists) return

  state.items.push({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
  })
}

function removeFromWishlist(id) {
  const index = state.items.findIndex((item) => item.id === id)
  if (index !== -1) state.items.splice(index, 1)
}

function toggleWishlist(product) {
  const exists = state.items.find((item) => item.id === product.id)
  if (exists) {
    removeFromWishlist(product.id)
  } else {
    addToWishlist(product)
  }
}

function isInWishlist(id) {
  return state.items.some((item) => item.id === id)
}

export {
  state as wishlistState,
  wishlistCount,
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  isInWishlist,
}
