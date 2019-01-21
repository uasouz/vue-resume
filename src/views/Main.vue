<template>
  <v-layout id="main">
    <v-list class="timeline">
      <template v-for="event in events">
        <v-list-tile @click="$router.push(event.link)" :key="event.title" avatar>
          <v-list-tile-avatar>
            <!-- <v-icon :key="event.icon">{{event.icon}}</v-icon> -->
            <font-awesome-icon
              class="fa-icon"
              size="2x"
              :key="event.tile"
              :icon="[ event.iconprefix, event.icon ]"
            />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="event.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-layout>
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
        { title: "Nascimento", link: "bio", iconprefix:"fas" ,icon: "baby" },
        { title: "Escola", link: "bio", iconprefix:"fas", icon: "book" },
        { title: "Trabalho", link: "bio", iconprefix:"fas", icon: "briefcase" }
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

$spacing: 50px;
$radius: 4px;

$date: 120px;
$dotborder: 4px;
$dot: 11px;
$line: 4px;

$font-title: 'Saira', sans-serif;
$font-text: 'Chivo', sans-serif;

.timeline {
  border-left: $line solid $primary;
  border-bottom-right-radius: $radius;
  border-top-right-radius: $radius;    
  background: fade($primaryLight, 3%);
  color: fade(white, 80%);
  font-family: $font-text;  
  margin: $spacing auto;  
  letter-spacing: 0.5px;   
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;   
  padding: $spacing;   
  list-style: none;
  text-align: left;  
  font-weight: 100;  
  max-width: 30%; 
  }
</style>
