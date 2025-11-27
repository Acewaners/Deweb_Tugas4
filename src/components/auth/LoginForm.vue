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

const clearError = () => {
  if (errorMessage.value) errorMessage.value = ''
}

const onLogin = () => {
  errorMessage.value = ''
  loading.value = true

  const emailVal = email.value.trim()
  const passVal = password.value.trim()

  // VALIDASI BENAR: SALAH SATU KOSONG → ERROR
  if (!emailVal || !passVal) {
    errorMessage.value = 'Email dan Password harus diisi.'
    loading.value = false
    return
  }

  // anggap login berhasil (dummy)
  login(emailVal || 'User')

  loading.value = false
  router.push('/')
}
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold text-black mb-4">
      Log in to Emotix
    </h2>

    <form @submit.prevent="onLogin">
      <div class="mb-6">
        <label
          for="email"
          class="block text-sm text-neutral-500 mb-2"
        >
          Email address
        </label>
        <input
          v-model="email"
          @input="clearError"
          id="email"
          name="email"
          type="email"
          class="block w-full rounded border border-neutral-200 bg-transparent
                 px-3 py-2 leading-normal outline-none transition-shadow duration-150
                 focus:shadow-outline focus:border-primary"
          placeholder="you@company.com"
          required
        />
      </div>

      <div class="mb-6">
        <label
          for="password"
          class="block text-sm text-neutral-500 mb-2"
        >
          Password
        </label>
        <input
          v-model="password"
          @input="clearError"
          id="password"
          name="password"
          type="password"
          class="block w-full rounded border border-neutral-200 bg-transparent
                 px-3 py-2 leading-normal outline-none transition-shadow duration-150
                 focus:shadow-outline focus:border-primary"
          placeholder="Password"
          required
        />
      </div>

      <div class="mb-6 flex items-center">
        <input
          id="remember"
          type="checkbox"
          v-model="remember"
          class="h-4 w-4 mr-2 border-neutral-300"
        />
        <label for="remember" class="text-sm">Remember me</label>
      </div>

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

      <p v-if="errorMessage" class="text-sm text-red-500 mb-2">
        {{ errorMessage }}
      </p>

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
