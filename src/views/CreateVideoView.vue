<template>
  <div v-if='isLoading'>
    <h1 class="mb-5">Add video</h1>
    <form action="#" @submit.prevent='sendForm()'>
      <BaseInput placeholder='Video name' v-model='form.title' :error='errors.title' input-class='form-control-lg' />
      <BaseInput label='Description' placeholder='Video description' type='textarea' v-model='form.description'
        :error='errors.description' />
      <BaseInput label='Cover image' type='file' v-model='form.cover_file' :error='errors.cover_file' />
      <template v-if='isEdit'>
        <img class='d-block mx-auto' style='width: 300px; object-fit: cover;' :src="form.cover_url" alt="">
      </template>
      <BaseInput label='Video file' type='file' v-model='form.video_file' :error='errors.video_file' />
      <template v-if='isEdit'>
        <video class='d-block mx-auto' style='width: 300px; object-fit: cover;' :src="form.video_url" controls></video>
      </template>
      <Submit :value="isEdit ? 'Edit' : 'Add'" />
    </form>
  </div>
</template>

<script>
import { inject, onMounted, ref } from 'vue';
import BaseInput from '../components/Form/BaseInput.vue'
import Submit from '../components/Form/Submit.vue'
import { getVideoById, sendVideo, updateVideo } from '../router/requests'
import router from '../router'
import { useRoute } from 'vue-router';

export default {
  components: { BaseInput, Submit },
  setup() {
    const route = useRoute()
    const videoId = route.params.id
    const isLoading = ref(false)
    const form = ref({})
    const errors = ref({})
    const user = inject('user')
    const isEdit = ref(false)

    const sendForm = async () => {
      errors.value = {}

      const { body, code } = isEdit.value ? await updateVideo(videoId, form.value) : await sendVideo(form.value)

      if (code === 204) {
        return router.push({ name: 'myVideos' })
      }

      errors.value = body.errors
    }

    onMounted(async () => {
      if (videoId) {
        const { body, code } = await getVideoById(videoId)

        if (code === 200) {
          if (body.data.user.id === user.value.id) {
            isEdit.value = true
            form.value = body.data
          }
        }
      }

      isLoading.value = true
    })

    return { form, sendForm, errors, isLoading, isEdit }
  }
}
</script>