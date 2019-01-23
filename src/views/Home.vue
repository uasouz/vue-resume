<template>
  <v-container fluid class="home">
    <v-layout column fluid fill-width>

      <v-flex>
          <Skills/>
      </v-flex>
      <v-flex>
          <Main/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "./Main.vue";
import Skills from "../components/Skillsv2.vue"
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    Main,
    Skills
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  height: 100%;
  overflow: auto;
}
// html {
//   overflow: hidden;
// }
</style>

