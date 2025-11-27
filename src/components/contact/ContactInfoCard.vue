<script setup>
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'

defineOptions({
  name: 'ContactInfoCard',
})
</script>

<template>
  <div class="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6">
    <!-- Call To Us Section -->
    <div>
      <div class="flex items-center gap-4 mb-4">
        <div
          class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shrink-0"
        >
          <PhoneIcon class="w-5 h-5 text-white" />
        </div>
        <h3 class="text-lg font-bold text-gray-900">Call To Us</h3>
      </div>
      <div class="space-y-3 text-sm text-gray-600">
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: 0852-4666-4332</p>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-b border-gray-300"></div>

    <!-- Write To Us Section -->
    <div>
      <div class="flex items-center gap-4 mb-4">
        <div
          class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shrink-0"
        >
          <EnvelopeIcon class="w-5 h-5 text-white" />
        </div>
        <h3 class="text-lg font-bold text-gray-900">Write To Us</h3>
      </div>
      <div class="space-y-3 text-sm text-gray-600">
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
