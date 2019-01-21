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
    <Options :mini="mini"/>
    <div class="bottom-icons">
      <!-- <v-divider></v-divider> -->
      <v-btn icon href="https://github.com/uasouz" target="_blank">
        <font-awesome-icon
          :style="{ color: 'white' }"
          class="fa-icon"
          size="2x"
          :icon="[ 'fab', 'github']"
        />
      </v-btn>
      <v-btn icon href="http://www.linkedin.com/in/vinicius-lopes-90640542" target="_blank">
        <font-awesome-icon
          :style="{ color: 'white' }"
          class="fa-icon"
          size="2x"
          :icon="[ 'fab', 'linkedin']"
        />
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserTag from "./UserTag.vue";
import Contacts from "./Contacts.vue";
import Options from "./Options.vue";
@Component({
  components: { UserTag, Contacts, Options }
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
  background-color: $primary !important;
}
.menu-btn-container-mini {
  text-align: center;
}
.bottom-icons {
  padding: 10px;
  background-color: $primary !important;
  // position: fixed;
  text-align: center;
  width: 100%;
  bottom: 0px;
}
.superpowers {
  padding: 10px 16px;
  text-align: center;
}
.bottom-icons .fa-icon {
  margin: 5px;
}
</style>