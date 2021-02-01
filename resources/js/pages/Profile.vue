<template>
  <site-template>
    <div class="card-form">
      <form @submit.prevent="" class="blue-grey darken-2">
        <div class="cell">
          <input v-model="form.name" id="name" type="text" class="validate">
          <label for="name">Name</label>
        </div>
        <button class="btn right l-btn" @click="onSubmit()" :disabled="loading">Update</button>
      </form>
    </div>
  </site-template>
</template>

<script>
import SiteTemplate from "@/layouts/SiteTemplate";


export default {
  name: 'Profile',

  components: {SiteTemplate},

  data () {
    return {
      form: {
        name: '',
      },

      loading: false,
    }
  },

  methods: {
    onSubmit() {
      this.loading = true;

      axios.put( this.localhost + '/api/user/edit', {
        name: this.form.name,
        email: this.user.email,
      }, {"headers":{"authorization":"Bearer "+this.user.token}})
        .then(response => {
          if (response.data.type === 'error' && !response.data.status) {
            for (let error of Object.values(response.data.message)) {
              console.log(error[0]);
            }
          } else if (response.data.type === 'error' && response.data.status) {
            console.log(response.data.message)
          } else if (response.data.type === 'success') {
            sessionStorage.setItem('user', JSON.stringify(response.data.user))
            this.$store.dispatch('user/update', response.data.user);
            this.form.name = '';
            console.log(response.data.message)
          }
        })
        .catch(error => {
          console.log(this.errorMessage.default)
        })
        .finally(() =>{
          console.log('------');
          this.loading = false;
        })
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
  height: 170px;
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
