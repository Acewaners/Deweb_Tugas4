<script setup>
defineOptions({
  name: 'AuthLayout',
})
</script>

<template>
  <section class="h-screen">
    <div class="container h-full px-6 py-24">
      <div class="flex h-full flex-wrap items-center justify-center lg:justify-between">
        <!-- KIRI: gambar -->
        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 flex justify-center">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="w-full object-cover rounded-lg shadow-lg max-w-[520px] h-auto"
            alt="Phone image"
          />
        </div>

        <!-- KANAN: slot untuk form -->
        <div class="md:w-8/12 lg:ms-6 lg:w-5/12">
          <div class="px-6">
            <div class="max-w-xs ml-auto">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
