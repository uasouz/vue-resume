<template>
  <v-navigation-drawer
    class="sidebar"
    app
    v-model="drawer"
    width="300"
    :mini-variant="mini"
    permanent
  >
    <div v-bind:class="menuBtnClass">
      <v-btn dark icon @click.stop="mini = !mini">
        <v-icon>menu</v-icon>
      </v-btn>
    </div>
    <UserTag :mini="mini"/>
    <Contacts :mini="mini"/>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserTag from "./UserTag.vue";
import Contacts from "./Contacts.vue";
@Component({
  components: { UserTag, Contacts }
})
export default class Sidebar extends Vue {
  get menuBtnClass() {
    if (this.$data.mini) {
      return `.menu-btn-container-mini`;
    }
    return `.menu-btn-container`;
  }

  data() {
    return {
      mini: false
    };
  }
}
</script>

<style lang="scss">
.sidebar {
  background-color: rgb(6, 92, 172) !important;
}
.menu-btn-container-mini {
  text-align: center;
}
</style>