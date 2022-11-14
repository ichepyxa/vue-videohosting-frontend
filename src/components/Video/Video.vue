<template>
  <div class="col">
    <div class="card shadow-sm">
      <img :src='video.cover_url' class="bd-placeholder-img card-img-top" width="100%" height="225" />

      <div class="card-body">
        <p class="card-text fw-bold">{{ video.title }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <RouterLink :to="{ name: `video`, params: { id: video.id } }" class="btn btn-sm btn-outline-secondary">
              View</RouterLink>
          </div>
          <small class="text-muted">Likes: {{ video.like_count }}</small>
        </div>
        <template v-if='forUser'>
          <hr>
          <div class='mb-2'>Status: {{ video.status }}</div>
          <div class='btn-group w-100'>
            <RouterLink :to="{
              name: 'editVideo', params: { id: video.id }
            }" class='btn btn-sm btn-warning'>Edit video
            </RouterLink>
            <a href='' @click.prevent='deleteVideo(video.id)' class='btn btn-sm btn-danger'>Remove video</a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import router from '../../router'
import { deleteUserVideo } from '../../router/requests'

export default {
  props: [
    "video",
    "forUser"
  ],
  setup() {
    const deleteVideo = async (videoId) => {
      await deleteUserVideo(videoId);
      return router.go(router.currentRoute);
    };
    return { deleteVideo };
  },
  components: { RouterLink }
}
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>