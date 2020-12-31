<template>
  <div id="app" class="blue-grey darken-4">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  display: inline-table;
  height: 100vh;
  width: 100%;
}

.card {
  border: 2px solid #263238;
}
</style>
