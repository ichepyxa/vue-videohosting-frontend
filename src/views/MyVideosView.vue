<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <Video v-for='video in videos' :key='video.id' :video='video' for-user='1' />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { getMyVideos } from '../router/requests'
import Video from '../components/Video/Video.vue'

export default {
  components: { Video },
  setup() {
    const videos = ref([])

    onMounted(async () => {
      const { body, code } = await getMyVideos()
      videos.value = body.data
    })

    return { videos }
  }
}
</script>