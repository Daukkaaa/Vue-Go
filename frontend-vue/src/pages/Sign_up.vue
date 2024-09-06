<template>
  <v-container class="con_signup">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <form @submit.prevent="submit" class="form_signup">
          <v-text-field
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Name"
          ></v-text-field>
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
          ></v-text-field>
          <v-text-field
            v-model="password.value.value"
            :counter="8"
            :error-messages="password.errorMessage.value"
            label="Password"
          ></v-text-field>
          <v-btn class="me-4" type="submit"> Sign-Up </v-btn>
          <v-btn @click="handleReset"> clear </v-btn>
          <div v-if="errorMsg">
            <p class="error_msg">{{ errorMsg }}</p>
          </div>
        </form>
        <div class="form_navigate">
          <p>Already have an account?</p>
          <a href="/login">Login</a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import apiClient from '../api/api'
import { ref } from 'vue'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true

      return 'Name needs to be at least 2 characters.'
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
    password(value) {
      if (value?.length < 8) {
        return 'Password must be at least 8 characters long.'
      }
      if (!/[0-9]/.test(value)) {
        return 'Password must contain at least one digit.'
      }
      return true
    },
  },
})
const name = useField('name')
const password = useField('password')
const email = useField('email')

const router = useRouter()
const errorMsg = ref('')

const submit = handleSubmit(async values => {
  try {
    const response = await apiClient.post('/signup', {
      name: values.name,
      email: values.email,
      password: values.password,
    })

    router.push('/login')
    return response
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      errorMsg.value = `Error: ${error.response.data.error}`
    } else {
      errorMsg.value = 'An unexpected error occurred' 
    }
  }
})
</script>

<style scoped>
.con_signup {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form_signup {
  padding: 20px;
  box-shadow: 0 1px 4px #333;
  border-radius: 6px;
}

.form_navigate {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  font-size: 17px;
}

.form_navigate a {
  text-decoration: none;
}

.error_msg {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
  font-size: 17px;
  font-weight: 500;
  color: rgb(203, 9, 9);
}
</style>
