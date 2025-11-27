<script setup>
defineOptions({
  name: 'OrdersView',
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-4">
    <h1 class="text-2xl md:text-3xl font-bold text-gray-900">
      My Orders
    </h1>
    <p class="text-sm text-gray-500">
      This page will show your order history (dummy content for now).
    </p>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <p class="text-sm text-gray-600">
        You don't have any orders yet.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
