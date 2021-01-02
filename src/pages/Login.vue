<template>
  <login-template>
    <div class="card-form">
      <form @submit.prevent="" class="blue-grey darken-2">
        <div class="cell">
          <input v-model="form.email" id="email" type="text" class="validate">
          <label for="email">E-mail</label>
        </div>
        <div class="cell">
          <input v-model="form.password" id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
        <button class="btn right" @click="">Login</button>
      </form>
    </div>
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
.card-form {
  margin: auto;
  max-width: 800px;
}

form {
  height: 250px;
  padding: 1.75rem;
  border: 2px solid #263238;
  border-radius: 50px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}

input {
  box-shadow: 0 0 0 30px #455a64 inset !important;
  color: white !important;
  -webkit-text-fill-color: white !important;

  border-bottom: 1px solid white !important;
}

label {
  color: white !important;
}

.active {
  color: white !important;
}

.btn {
  background: #546e7a !important;
  font-weight: 500;
  border-radius: 20px;
}
</style>
