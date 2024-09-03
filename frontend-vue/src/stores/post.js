import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const usePostStore = defineStore('post', () => {
  const posts = ref(JSON.parse(localStorage.getItem('posts')) || [])
  const loading = ref(false)

  const savePostToLocalStorage = () => {
    localStorage.setItem('posts', JSON.stringify(posts.value))
  }

  const updatePostsId = () => {
    posts.value.forEach((post, index) => {
      post.id = index + 1
    })
    savePostToLocalStorage()
  }

  const addPost = post => {
    post.id = Date.now()
    posts.value.unshift(post)
    updatePostsId()
  }

  const deletePost = id => {
    posts.value = posts.value.filter(post => post.id !== id)
    updatePostsId()
  }

  const getPosts = async () => {
    loading.value = true
    if (posts.value.length === 0) {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/photos?_limit=12'
        )
        await new Promise(res => setTimeout(res, 1500)) 
        posts.value = response.data
        updatePostsId()
      } catch (error) {
        console.error(error)
      } finally {
        loading.value = false
      }
    } else {
      await new Promise(res => setTimeout(res, 1500)) 
      loading.value = false
    }
  }

  return { posts, loading, addPost, deletePost, getPosts }
})
