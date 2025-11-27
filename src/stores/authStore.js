// src/stores/authStore.js
import { reactive } from 'vue'

// Coba baca status login dari localStorage (kalau ada)
let saved = null
try {
  saved = JSON.parse(localStorage.getItem('emotix_auth') || 'null')
} catch {
  saved = null
}

const state = reactive({
  isAuthenticated: saved?.isLoggedIn ?? false,
  isLoggedIn: saved?.isLoggedIn ?? false,

  userName: saved?.userName || '',
  email: saved?.email || '',
})

function persist() {
  localStorage.setItem(
    'emotix_auth',
    JSON.stringify({
      isLoggedIn: state.isLoggedIn,
      userName: state.userName,
      email: state.email,
    }),
  )
}

/**
 * Bisa dipanggil dengan:
 *  - login('Nama', 'email@example.com')
 *  - login({ name: 'Nama', email: 'email@example.com' })
 *  - login('NamaSaja')
 */
function login(nameOrPayload, maybeEmail) {
  // Bentuk baru: login(name, email)
  if (typeof nameOrPayload === 'string' && typeof maybeEmail === 'string') {
    state.userName = nameOrPayload || ''
    state.email = maybeEmail || ''
  }
  // Bentuk: login({ name, email })
  else if (nameOrPayload && typeof nameOrPayload === 'object') {
    const payload = nameOrPayload
    state.userName = payload.name || payload.email || ''
    state.email = payload.email || ''
  }
  // Bentuk lama: login('Nama')
  else if (typeof nameOrPayload === 'string') {
    state.userName = nameOrPayload || ''
    // email dibiarkan apa adanya
  }

  state.isLoggedIn = true
  state.isAuthenticated = true
  persist()
  console.log('[authStore] login', { ...state })
}

function logout() {
  state.isLoggedIn = false
  state.isAuthenticated = false
  state.userName = ''
  state.email = ''
  persist()
  console.log('[authStore] logout', { ...state })
}

export { state as authState, login, logout }
