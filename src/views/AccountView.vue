<script setup>
import { ref } from 'vue'
import AccountProfileForm from '@/components/account/AccountProfileForm.vue'

defineOptions({
  name: 'AccountView',
})

const firstName = ref('Md')
const lastName = ref('Rimel')
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- container persis seperti My Orders -->
    <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 space-y-4">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-900">
        Manage My Account
      </h1>
      <p class="text-sm text-gray-500">
        Welcome!
        <span class="text-red-500 font-medium">
          {{ firstName }} {{ lastName }}
        </span>
      </p>

      <!-- card profil, lebarnya ikut container (sama kaya card My Orders) -->
      <AccountProfileForm
        v-model:firstName="firstName"
        v-model:lastName="lastName"
      />
    </div>
  </div>
</template>

<style scoped></style>
