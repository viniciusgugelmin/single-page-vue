<template>
  <div class="container">
    <div class="row">
      <div :class="'col s' + sizeMenu">
        <div id="user-row">
          <slot name="user-row"></slot>
        </div>
      </div>
      <div :class="'col s' + sizeContent">
        <slot name="content-row"></slot>
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
    },
  },
}
</script>

<style scoped>

</style>
