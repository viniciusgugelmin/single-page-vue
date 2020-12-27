<template>
  <div class="container">
    <div class="row">
      <div :class="'col s' + sizeMenu">
        <slot></slot>
      </div>
      <div :class="'col s' + sizeContent">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridVue",

  props: {
    sizeMenu: {
      type: Number,
      default: 4
    },

    sizeContent: {
      type: Number,
      default: 8
    }
  },
}
</script>

<style scoped>

</style>
