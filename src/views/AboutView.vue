<script setup>
import { RouterLink } from 'vue-router'
import AboutStorySection from '@/components/about/AboutStorySection.vue'
import AboutStatsGrid from '@/components/about/AboutStatsGrid.vue'

defineOptions({
  name: 'AboutView',
})
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
        <span class="text-gray-900 font-medium">About</span>
      </p>

      <!-- Our Story -->
      <AboutStorySection />

      <!-- Stats cards -->
      <AboutStatsGrid />
    </div>
  </div>
</template>

<style scoped></style>
