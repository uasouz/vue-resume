<template>
  <div id="main">
      <Skills/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Skills from '../components/Skills.vue'
@Component({
  components: {Skills}
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
    height: 200px;
}
</style>
