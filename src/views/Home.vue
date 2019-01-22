<template>
  <v-layout wrap fill-height fill-width>
    <v-flex wrap>
      <div class="home">
        <Main/>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "./Main.vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    Main
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

