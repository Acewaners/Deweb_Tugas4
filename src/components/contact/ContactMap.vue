<script setup>
const props = defineProps({
  mapUrl: {
    type: String,
    default:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0219423220515!2d116.86418137423209!3d-1.144795535486299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14b623d189119%3A0x77d779a0ce9ddb!2sKOST%20AZRIEL!5e0!3m2!1sid!2sid!4v1764150179960!5m2!1sid!2sid',
  },
})

defineOptions({
  name: 'ContactMap',
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden h-[350px] md:h-[400px]">
    <iframe
      :src="props.mapUrl"
      class="w-full h-full border-0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style scoped></style>
