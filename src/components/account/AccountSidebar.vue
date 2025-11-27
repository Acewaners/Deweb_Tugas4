<script setup>
defineOptions({
  name: 'AccountSidebar',
})
</script>

<template>
  <aside class="space-y-6 text-sm">
    <!-- Manage My Account -->
    <div>
      <p class="text-xs font-semibold text-gray-500 uppercase mb-3">
        Manage My Account
      </p>
      <ul class="space-y-1">
        <li>
          <!-- Active -->
          <button
            type="button"
            class="text-red-500 text-sm font-medium border-l-2 border-red-500 pl-3"
          >
            My Profile
          </button>
        </li>
      </ul>
    </div>

    <!-- My Orders -->
    <div>
      <p class="text-xs font-semibold text-gray-500 uppercase mb-3">
        My Orders
      </p>
      <ul class="space-y-1 text-gray-500">
        <li>
          <span class="cursor-pointer hover:text-red-500">
            My Returns
          </span>
        </li>
        <li>
          <span class="cursor-pointer hover:text-red-500">
            My Cancellations
          </span>
        </li>
      </ul>
    </div>

    <!-- My Wishlist -->
    <div>
      <p class="text-xs font-semibold text-gray-500 uppercase mb-3">
        My Wishlist
      </p>
      <ul class="space-y-1 text-gray-500">
        <li>
          <span class="cursor-pointer hover:text-red-500">
            View Wishlist
          </span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped></style>