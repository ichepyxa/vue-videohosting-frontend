<template>
  <div class='row'>
    <div class="col-10">
      <input class="form-control form-control-lg mb-5" type="text" placeholder="Search" v-model='searchString' />
    </div>
    <div class="col-2">
      <button class='btn btn-primary btn-lg' @click.prevent='loadVideos()'>Search</button>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <Video v-for='video in videos' :key='video.id' :video='video' />
  </div>
  <div class='btn-group' v-if='meta.current_page < meta.last_page'>
    <button class='btn btn-outline-primary btn-lg mt-5' @click.prevent='loadVideos(meta.current_page + 1)'>Load
      more...</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { videosSearch } from '../router/requests'
import Video from '../components/Video/Video.vue';

export default {
  components: { Video },
  setup() {
    const videos = ref([])
    const searchString = ref('')
    const meta = ref({})
    const loadVideos = async (page = 1) => {
      const { body, code } = await videosSearch(`${searchString.value}`, page)
      if (page === 1) {
        videos.value = body.data
      } else {
        videos.value = videos.value.concat(body.data)
      }
      meta.value = body.meta
    }

    onMounted(async () => {
      await loadVideos()
    })

    return { videos, searchString, loadVideos, meta }
  }
}
</script>