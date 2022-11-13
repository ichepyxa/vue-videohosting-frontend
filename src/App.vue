<template>
  <main class="d-flex flex-nowrap" v-if='pageLoaded'>
    <Sidebar />
    <div class="container pt-5" style="padding-left: 280px">
      <RouterView />
    </div>
  </main>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue';
import { onMounted, provide, readonly, ref } from 'vue';
import { setAuthUserToken, getUserProfile, removeAuthUserToken } from './use/functions';
import { userLogout } from './router/requests'
import router from './router';

export default {
  components: { Sidebar },
  setup() {
    const user = ref(null)
    const pageLoaded = ref(false)

    const login = async token => {
      setAuthUserToken(token)
      await updateUser()
    }

    const updateUser = async () => {
      user.value = await getUserProfile()
    }

    const logout = async () => {
      await userLogout()
      user.value = null
      removeAuthUserToken()
      return router.push({ name: 'home' })
    }

    onMounted(async () => {
      user.value = await getUserProfile()
      pageLoaded.value = true
    })

    provide('login', login)
    provide('logout', logout)
    provide('updateUser', updateUser)
    provide('user', readonly(user))

    return { pageLoaded }
  }
}
</script>