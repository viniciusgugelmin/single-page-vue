<template>
  <div id="app" class="blue-grey darken-4">
    <header>
      <navbar :color="color" url="#" logo="brand-logo" :title="title"/>
    </header>
    <main>
      <!-- Router view it's here-->
      <grid-vue>
        <div id="user-row">
          <card-photo-vue :color="color" :user-name="userName" />
          <card-menu-itens-vue :color="color" />
        </div>
      </grid-vue>
      <!-- Router view it's here-->
    </main>
    <footerbar :color="color" :title="title" :description="description">
      <li><a class="grey-text text-lighten-3" href="#">Home</a></li>
    </footerbar>
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar";
import Footerbar from "@/components/layouts/Footerbar";
import GridVue from "./components/layouts/GridVue";
import CardPhotoVue from "./components/user/CardPhotoVue";
import CardMenuItensVue from "./components/user/CardMenuItensVue";

export default {
  name: 'App',

  data() {
    return {
      title: 'Lorem ipsum',
      color: 'blue-grey darken-2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim est sed tellus rutrum commodo. Donec ornare augue id porttitor elementum. Nunc molestie venenatis nulla a blandit. Curabitur sit amet mauris convallis, pretium odio eu, vestibulum quam. Nulla tincidunt vestibulum sapien, non fringilla ante dictum a. Nunc imperdiet blandit tellus. Fusce dapibus ex eget aliquam ullamcorper. In lorem lacus, porttitor quis odio a, euismod laoreet mauris. Nullam sit amet varius ipsum, ut luctus tortor.',
      userName: 'Lorem ipsum'
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
#app {
  display: inline-table;
  height: 100vh;
  width: 100%;
}

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

.card {
  border: 2px solid #263238;
}
</style>
