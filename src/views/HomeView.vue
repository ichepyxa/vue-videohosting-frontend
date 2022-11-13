<template>
  <input class="form-control form-control-lg mb-5" type="text" placeholder="Search">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div class="col" v-for='video in videos' :key='video.id'>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { videosSearch } from '../router/requests'

export default {
  setup() {
    const videos = ref([])

    onMounted(async () => {
      const { body, code } = await videosSearch('')
      videos.value = body.data
    })

    return { videos }
  }
}
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>