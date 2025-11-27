<script setup>
const props = defineProps({
  couponCode: {
    type: String,
    required: true,
  },
  couponMessage: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:couponCode', 'applyCoupon', 'placeOrder'])

const onInput = (event) => {
  emit('update:couponCode', event.target.value)
}
</script>

<template>
  <div class="bg-white rounded-md shadow-sm border border-gray-200 p-4 space-y-3">
    <div class="flex flex-col md:flex-row gap-3 md:items-center">
      <input
        :value="props.couponCode"
        @input="onInput"
        type="text"
        placeholder="Coupon Code"
        class="flex-1 border border-gray-300 rounded px-3 py-2 text-xs md:text-sm
               focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-white"
      />
      <button
        type="button"
        @click="emit('applyCoupon')"
        class="px-4 py-2 text-xs md:text-sm font-medium text-white rounded
               hover:bg-red-600 active:bg-red-700 transition-colors"
        style="background-color:#e04b4b"
      >
        Apply Coupon
      </button>
    </div>

    <p v-if="props.couponMessage" class="text-xs text-gray-500">
      {{ props.couponMessage }}
    </p>

    <button
      type="button"
      @click="emit('placeOrder')"
      class="w-full mt-2 px-4 py-2 text-xs md:text-sm font-medium text-white rounded
             hover:bg-red-600 active:bg-red-700 transition-colors"
      style="background-color:#e04b4b"
    >
      Place Order
    </button>
  </div>
</template>
