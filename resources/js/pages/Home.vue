<template>
  <site-template>
    <poster-vue :color="color" :submit="onSubmit" :disabled="disabled" />
    <timeline-vue :color="color" :posts="posts" />
  </site-template>
</template>

<script>
import SiteTemplate from "@/layouts/SiteTemplate";
import TimelineVue from "@/components/home/TimelineVue";
import PosterVue from "@/components/home/PosterVue";

export default {
  name: 'Home',

  components: {PosterVue, TimelineVue, SiteTemplate},

  data () {
    return {
      color: 'blue-grey darken-2',

      posts: [],

      disabled: false,
    }
  },

  methods: {
    onSubmit(description) {
      this.disabled = true;
      let post = { name: this.user.name, description: description, date: new Date().toLocaleString() }

      this.posts.unshift(post);
      this.disabled = false;
    }
  }
}
</script>

<style scoped>

</style>
