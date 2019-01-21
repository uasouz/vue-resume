<template>
  <v-layout id="main">
      
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
    return {};
  }
}
</script>

<style lang="scss">
#main{
    width: 100%;
    height: 100%;
}
</style>
