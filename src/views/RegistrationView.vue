<template>
  <h1 class="mb-5">Registration</h1>
  <form action="#" @submit.prevent='sendForm()'>
    <BaseInput label='Name' placeholder='Your name' v-model="form.username" :error='errors.username' />
    <BaseInput label='E-Mail' placeholder='Your email' v-model="form.email" :error='errors.email' type='email' />
    <BaseInput label='Password' placeholder='Your password' v-model="form.password" :error='errors.password'
      type='password' />
    <BaseInput label='Password repeat' placeholder='Your password repeat' v-model="form.password_confirmation"
      :error='errors.password_confirmation' type='password' />
    <Submit type='Register' />
  </form>
</template>

<script>
import { ref } from 'vue';
import { sendRegistration } from '../router/requests'
import BaseInput from '../components/Form/BaseInput.vue'
import Submit from '../components/Form/Submit.vue'
import router from '../router'

export default {
  components: { BaseInput, Submit },
  setup() {
    const form = ref({})
    const errors = ref({})

    const sendForm = async () => {
      errors.value = {}

      const { body, code } = await sendRegistration(form.value)

      if (code === 201) {
        return router.push({ name: 'login' })
      }

      errors.value = body.errors
    }

    return { form, sendForm, errors }
  }


}
</script>