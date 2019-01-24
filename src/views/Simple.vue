<template>
  <v-container fluid class="home">
    <v-btn color="blue" dark fixed bottom right fab @click="print">
      <v-icon>local_printshop</v-icon>
    </v-btn>
    <v-layout id="simple-root" column fluid>
      <v-flex>
        <v-card width="100%" class="profile">
          <v-container justify-center fluid class="home">
            <v-layout :column="isSmallScreen" :row="!isSmallScreen" fluid>
              <v-flex xs3>
                <v-layout justify-center column>
                  <v-flex class="centered-flex">
                    <v-avatar size="150">
                      <img src="../assets/avatar.jpg" alt="avatar">
                    </v-avatar>
                  </v-flex>
                  <v-flex class="centered-flex">
                    <span class="subheading">Working at</span>
                    <v-avatar size="75">
                      <img src="../assets/current-work.png" alt="avatar">
                    </v-avatar>
                  </v-flex>
                  <v-flex class="centered-flex">
                    <span class="subheading">as Fullstack Developer</span>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-layout column>
                  <v-flex>
                    <h3 class="display-2">Vinicius Lopes</h3>
                  </v-flex>
                  <v-flex>
                    <span class="subheading">Desenvolvedor | Workaholic | Code more,talk less</span>
                  </v-flex>
                  <v-flex>
                    <span class="subheading">Manaus, Amazonas, Brasil</span>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex x3>
                <v-layout justify-center column>
                  <v-flex>
                    <Contacts/>
                    <div class="bottom-icons">
                      <v-btn icon href="https://github.com/uasouz" target="_blank">
                        <font-awesome-icon
                          :style="{ color: 'white' }"
                          class="fa-icon"
                          size="2x"
                          :icon="[ 'fab', 'github']"
                        />
                      </v-btn>
                      <v-btn
                        icon
                        href="http://www.linkedin.com/in/vinicius-lopes-90640542"
                        target="_blank"
                      >
                        <font-awesome-icon
                          :style="{ color: 'white' }"
                          class="fa-icon"
                          size="2x"
                          :icon="[ 'fab', 'linkedin']"
                        />
                      </v-btn>
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex v-if="!isSmallScreen">
        <Skills :isSmallScreen="isSmallScreen"/>
      </v-flex>
      <v-flex>
        <Main/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "./Main.vue";
import Skills from "../components/Skillsv2.vue";
import Contacts from "../components/Contacts.vue";
import { Printd } from 'printd'
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    Main,
    Contacts,
    Skills
  }
})
export default class Simple extends Vue {
  windowWidth = window.innerWidth;
  d = new Printd();
  get isSmallScreen() {
    if (this.windowWidth > 768) {
      return false;
    }
    return true;
  }

  resize() {
    this.windowWidth = window.innerWidth;
  }

  print(){
    this.d.print( document.getElementById('simple-root'))
  }

  mounted() {
    
    this.$nextTick(() => {
      window.addEventListener("resize", this.resize);
    });
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
  overflow: auto;
}
// html {
//   overflow: hidden;
// }
.profile {
  background-color: $primary !important;
  color: snow !important;
}

.profile .contacts div {
  background-color: $primary !important;
}

.bottom-icons {
  padding: 10px;
  background-color: $primary !important;
  // position: fixed;
  text-align: center;
  width: 100%;
  bottom: 0px;
}

.centered-flex {
  text-align: center;
}
</style>

