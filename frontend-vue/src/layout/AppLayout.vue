<template>
  <v-app>
    <component :is="Header" />
    <v-main>
      <slot></slot>
    </v-main>
    <component :is="Footer" />
  </v-app>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped>
</style>

