<template>
  <h1 class="mb-5">Profile</h1>
  <div class='alert alert-success' v-if='successUpdate'>Success!</div>
  <form action="#" @submit.prevent='sendForm()'>
    <BaseInput label='Name' placeholder="Your name" v-model='form.username' :error='errors.username' />
    <BaseInput label='E-Mail' type='email' placeholder="Your email" v-model='form.email' :error='errors.email' />
    <BaseInput label='Old password' type='password' placeholder="Old password" v-model='form.old_password'
      :error='errors.old_password' />
    <BaseInput label='New password' type='password' placeholder="New password" v-model='form.password'
      :error='errors.password' />
    <BaseInput label='New password repeat' type='password' placeholder="New password repeat"
      v-model='form.password_confirmation' :error='errors.password_confirmation' />
    <Submit value="Save" />
  </form>
</template>

<script>
import { inject, ref } from 'vue';
import BaseInput from '../components/Form/BaseInput.vue';
import Submit from '../components/Form/Submit.vue';
import { sendProfile } from '../router/requests'

export default {
  components: { BaseInput, Submit },
  setup() {
    const user = inject('user')
    const updateUser = inject('updateUser')
    const form = ref({
      username: user.value.username,
      email: user.value.email
    })
    const successUpdate = ref(false)
    const errors = ref({})

    const sendForm = async () => {
      successUpdate.value = false
      errors.value = {}

      const { body, code } = await sendProfile(form.value)

      if (code === 422) {
        errors.value = body.errors
      } else {
        successUpdate.value = true
        await updateUser()
      }
    }

    return { form, sendForm, errors, successUpdate }
  }
}
</script>