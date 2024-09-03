<template>
  <v-container>
    <v-row gutters>
      <template v-if="storePost.loading">
        <PostsLoading v-for="n in 12" :key="n" />
      </template>
      <template v-else>
        <AddPost />
        <Posts v-for="post in storePost.posts" :key="post.id" :post="post" />
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import Posts from '../components/PostsDetails/Posts.vue'
import PostsLoading from '../components/PostsDetails/PostsLoading.vue'
import AddPost from '../components/PostsDetails/AddPost.vue'
import { useAuthStore } from '../stores/auth'
import { usePostStore } from '../stores/post'
import axios from 'axios'

const storePost = usePostStore()
const storeAuth = useAuthStore()

onMounted(async () => {
  storePost.getPosts()
  try {
    const response = await axios.get('http://localhost:8080/', {
      withCredentials: true,
    })
    storeAuth.profile = true
    return response
  } catch (error) {
    console.error('Authorization failed:', error)
  }
})
</script>

<style scoped></style>
