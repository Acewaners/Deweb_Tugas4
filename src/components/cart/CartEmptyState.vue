<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-white rounded-md shadow-sm p-10 text-center">
    <p class="text-sm text-gray-600 mb-4">Your cart is empty.</p>
    <RouterLink
      to="/"
      class="inline-block px-4 py-2 text-xs md:text-sm font-medium text-white rounded
            hover:bg-red-600 active:bg-red-700 transition-colors"
      style="background-color:#e04b4b"
    >
      Return To Shop
    </RouterLink>
  </section>
</template>

<style scoped></style>
