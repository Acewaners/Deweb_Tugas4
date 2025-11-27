<script setup>
import AuthLayout from '@/components/auth/AuthLayout.vue'
import LoginForm from '@/components/auth/LoginForm.vue'

defineOptions({
  name: 'LoginView',
})
</script>

<template>
  <AuthLayout>
    <LoginForm />
  </AuthLayout>
</template>

<style scoped></style>
