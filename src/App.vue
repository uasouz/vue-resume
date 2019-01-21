<template>
  <v-app>
    <!-- <v-toolbar app>
      <v-btn icon v-if="$route.name !== 'home'" @click="$router.go(-1) ">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>
        <span>Ma-Resume</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar> -->

    <Sidebar/>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- <v-bottom-nav
      :app="true"
      :active.sync="bottomNav"
      :value="true"
      color="transparent"
      :fixed="true"
    >
      <v-btn color="teal" flat value="recent">
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="nearby">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav> -->
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Home,
    Sidebar
  },
  data() {
    return {
      //
    };
  }
};
</script>
