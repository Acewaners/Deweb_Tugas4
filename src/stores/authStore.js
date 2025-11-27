
import { reactive } from 'vue'

const state = reactive({
  isAuthenticated: false,
  userName: '',
})

function login(name) {
  state.isAuthenticated = true
  state.userName = name || ''
  console.log('[authStore] login', state)
}

function logout() {
  state.isAuthenticated = false
  state.userName = ''
  console.log('[authStore] logout', state)
}

export { state as authState, login, logout }
