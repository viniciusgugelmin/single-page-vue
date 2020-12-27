<template>
  <div class="card" :class="color">
    <div class="card-content white-text">
      <span class="card-title">{{ title }}</span>
      <p>{{ description }}</p>
    </div>
    <div class="card-action">
      <a href="#">Lorem ipsum</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardVue',

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

.card-title {
  font-weight: 500;
  text-align: center;
}

.card-action {
  text-align: center;
  border-bottom-right-radius: 50px !important;
  border-bottom-left-radius: 50px !important;
}

a {
  color: white !important;
  font-weight: 500;
  opacity: 1;
  transition: opacity 0.25s ease-in !important;
}

a:hover {
  opacity: 0.65;
}
</style>
