<template>
  <div>
    <div class="row">
      <div class="col s12">
        <div v-for="item in items">
          <card-vue :color="color" :title="title" :description="item.description" />
        </div>
        <div class="center">
          <button class="btn-floating btn-large" @click="addCard()">
            <i class="material-icons" :class="color">add</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardVue from "@/components/CardVue";

export default {
  name: 'Home',

  components: {
    CardVue
  },

  data () {
    return {
      items: [
        {
          description: "Lorem ipsum 1"
        }
      ],

      color: 'blue-grey darken-2',
      title: 'Lorem ipsum',
    }
  },

  methods: {
    addCard() {
      let item = { description: 'Lorem ipsum ' + (this.items.length + 1 ) }

      this.items.push(item);
    }
  },
}
</script>

<style scoped>
button {
  transform: scale(0.75);
  z-index: 0;
  margin-bottom: 2.5rem;
}
</style>
