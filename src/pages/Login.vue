<template>
  <login-template>
    <login-form v-if="!registerForm">
      <router-link class="btn right r-btn" :to="{name:'Sign up'}">Create new account</router-link>
    </login-form>
    <register-form v-else>
      <router-link class="btn right r-btn" :to="{name:'Login'}">Already have an account</router-link>
    </register-form>
  </login-template>
</template>

<script>
import LoginTemplate from "../layouts/LoginTemplate";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";

export default {
  name: 'Login',

  components: {RegisterForm, LoginForm, LoginTemplate},

  data () {
    return {
      registerForm: false,
    }
  },

  mounted() {
    this.registerForm = this.$route.meta.registerForm;
  },

  watch: {
    '$route' (to, from) {
      this.registerForm = this.$route.meta.registerForm;
    }
  }
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

.r-btn {
  margin-right: 0.5rem;
  background: #eceff1 !important;
  color: #455a64 !important;
}
</style>
