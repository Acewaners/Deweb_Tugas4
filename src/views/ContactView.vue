<script setup>
import ContactInfoCard from '@/components/contact/ContactInfoCard.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import ContactMap from '@/components/contact/ContactMap.vue'

defineOptions({
  name: 'ContactView',
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-10">
    <!-- Row: Contact Info Card + Contact Form -->
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Left Side: Contact Info Card -->
      <ContactInfoCard />

      <!-- Right Side: Contact Form -->
      <ContactForm />
    </div>

    <!-- Google Maps Section -->
    <ContactMap />
  </div>
</template>

<style scoped></style>
