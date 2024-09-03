<template>
  <v-footer
    class="bg-primary text-center d-flex flex-column custom-footer mt-15"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4 cl"
        variant="text"
      ></v-btn>
    </div>
    <div class="pt-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique facere consequuntur minima tempora, provident quod debitis officiis ad voluptatibus sed cupiditate laboriosam error dolores, id minus, perferendis omnis. Praesentium, nam?
    </div>
    <v-divider></v-divider>
    <div class="pt-2">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script setup>
    const icons = [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ]
</script>

<style scoped>
.custom-footer {
  max-height: 180px; 
}
</style>