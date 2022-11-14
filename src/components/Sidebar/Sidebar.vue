<template lang="">
  <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar position-fixed"
    style="width: 280px;height: 100vh;">
    <RouterLink :to="{name: 'home'}" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <i class="fa-solid fa-video me-2"></i>
      <span class="fs-4">VideoHosting</span>
    </RouterLink>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <RouterLink :to="{name: 'home'}" class="nav-link active">
          <i class="fa-solid fa-home"></i>
          Home
        </RouterLink>
      </li>
      <li v-if='user'>
        <RouterLink :to="{name: 'myVideos'}" class="nav-link text-white">
          <i class="fa-solid fa-video"></i>
          My videos
        </RouterLink>
      </li>
      <li v-if='user'>
        <RouterLink :to="{name: 'profile'}" class="nav-link text-white">
          <i class="fa-solid fa-user"></i>
          My Profile
        </RouterLink>
      </li>
      <li v-if='user'>
        <RouterLink :to="{name: 'createVideo'}" class="nav-link text-white">
          <i class="fa-solid fa-plus"></i>
          Add video
        </RouterLink>
      </li>
      <li v-if='user'>
        <a href='#' @click.prevent='logout' class="nav-link text-white">
          <i class="fa-solid fa-right-from-bracket"></i>
          Logout
        </a>
      </li>
      <li v-if='!user'>
        <RouterLink :to="{name: 'login'}" class="nav-link text-white">
          <i class="fa-solid fa-user"></i>
          Login
        </RouterLink>
      </li>
      <li v-if='!user'>
        <RouterLink :to="{name: 'registration'}" class="nav-link text-white">
          <i class="fa-solid fa-user"></i>
          Register
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const user = inject('user')
    const logout = inject('logout')

    return { user, logout }
  }
}
</script>

<style lang="">
  
</style>