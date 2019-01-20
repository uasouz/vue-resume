<template>
  <div class="sidebar">
    <h1>Bar</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Sidebar extends Vue {
  data() {
    return {};
  }
}
</script>

<style lang="scss">
.sidebar {
  background-color: blue;
  height: 100%;
  width: 300px;
}
</style>