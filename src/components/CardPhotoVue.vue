<template>
  <div class="card" :class="color">
    <div class="card-image">
      <user />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Lorem ipsum</span>
    </div>
    <div class="card-reveal" :class="color">
      <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim est sed tellus rutrum commodo. Donec ornare augue id porttitor elementum. Nunc molestie venenatis nulla a blandit.</p>
    </div>
  </div>
</template>

<script>
import User from "./icons/User";
export default {
  name: 'CardPhotoVue',
  components: {User},
  props: {
    color: {
      type: String,
    },

    title: {
      type: String,

    },

    description: {
      type: String,
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 50px;
}

.card-image {
  text-align: center;
  margin: 0 auto;
  padding: 24px 24px 0 24px;
}

.single-icon {
  border-radius: 50%;
  background: #607d8b;
  color: white;
  padding: 24px;
  height: 100px;
}

.card-title {
  color: white !important;
  font-weight: 500;
  text-align: center;
  opacity: 1;
  transition: opacity 0.25s ease-in !important;
}

.card-title:hover {
  opacity: 0.65;
}

.card-action {
  text-align: center;
  border-bottom-right-radius: 50px !important;
  border-bottom-left-radius: 50px !important;
}

a {
  color: white !important;
  text-transform: uppercase;
  font-weight: 500;
  opacity: 1;
  transition: opacity 0.25s ease-in !important;
}

a:hover {
  opacity: 0.65;
}

p {
  color: white !important;
}

</style>
