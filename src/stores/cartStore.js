// src/stores/cartStore.js
import { reactive, computed } from 'vue'

const state = reactive({
  items: [],
})

const cartItemCount = computed(() =>
  state.items.reduce((sum, item) => sum + item.quantity, 0),
)

function addToCart(product) {
  if (!product || !product.id) {
    console.warn('addToCart called without valid product id', product)
    return
  }

  const existing = state.items.find((item) => item.id === product.id)

  if (existing) {
    existing.quantity += product.quantity ?? 1
  } else {
    state.items.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: product.quantity ?? 1,
    })
  }
}

function removeFromCart(id) {
  const index = state.items.findIndex((item) => item.id === id)
  if (index !== -1) state.items.splice(index, 1)
}

function clearCart() {
  state.items.splice(0, state.items.length)
}

export { state as cartState, cartItemCount, addToCart, removeFromCart, clearCart }
