<template>
  <v-container class="mb-10">
    <v-row>
      <v-col cols="12" sm="6">
        <v-file-input
          label="File input"
          variant="solo"
          v-model="fileInput"
          @change="handleFileChange"
          :disabled="!storeAuth.profile"
        ></v-file-input>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          placeholder="Text"
          variant="solo"
          v-model="textInput"
          :disabled="!storeAuth.profile"
        ></v-text-field>
      </v-col>
      <v-col class="d-flex justify-center" cols="12">
        <v-btn class="add-button" @click="handleAddClick">Add</v-btn>
      </v-col>
    </v-row>

    <v-dialog v-model="showDialog" persistent max-width="400">
      <v-card>
        <v-card-title>Please Sign In</v-card-title>
        <v-card-text>
          You need to sign in to make changes.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="goToLogin">Login</v-btn>
          <v-btn text @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePostStore } from '../../stores/post'
import { useAuthStore } from '../../stores/auth'

const storeAuth = useAuthStore()
const storePost = usePostStore()
const fileInput = ref(null)
const textInput = ref('')
const showDialog = ref(false)
const router = useRouter()

const handleFileChange = e => {
  const file = e.target.files[0]
  if (file) {
    fileInput.value = file
  }
}

const convertFileToBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const Save = async () => {
  if (!fileInput.value || !textInput.value) {
    alert('Please fill in both fields.')
    return
  }

  const base64Image = await convertFileToBase64(fileInput.value)
  const newPost = {
    id: storePost.posts.length + 1,
    title: textInput.value,
    url: base64Image,
  }
  storePost.addPost(newPost)
  textInput.value = ''
  fileInput.value = null
}

const handleAddClick = e => {
  if (!storeAuth.profile) {
    showDialog.value = true
  } else {
    Save()
  }
}

const goToLogin = () => {
  showDialog.value = false
  router.push('/login')
}

const closeDialog = () => {
  showDialog.value = false
}
</script>

<style scoped>
.add-button {
  width: auto;
  min-width: 100px;
}

.v-card-title {
  font-weight: bold;
}
</style>
