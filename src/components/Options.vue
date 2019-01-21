<template>
  <div class="options">
    <v-list dark>
      <template v-for="option in options">
        <v-list-tile @click="$router.push(option.link)" :key="option.title" avatar>
          <v-list-tile-avatar>
            <!-- <v-icon :key="option.icon">{{option.icon}}</v-icon> -->
            <font-awesome-icon
              :style="{ color: 'white' }"
              class="fa-icon"
              size="2x"
              :key="option.tile"
              :icon="[ option.iconprefix, option.icon ]"
            />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="option.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <v-divider dark></v-divider>
  </div>
</template>

    // <div class="superpowers">
    //   <font-awesome-icon
    //     :style="{ color: 'white' }"
    //     class="fa-icon"
    //     size="2x"
    //     :icon="[ 'fab', 'superpowers']"
    //   />
    //   <p>Skills</p>
    // </div>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Options extends Vue {
  @Prop({ default: false })
  mini: boolean;

  data() {
    return {
      options: [
        { title: "Skills", link: "skills", iconprefix:'fab' ,icon: "superpowers" },
        {
          title: "Languages",
          iconprefix:'fas' ,
          link: "languages",
          icon: "language"
        }
        // {
        //   title: "LinkedIn",
        //   content: "www.linkedin.com/in/vinicius-lopes-90640542",
        //   link: "http://www.linkedin.com/in/vinicius-lopes-90640542",
        //   icon: "duo"
        // }
      ]
    };
  }
}
</script>

<style lang="scss">
.options {
  color: snow;
}
.options p {
  font-weight: 400;
  font-size: 16px;
}

.options strong {
  margin-left: 5%;
  font-weight: 400;
  font-size: 20px;
}
</style>