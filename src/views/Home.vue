<template>
  <div class="home">
    <Main/>
  </div>
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
