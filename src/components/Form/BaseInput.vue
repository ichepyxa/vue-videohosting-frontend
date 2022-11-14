<template>
  <div class="form-group mb-3">
    <label>{{ label }}</label>
    <template v-if='type === "textarea"'>
      <textarea class="form-control" :type="type ?? 'text'" :class="fullInputClass" :placeholder='placeholder'
        :value='modelValue' @input="inputModelValue($emit, $event)"></textarea>
    </template>
    <template v-else-if='type === "file"'>
      <input class="form-control" type="file" ref='file' :class="fullInputClass" :placeholder='placeholder'
        @change="handleFile($emit)">
    </template>
    <template v-else>
      <input class="form-control" :type="type ?? 'text'" :class="fullInputClass" :placeholder='placeholder'
        :value='modelValue' @input="inputModelValue($emit, $event)">
    </template>
    <span class='invalid-feedback' v-if='error'>{{ error[0] }}</span>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  props: [
    'label',
    'type',
    'placeholder',
    'modelValue',
    'error',
    'inputClass'
  ],
  setup(props) {
    const fullInputClass = computed(() => {
      return `form-control ${props.error ? 'is-invalid' : ''} ${props.inputClass ?? ''}`
    })
    const inputModelValue = (emit, event) => {
      return emit('update:modelValue', event.target.value)
    }

    const file = ref(null)
    const handleFile = emit => {
      return emit('update:modelValue', file.value.files[0])
    }

    return { fullInputClass, inputModelValue, handleFile, file }
  }
}
</script>