<template>
  <login-template>
    <form @submit.prevent="">
      <div class="cell">
        <input v-model="form.email" id="email" type="text" class="validate">
        <label for="email">E-mail</label>
      </div>
      <div class="cell">
        <input v-model="form.password" id="password" type="password" class="validate">
        <label for="password">Password</label>
      </div>
      <p><button class="btn right" @click="">Login</button></p>
    </form>
  </login-template>
</template>

<script>
import TimelineVue from "@/components/home/TimelineVue";
import PosterVue from "@/components/home/PosterVue";
import LoginTemplate from "../layouts/LoginTemplate";
export default {
  name: 'Login',

  components: {LoginTemplate, PosterVue, TimelineVue},

  data () {
    return {
      form: {
        email: '',
        password: ''
      },

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
  },
}
</script>

<style scoped>
form {
  margin: auto;
  max-width: 800px;
}

input {
  box-shadow: 0 0 0 30px #263238 inset !important;
  color: white !important;
  -webkit-text-fill-color: white !important;

  border-bottom: 1px solid white !important;
}

.btn {
  background: #546e7a !important;
  font-weight: 500;
  border-radius: 20px;
}
</style>
