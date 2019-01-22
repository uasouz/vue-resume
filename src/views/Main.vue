<template>
  <div id="main">
    <v-timeline :dense="isDenseTimeline" class="timeline">
      <v-timeline-item fill-dot small :key="event.title" v-for="event in events">
        <span slot="opposite" :class="`headline font-weight-bold`" v-text="event.period.from.year"></span>
        <v-card @click="$router.push(event.link)" :key="event.title">
          <v-card-title class="orange">
            <!-- <font-awesome-icon
              class="fa-icon"
              :key="event.tile"
              :icon="[ event.iconprefix, event.icon ]"
            />-->
            <h5 class="headline">{{event.title}}</h5>
            <span class="subheading">{{event.role}}</span>
          </v-card-title>
          <v-card-text>{{event.description}}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Sidebar from '../components/Sidebar.vue'
@Component({
  components: {}
})
export default class Main extends Vue {
  now = new Date();
  current = { month: this.now.getMonth(), year: this.now.getFullYear() };
  windowWidth = window.innerWidth;
  get isDenseTimeline() {
    console.log();
    if (this.windowWidth > 920) {
      return false;
    }
    return true;
  }

  resize() {
    this.windowWidth = window.innerWidth;
  }

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize",this.resize);
    });
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  }

  data() {
    return {
      events: [
        {
          title: "nuCash Simplificando Pagamentos",
          role: "Developer",
          description:
            "Working as Fullstack developer into a microservice based enviroment on AWS and Kotlin MVVM Android Mobile App to build a payment platform. With a great team :)",
          link: "bio",
          period: { from: { month: 7, year: 2017 }, to: this.current },
          iconprefix: "fas",
          icon: "baby"
        },
        {
          title: "Zenosoft",
          description:
            "Worked with creation and maintenance of applications for small startups and companies from Manaus",
          role: "Network Support and Application Developer",
          link: "bio",
          period: {
            from: { month: 3, year: 2016 },
            to: { month: 7, year: 2017 }
          },
          iconprefix: "fas",
          icon: "book"
        },
        {
          title: "Rede Nacional de Ensino e Pesquisa (RNP)",
          description:
            "Worked with support and maintenance of the Point of Presence of RNP-AM",
          role: "Intern",
          link: "bio",
          period: {
            from: { month: 0, year: 2015 },
            to: { month: 1, year: 2016 }
          },
          iconprefix: "fas",
          icon: "book"
        }
      ]
    };
  }
}
</script>

<style lang="scss">
#main {
  width: 35%;

  @media screen and (max-width: 920px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
  height: 100%;
}

// .timeline .fa-icon {
//   position: absolute;
//   right: 0;
//   margin: 3%;
// }
</style>
