<template>
  <h1 class="mb-5">Add video</h1>
  <form action="#">
    <div class="form-group mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="Video name">
    </div>
    <div class="form-group mb-3">
      <label for="video-description">Description</label>
      <textarea id="video-description" class="form-control" type="text" placeholder="Video description"></textarea>
    </div>
    <div class="form-group mb-3">
      <label>Cover image</label>
      <input type="file" class="form-control">
    </div>
    <div class="form-group mb-3">
      <label>Video file</label>
      <input type="file" class="form-control">
    </div>
    <div class="form-group">
      <input type="submit" class="btn btn-primary" value="Add">
    </div>
  </form>
</template>