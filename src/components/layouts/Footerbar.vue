<template>
  <footer class="page-footer z-depth-2" :class="color">
    <div v-show="footerVisibility" class="container hide-on-med-and-down">
      <div class="row">
        <!-- Scaled in -->
        <div class="col l6 s12">
          <h5 class="white-text">{{ title }}</h5>
          <p class="grey-text text-lighten-4">{{ description }}</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Lorem ipsum</h5>
          <ul>
            <slot></slot>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright" :class="color">
      <div class="container">
        <span>&copy; {{ currentYear }} Copyright {{ title }}</span>
        <button class="right" @click="footerVisibility = !footerVisibility">{{ footerVisibility ? 'open' : 'close' }}</button>
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
