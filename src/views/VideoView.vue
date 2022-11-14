<template>
  <div v-if='isLoading'>
    <h1 class="mb-5">{{ video.title }}</h1>
    <video :src="video.video_url" class="mb-3"
      style="background-color: #aaa; width: 100%; height: 300px; object-fit: cover;" controls></video>
    <button v-if='user && !video.has_like' class='btn btn-success d-block ms-auto' @click.prevent='like()'>Like</button>
    <p>Author: {{ video.user.username }}</p>
    <p>Likes: {{ video.like_count }}</p>
    <p>Description: {{ video.description }}</p>
    <p>Comments: {{ video.comment_count }}</p>
    <form action="#" class="mt-5 mb-5">
      <div class="form-group mb-3">
        <label>Comment</label>
        <textarea class="form-control" placeholder="Comment"></textarea>
      </div>
      <div class="form-group">
        <input type="submit" value="Send" class="btn btn-primary">
      </div>
    </form>
  </div>
</template>

<script>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getVideoById, likeVideo } from '../router/requests';

export default {
  setup() {
    const route = useRoute()
    const videoId = route.params.id
    const video = ref({})
    const isLoading = ref(false)
    const user = inject('user')
    const like = async () => {
      await likeVideo(video.value.id)
      video.value.like_count += 1
    }

    onMounted(async () => {
      const { body, code } = await getVideoById(videoId)
      video.value = body.data
      isLoading.value = true
    })

    return { video, isLoading, user, like }
  }
}
</script>