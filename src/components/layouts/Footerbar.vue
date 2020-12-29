<template>
  <footer class="page-footer z-depth-2" :class="color">
    <div class="footer-copyright" :class="color">
      <div class="container">
        <span>&copy; {{ currentYear }} Copyright {{ title }}</span>
        <a href="#top" class="right"></a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footerbar',

  props: {
    color: {
      type: String,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    }
  },

  data () {
    return {
      footerVisibility: false,
    }
  },

  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.page-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

a {
  opacity: 1;
  transition: opacity 0.25s ease-in;
}

a:hover {
  opacity: 0.5;
}

button {
  font-size: 20px;
  color: white;
  cursor: pointer;
  background: inherit;
  box-shadow: inherit;
  border: inherit;
}
</style>
