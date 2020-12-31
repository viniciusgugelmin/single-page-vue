<template>
  <div :class="'col s' + sizeMenu">
    <div id="user-row">
      <card-photo-vue :color="color" :user-name="userName" />
      <card-menu-itens-vue :color="color" />
    </div>
  </div>
</template>

<script>
import CardMenuItensVue from "../user/CardMenuItensVue";
import CardPhotoVue from "../user/CardPhotoVue";

export default {
  name: "GridVue",

  components: {CardPhotoVue, CardMenuItensVue},

  props: {
    sizeMenu: {
      type: Number,
      default: 4
    },

    color: {
      type: String
    }
  },

  data() {
    return {
      userName: 'Lorem ipsum',
    }
  }
}
</script>

<style scoped>

</style>
