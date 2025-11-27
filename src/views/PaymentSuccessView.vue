<script setup>
import PaymentSuccessCard from '@/components/payment/PaymentSuccessCard.vue'

defineOptions({
  name: 'PaymentSuccessView',
})
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="max-w-5xl mx-auto px-4 py-10">
      <PaymentSuccessCard />
    </div>
  </div>
</template>

<style scoped></style>
