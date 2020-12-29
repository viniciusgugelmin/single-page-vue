<template>
  <div class="poster" :class="color">
    <div class="input-field">
      <textarea v-model="description" id="textarea1" class="materialize-textarea"></textarea>
      <label for="textarea1">What's happening?</label>
    </div>
    <div v-if="btnVisibility" class="right">
      <button class="btn" :class="disabled" :loading="true" @click="submit(description)">Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PosterVue",

  props: {
    color: {
      type: String,
    },

    submit: {
      type: Function
    },

    disabled: {
      type: Boolean
    }
  },

  data() {
    return {
      description: '',
      btnVisibility: false
    }
  },

  watch: {
    'description'() {


      this.btnVisibility = this.description;
    }
  }
}
</script>

<style scoped>
.poster {
  display: inline-block;
  width: 100%;
  border-radius: 50px;
  padding: 2rem;

  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
  border: 2px solid #263238;
}

label {
  font-weight: bold;
  color: white !important;
}

.active {
  color: #263238 !important;
}

textarea {
  color: white !important;
  border-bottom: 1px solid white !important;
  box-shadow: 0 1px 0 0 white !important;
}

textarea:focus {
  border-bottom: 1px solid #263238 !important;
  box-shadow: 0 1px 0 0 #263238 !important;
}

.btn {
  background: #546e7a !important;
  font-weight: 500;
  border-radius: 20px;
}
</style>
