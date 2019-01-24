<template>
  <!-- <div > -->
    <v-container class="usertag" fluid grid-list-md>
      <v-layout row align-center>
        <v-flex class="text-xs-center">
          <v-avatar :tile="false" :size="avatarSize" color="grey lighten-4">
            <img src="../assets/avatar.jpg" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex v-if="!mini">
          <v-layout row wrap >
            <v-flex d-flex>
              <h2>Vinicius Lopes</h2>
            </v-flex>
            <v-flex d-flex>
              <span>Desenvolvedor | Workaholic | Code more,talk less</span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    <v-divider></v-divider>
    </v-container>
  <!-- </div> -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class UserTag extends Vue {
  get avatarSize() {
    if (this.mini) {
      return `50px`;
    }
    return `75px`;
  }

  @Prop({ default: false })
  mini: boolean;

  data() {
    return {};
  }
}
</script>

<style lang="scss">
.usertag {
  position: relative;
  color: snow;
  background-color: $primaryDark;
}
.usertag .avatar {
  // position: relative;
}
</style>