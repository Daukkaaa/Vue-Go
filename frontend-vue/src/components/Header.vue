<template>
  <v-container fluid class="mb-5">
    <v-app-bar color="primary" dark>
      <v-toolbar-title class="white--text ml-15">My Vue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-flex ga-2">
        <v-btn outlined class="nav-btn" @click="router.push('/')"> Home </v-btn>
        <v-btn outlined class="nav-btn" @click="router.push('/about')"> About </v-btn>
        <div v-if="storeAuth.profile">
          <v-btn outlined class="nav-btn mr-15" @click="router.push('/profile')">Profile</v-btn>
        </div>
        <div v-else class="d-flex ga-3">
          <v-btn outlined class="profile-btn" @click="router.push('/signup')"> Sign-up </v-btn>
          <v-btn outlined class="profile-btn mr-15" @click="router.push('/login')"> Login </v-btn>
        </div>
      </div>
    </v-app-bar>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter()
const storeAuth = useAuthStore()

</script>

<style scoped>
.v-app-bar {
  background-color: #1976d2;
}

.nav-btn {
  margin-left: 8px;
  font-size: 14px;
  font-weight: 600;
}

.profile-btn {
  background-color: aliceblue;
  padding: 10px;
  color: #1976d2;
}

.nav-link {
  text-decoration: none;
  color: white;
}

.nav-link:hover {
  color: #bbdefb;
}

.v-toolbar-title {
  margin-right: auto;
}
</style>
