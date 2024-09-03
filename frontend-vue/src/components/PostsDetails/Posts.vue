<template>
  <v-col gutters cols="12" sm="4">
    <v-card class="mx-auto post-card" :max-width="350">
      <v-img
        class="align-end text-white"
        height="200"
        width="350"
        :src="post.url"
        cover
      ></v-img>
      <v-card-text class="post-card-text">
        <h3 class="post-title">{{ post.title }}</h3>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text>Share</v-btn>
        <v-btn color="orange" text @click="store.deletePost(post.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
import { defineProps } from 'vue'
import { usePostStore } from '../../stores/post';

const store = usePostStore()

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

</script>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  box-shadow: 0 0 2px #333;
}

.post-card-text {
  flex-grow: 1;
}

.post-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
