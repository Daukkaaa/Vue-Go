<template>
  <v-col gutters cols="12" sm="4">
    <v-card class="mx-auto post-card" :max-width="350">
      <div class="placeholder-image">
        <AnimatedPlaceholder height="250px" width="350px" />
      </div>
      <v-card-text class="post-card-text">
        <AnimatedPlaceholder height="40px" width="100%" class="text-anim" />
      </v-card-text>
      <v-card-actions class="actions-anim">
        <AnimatedPlaceholder height="32px" width="80px" class="btn-anim" />
        <AnimatedPlaceholder height="32px" width="80px" class="btn-anim" />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue';
</script>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  box-shadow: 0 0 2px #333;
}

.placeholder-image {
  background-color: #e0e0e0; /* Light gray background */
}

.text-anim, .btn-anim  {
  border-radius: 5px;
}

.actions-anim {
  display: flex;
  gap: 10px;
}

</style>
