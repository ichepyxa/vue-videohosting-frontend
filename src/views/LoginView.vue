<template>
  <h1 class="mb-5">Login</h1>
  <form action="#" @submit.prevent='sendForm()'>
    <BaseInput label='E-Mail' placeholder='Your email' type='email' v-model='form.email' :error="errors.email" />
    <BaseInput label='Password' placeholder='Your password' type='password' v-model='form.password'
      :error="errors.password" />
    <Submit type='Login' />
  </form>
</template>

<script>
import { inject, ref } from 'vue';
import BaseInput from '../components/Form/BaseInput.vue';
import Submit from '../components/Form/Submit.vue';
import router from '../router';
import { sendLogin } from '../router/requests'

export default {
  components: { BaseInput, Submit },
  setup() {
    const form = ref({});
    const errors = ref({});
    const login = inject('login')

    const sendForm = async () => {
      errors.value = {}

      const { body, code } = await sendLogin(form.value)

      if (code === 200) {
        login(body.token)
        return router.push({ name: 'home' });
      }

      errors.value = body.errors
    }

    return { form, sendForm, errors };
  },
}
</script>