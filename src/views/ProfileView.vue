<template>
  <h1 class="mb-5">Profile</h1>
  <form action="#">
    <div class="form-group mb-3">
      <label>Name</label>
      <input class="form-control" type="text" placeholder="Your name" value="Victor">
    </div>
    <div class="form-group mb-3">
      <label>E-Mail</label>
      <input class="form-control" type="email" placeholder="Your email" value="victor@example.com">
    </div>
    <div class="form-group mb-3">
      <label>Old password</label>
      <input class="form-control" type="password" placeholder="Old password">
    </div>
    <div class="form-group mb-3">
      <label>New password</label>
      <input class="form-control" type="password" placeholder="New password">
    </div>
    <div class="form-group mb-3">
      <label>New password repeat</label>
      <input class="form-control" type="password" placeholder="New password repeat">
    </div>
    <div class="form-group">
      <input type="submit" class="btn btn-primary" value="Save">
    </div>
  </form>
</template>