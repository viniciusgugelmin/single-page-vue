<template>
  <span>
    <header>
      <navbar :color="color" url="#" logo="brand-logo" :title="title"/>
    </header>
    <main>
      <grid-vue>
        <span slot="user-row">
          <card-photo-vue :color="color" :user-name="userName" />
          <card-menu-itens-vue :color="color" />
        </span>
        <span slot="content-row">
          <slot></slot>
        </span>
      </grid-vue>
    </main>
    <footerbar :color="color" :title="title">
      <li><a class="grey-text text-lighten-3" href="#">Home</a></li>
    </footerbar>
  </span>
</template>

<script>
import Navbar from "@/components/layouts/Navbar";
import Footerbar from "@/components/layouts/Footerbar";
import GridVue from "@/components/layouts/GridVue";
import CardPhotoVue from "@/components/user/CardPhotoVue";
import CardMenuItensVue from "@/components/user/CardMenuItensVue";

export default {
  name: 'SiteTemplate',

  data() {
    return {
      title: 'Lorem ipsum',
      color: 'blue-grey darken-2',

      sizeMenu: 4,
      sizeContent: 8,

      userName: 'Lorem ipsum',
    }
  },
  components: {
    CardMenuItensVue,
    CardPhotoVue,
    GridVue,
    Navbar,
    Footerbar
  },
}
</script>

<style>
header {
  z-index: 10;
  position: fixed;
  width: 100%;
}

main {
  margin-top: 6rem;
}

#user-row {
  width: clamp(200px, 20%, 300px);
  position: fixed;
}
</style>
