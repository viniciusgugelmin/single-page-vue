<template>
  <span>
    <header>
      <navbar :color="color" url="#" logo="brand-logo" :title="title"/>
    </header>
    <main>
      <div class="container">
        <div class="row">
          <slot></slot>
        </div>
      </div>
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
  name: 'LoginTemplate',

  data() {
    return {
      title: 'Lorem ipsum',
      color: 'blue-grey darken-2',
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
