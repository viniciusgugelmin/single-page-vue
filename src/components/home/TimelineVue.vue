<template>
  <div>
    <div v-for="post in posts">
      <post-vue :color="color" :item="post" />
    </div>
  </div>
</template>
<script>
import PostVue from "./PostVue";

export default {
  name: "TimelineVue",

  components: {PostVue},

  props: {
    color: {
      type: String,
    },

    name: {
      type: String,
    },

    posts: {
      type: Array
    }
  },

  data() {
    return {
      //posts: []
    }
  },

  methods: {

  },
}
</script>

<style scoped>

</style>
