import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../api/api";

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false)
    const user = ref(null)

    function auth(userData) {
        isAuthenticated.value = true
        user.value = userData
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('user', JSON.stringify(userData))
    }

    function notAuth() {
      isAuthenticated.value = false
      user.value = null
      localStorage.setItem('isAuthenticated', 'false')
      localStorage.setItem('user', '')
    }

    function loadAuthState() {
        const storedAuth = localStorage.getItem('isAuthenticated')
        const storedUser = localStorage.getItem('user')
        if (storedAuth === 'true') {
            isAuthenticated.value = true
            user.value = JSON.parse(storedUser)
        } else {
            isAuthenticated.value = false
            user.value = null
        }
    }

    async function logout() {
        try {
            await apiClient.get('/logout')
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('user')
            location.reload()
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    return { isAuthenticated, auth, notAuth, loadAuthState, logout }
})

