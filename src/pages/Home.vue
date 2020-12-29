<template>
  <div>
    <poster-vue :color="color" :submit="onSubmit" :disabled="disabled" />
    <timeline-vue :color="color" :name="name" :posts="posts" />
  </div>
</template>

<script>
import TimelineVue from "../components/home/TimelineVue";
import PosterVue from "../components/home/PosterVue";
export default {
  name: 'Home',

  components: {PosterVue, TimelineVue},

  data () {
    return {
      color: 'blue-grey darken-2',
      name: 'Lorem ipsum',

      posts: [],

      disabled: false,
    }
  },

  methods: {
    onSubmit(description) {
      this.disabled = true;
      let post = { name: this.name, description: description, date: new Date().toLocaleString() }

      this.posts.push(post);
      this.disabled = false;
    }
  }
}
</script>

<style scoped>

</style>
