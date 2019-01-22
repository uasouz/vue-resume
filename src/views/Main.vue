<template>
  <v-container>
    <v-layout id="main">
      <v-timeline dense class="timeline">
        <v-timeline-item fill-dot small :key="event.title" v-for="event in events">
          <v-card @click="$router.push(event.link)" :key="event.title">
            <v-card-title class="headline">
              <font-awesome-icon
                class="fa-icon"
                :key="event.tile"
                :icon="[ event.iconprefix, event.icon ]"
              />
              <h5 class="headline">{{event.title}}</h5>
            </v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Sidebar from '../components/Sidebar.vue'
@Component({
  components: {}
})
export default class Main extends Vue {
  data() {
    return {
      events: [
        { title: "Nascimento", link: "bio", iconprefix: "fas", icon: "baby" },
        { title: "Escola", link: "bio", iconprefix: "fas", icon: "book" },
        { title: "Trabalho", link: "bio", iconprefix: "fas", icon: "briefcase" }
      ]
    };
  }
}
</script>

<style lang="scss">
#main {
  width: 100%;
  height: 100%;
}

// .timeline .fa-icon {
//   position: absolute;
//   right: 0;
//   margin: 3%;
// }
</style>
