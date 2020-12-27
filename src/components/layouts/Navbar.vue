<template>
  <nav :class="color">
    <div class="nav-wrapper container">
      <a :href="url" :class="logo">{{ title }}</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Lorem</a></li>
        <li><a href="#">Lorem</a></li>
        <li><a href="#">Lorem</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',

  props: {
    logo: {
      type: String,
    },

    url: {
      type: String,
      required: true
    },

    color: {
      type: String,
    },

    title: {
      type: String,
      required: true,
    },
  },

  data () {
    return {

    }
  }
}
</script>

<style scoped>
a {
  opacity: 1;
  transition: opacity 0.25s ease-in !important;
}

a:hover {
  opacity: 0.65;
}
</style>
