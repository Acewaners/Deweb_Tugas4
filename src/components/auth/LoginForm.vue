<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { login } from '@/stores/authStore'

defineOptions({
  name: 'LoginForm',
})

const router = useRouter()

const email = ref('')
const password = ref('')
const remember = ref(false)
const loading = ref(false)
const errorMessage = ref('')

// Hapus pesan error saat input berubah
const clearError = () => {
  if (errorMessage.value) errorMessage.value = ''
}

// Fungsi utama login
const onLogin = () => {
  errorMessage.value = ''
  const emailVal = email.value.trim()
  const passVal = password.value.trim()

  // Validasi kosong
  if (!emailVal || !passVal) {
    errorMessage.value = 'Email dan Password harus diisi.'
    return
  }

  loading.value = true

  // Ambil user yang sudah diregister
  const registered = JSON.parse(
    localStorage.getItem('emotix_registered_user') || 'null'
  )

  // Validasi akun
  if (
    !registered ||
    registered.email !== emailVal ||
    registered.password !== passVal
  ) {
    errorMessage.value = 'Email atau password salah.'
    loading.value = false
    return
  }

  // Login berhasil → simpan data ke authStore
  login({
    name: registered.name,
    email: registered.email,
  })

  loading.value = false
  password.value = '' // bersihkan biar aman

  // Redirect ke home / akun
  router.push('/')
}
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold text-black mb-4">
      Log in to Emotix
    </h2>

    <form @submit.prevent="onLogin">
      <!-- Email -->
      <div class="mb-6">
        <label for="email" class="block text-sm text-neutral-500 mb-2">
          Email address
        </label>
        <input
          v-model="email"
          @input="clearError"
          id="email"
          type="email"
          class="block w-full rounded border border-neutral-200 bg-transparent
                 px-3 py-2 leading-normal outline-none transition-shadow duration-150
                 focus:shadow-outline focus:border-primary"
          placeholder="you@company.com"
          required
        />
      </div>

      <!-- Password -->
      <div class="mb-6">
        <label for="password" class="block text-sm text-neutral-500 mb-2">
          Password
        </label>
        <input
          v-model="password"
          @input="clearError"
          id="password"
          type="password"
          class="block w-full rounded border border-neutral-200 bg-transparent
                 px-3 py-2 leading-normal outline-none transition-shadow duration-150
                 focus:shadow-outline focus:border-primary"
          placeholder="Password"
          required
        />
      </div>

      <!-- Remember me -->
      <div class="mb-6 flex items-center">
        <input
          id="remember"
          type="checkbox"
          v-model="remember"
          class="h-4 w-4 mr-2 border-neutral-300"
        />
        <label for="remember" class="text-sm">Remember me</label>
      </div>

      <!-- Tombol login -->
      <div class="mb-4 flex items-center gap-4">
        <button
          type="submit"
          :disabled="loading"
          class="inline-block w-28 rounded-md px-4 py-2 text-sm font-medium
                 leading-normal text-white shadow transition-colors duration-150
                 ease-in-out hover:bg-red-600 focus:bg-red-600 focus:outline-none
                 active:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed"
          style="background-color:#e04b4b"
        >
          <span v-if="!loading">Log In</span>
          <span v-else>Processing...</span>
        </button>

        <RouterLink
          to="/signup"
          class="text-sm text-red-500 hover:underline dark:text-red-400 self-center"
        >
          Create account
        </RouterLink>
      </div>

      <!-- Pesan error -->
      <p v-if="errorMessage" class="text-sm text-red-500 mb-2">
        {{ errorMessage }}
      </p>

      <!-- Forgot password -->
      <a
        href="#!"
        class="text-sm text-red-500 hover:underline dark:text-red-400"
      >
        Forgot password?
      </a>
    </form>
  </div>
</template>

<style scoped></style>
