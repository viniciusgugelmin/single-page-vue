<template>
  <div class="card photo-user" :class="color">
    <div class="card-image">
      <user />
    </div>
    <div class="card-content">
      <span class="card-title grey-text text-darken-4">{{ userName }}</span>
    </div>
  </div>
</template>

<script>
import User from "../icons/User";

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

    userName: {
      type: String,
      required: true
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

.photo-user {
  height: 200px;
}

.card-image {
  text-align: center;
  padding: 24px 30px 0 24px;
}

.single-icon {
  border: 1px solid #455a64;
  border-radius: 50%;
  background: #546e7a;
  color: white;
  padding: 24px;
  height: 100px;

  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
}

.card-title {
  color: white !important;
  font-weight: 500;
  text-align: center;
}

</style>
