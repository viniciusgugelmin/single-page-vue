<template>
  <div class="card-form">
    <form @submit.prevent="" class="blue-grey darken-2">
      <div class="cell">
        <input v-model="form.name" id="name" type="text" class="validate">
        <label for="name">Name</label>
      </div>
      <div class="cell">
        <input v-model="form.email" id="email" type="text" class="validate">
        <label for="email">E-mail</label>
      </div>
      <div class="cell">
        <input v-model="form.password" id="password" type="password" class="validate">
        <label for="password">Password</label>
      </div>
      <div class="cell">
        <input v-model="form.password_confirm" id="password_confirm" type="password" class="validate">
        <label for="password_confirm">Password confirm</label>
      </div>
      <button class="btn right l-btn" @click="">Sign up</button>
      <slot />
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',

  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
      },
    }
  },

  methods: {

  },
}
</script>

<style scoped>
.card-form {
  margin: auto;
  max-width: 800px;
}

form {
  height: 400px;
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

.r-btn {
  margin-right: 0.5rem;
  background: #eceff1 !important;
  color: #455a64 !important;
}
</style>
