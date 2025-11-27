<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'ContactForm',
})

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const isSending = ref(false)

const handleSubmit = () => {
  if (!name.value || !email.value || !phone.value || !message.value) {
    alert('Lengkapi semua field terlebih dahulu.')
    return
  }

  isSending.value = true

  // dummy submit
  setTimeout(() => {
    console.log('Contact form data:', {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    })
    isSending.value = false
    alert('Pesan terkirim (dummy, belum terhubung ke backend).')

    // reset
    name.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''
  }, 700)
}
</script>

<template>
  <div class="flex-1 bg-white rounded-xl shadow-md p-6 md:p-8">
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <!-- Input Row: Name, Email, Phone -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          v-model="name"
          type="text"
          placeholder="Your Name *"
          class="w-full bg-gray-100 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          v-model="email"
          type="email"
          placeholder="Your Email *"
          class="w-full bg-gray-100 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          v-model="phone"
          type="tel"
          placeholder="Your Phone *"
          class="w-full bg-gray-100 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <!-- Textarea -->
      <textarea
        v-model="message"
        placeholder="Your Message"
        rows="8"
        class="w-full bg-gray-100 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
      ></textarea>

      <!-- Submit Button -->
      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="isSending"
          class="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span v-if="!isSending">Send Message</span>
          <span v-else>Sending...</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
