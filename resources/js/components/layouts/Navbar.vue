<template>
  <nav :class="color">
    <div class="nav-wrapper container">
      <router-link :to="{name: user ? 'Home' : 'Login'}" :class="logo">
        <i class="material-icons logo" :class="color">grain</i>
        <span>{{ title }}</span>
      </router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <template v-if="!user.token">
          <li><router-link :to="{name:'Login'}">Login</router-link></li>
          <li><router-link :to="{name:'Sign up'}">Sign up</router-link></li>
        </template>
        <template v-else>
          <li><router-link :to="{name:'Home'}">Home</router-link></li>
          <li><router-link :to="{name:'Profile'}">{{ user.name }}</router-link></li>
          <li><a @click="logout">Log out</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',

  props: {
    logo: {
      type: String,
    },

    color: {
      type: String,
    },

    title: {
      type: String,
      required: true,
    },
  },

  data () {
    return {

    }
  },

  methods: {
    logout() {
      console.log('logout')
      sessionStorage.clear();
      this.$router.push({name: 'Login'});
    }
  }
}
</script>

<style scoped>
.nav-wrapper {
  font-weight: 500;
}

.logo {
  float: inherit !important;
  font-size: 31px;
  display: inline;
  margin-right: 0.15rem !important;
  vertical-align: middle;
}

a {
  opacity: 1;
  transition: opacity 0.25s ease-in !important;
}

a:hover {
  opacity: 0.65;
}
</style>
