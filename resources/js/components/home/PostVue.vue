<template>
  <div class="card" :class="color">
    <div class="card-content white-text">
      <span class="card-image">
        <user />
      </span>
      <span class="card-title">{{ item.name }}</span>
      -
      <span class="card-subtitle">({{ item.date }})</span>
      <p>{{ item.description }}</p>
    </div>
    <div class="card-action">
      <i @click="addLike()" class="material-icons logo" :class="color">{{ heart ? 'favorite' : 'favorite_border' }}</i>
      <i class="material-icons logo" :class="color">chat_bubble_outline</i>
    </div>
  </div>
</template>

<script>
import User from "../icons/User";

export default {
  name: 'PostVue',

  components: {User},

  props: {
    color: {
      type: String,
    },

    item: {
      type: Object,
    }
  },

  data () {
    return {
      heart: false
    }
  },

  methods: {
    addLike() {
      this.heart = !this.heart;
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 50px;
}

.card-title {
  display: inline-block !important;
  font-weight: 500;
  font-size: 18px;
}

.card-subtitle {
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
}

.card-action {
  border-bottom-right-radius: 50px !important;
  border-bottom-left-radius: 50px !important;
}

i {
  cursor: pointer;
  color: white !important;
  opacity: 1;
  transition: opacity 0.25s ease-in !important;
}

i:hover {
  opacity: 0.65;
}

.card-image {
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.single-icon {
  border: 1px solid #455a64;
  border-radius: 50%;
  background: #546e7a;
  color: white;
  width: 30px;
  padding: 6px;

  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
