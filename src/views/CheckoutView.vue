<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { cartState } from '@/stores/cartStore'

import BillingForm from '@/components/checkout/BillingForm.vue'
import OrderSummary from '@/components/checkout/OrderSummary.vue'
import PaymentMethodSelector from '@/components/checkout/PaymentMethodSelector.vue'
import CouponSection from '@/components/checkout/CouponSection.vue'

defineOptions({
  name: 'CheckoutView',
})

// router untuk pindah ke halaman pembayaran
const router = useRouter()

// ambil item dari store
const cartItems = computed(() => cartState.items)

// billing data dibungkus jadi satu object (dipakai v-model di BillingForm)
const billingData = ref({
  firstName: '',
  companyName: '',
  streetAddress: '',
  apartment: '',
  city: '',
  phoneNumber: '',
  emailAddress: '',
  saveInfo: true,
})

// payment
const paymentMethod = ref('qris')

// coupon
const couponCode = ref('')
const couponMessage = ref('')

const formatCurrency = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value ?? 0)

// ---- COUPON ----
const applyCoupon = () => {
  if (!couponCode.value.trim()) {
    couponMessage.value = 'Masukkan coupon code terlebih dahulu.'
    return
  }
  couponMessage.value =
    'Coupon diterapkan (dummy). Diskon sebenarnya belum terhubung ke backend.'
}

// ---- PLACE ORDER → lanjut ke /payment ----
const placeOrder = () => {
  const d = billingData.value

  // validasi field wajib
  if (!d.firstName || !d.streetAddress || !d.city || !d.phoneNumber || !d.emailAddress) {
    alert(
      'Lengkapi field wajib (First Name, Street Address, Town/City, Phone Number, Email Address).',
    )
    return
  }

  // validasi cart
  if (cartItems.value.length === 0) {
    alert('Cart kamu kosong. Tambahkan produk terlebih dahulu.')
    return
  }

  // simpan data billing & metode bayar (kalau mau dipakai di halaman payment)
  localStorage.setItem('emotix_billing', JSON.stringify(d))
  localStorage.setItem('emotix_payment_method', paymentMethod.value)

  // pindah ke halaman pembayaran (QRIS)
  router.push('/payment')

  // clearCart TIDAK dipanggil di sini, supaya payment page masih bisa baca cart
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-10 space-y-10">
      <!-- Breadcrumb -->
      <p class="text-xs text-gray-500">
        <RouterLink
          to="/account"
          class="text-gray-400 hover:text-red-500 transition-colors"
        >
          Account
        </RouterLink>
        <span class="mx-2 text-gray-400">/</span>
        <RouterLink
          to="/cart"
          class="text-gray-400 hover:text-red-500 transition-colors"
        >
          View Cart
        </RouterLink>
        <span class="mx-2 text-gray-400">/</span>
        <span class="text-gray-900 font-medium">CheckOut</span>
      </p>

      <!-- Judul -->
      <h1 class="text-xl md:text-2xl font-semibold text-gray-900">
        Billing Details
      </h1>

      <!-- Konten utama: 2 kolom -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Kiri: Billing form -->
        <BillingForm v-model="billingData" />

        <!-- Kanan: Ringkasan order + Payment + Coupon -->
        <section class="space-y-4">
          <OrderSummary :items="cartItems" :formatCurrency="formatCurrency" />

          <PaymentMethodSelector v-model="paymentMethod" />

          <CouponSection
            v-model:couponCode="couponCode"
            :couponMessage="couponMessage"
            @applyCoupon="applyCoupon"
            @placeOrder="placeOrder"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* tambahan styling khusus kalau perlu */
</style>
