<template>
  <div class="form-group">
    <input type="submit" class="btn btn-primary" :value="value ?? 'Send'">
  </div>
</template>

<script>
export default {
  props: [
    'value'
  ]
}
</script>