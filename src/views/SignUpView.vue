<script setup>
import AuthLayout from '@/components/auth/AuthLayout.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

defineOptions({
  name: 'SignUpView',
})
</script>

<template>
  <AuthLayout>
    <RegisterForm />
  </AuthLayout>
</template>

<style scoped></style>
