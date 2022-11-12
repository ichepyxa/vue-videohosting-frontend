<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar/Sidebar.vue';
</script>

<template>
  <main class="d-flex flex-nowrap">
    <Sidebar />
    <div class="container pt-5" style="padding-left: 280px">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>

</style>
