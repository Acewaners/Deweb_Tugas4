<script setup>
import { ref } from 'vue'
import AboutStatCard from './AboutStatCard.vue'

defineOptions({
  name: 'AboutStatsGrid',
})

const stats = [
  { id: 1, value: '10.5k', label: 'Sellers active on our site' },
  { id: 2, value: '33k', label: 'Monthly Product Sale' },
  { id: 3, value: '45.5k', label: 'Customers active on our site' },
  { id: 4, value: '25k', label: 'Annual gross sale on our site' },
]

const hoveredStatId = ref(null)

const setHover = (id) => {
  hoveredStatId.value = id
}

const clearHover = () => {
  hoveredStatId.value = null
}
</script>

<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <AboutStatCard
      v-for="item in stats"
      :key="item.id"
      :item="item"
      :active="hoveredStatId === item.id"
      @hover="setHover(item.id)"
      @leave="clearHover"
    />
  </section>
</template>

<style scoped></style>
