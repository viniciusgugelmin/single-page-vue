<template>
  <div class="card itens-user" :class="color">
    <ul>
      <li v-for="item in items">
        <span>{{ item }}</span>
        <span><i class="material-icons icon right" :class="color">folder</i></span>
      </li>
    </ul>
  </div>
</template>

<script>
import User from "../icons/User";

export default {
  name: 'CardMenuItensVue',
  components: {User},
  props: {
    color: {
      type: String,
    },
  },

  data () {
    return {
      items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 50px;
}

ul {
  color: white;
  font-weight: bold;
  margin: 3rem 0;
}

li {
  cursor: pointer;
  padding: 0.5rem 1.75rem;
  opacity: 1;
  transition: opacity 0.25s ease-in !important;
}

li:hover {
  opacity: 0.65;
}

.icon {
  vertical-align: bottom;
}
</style>
