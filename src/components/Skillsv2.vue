<template>
  <div class="skills">
    <v-container fluid grid-list-xl>
      <v-layout class="sp-flex-layout" fluid row>
        <v-flex class="skill-progress" :key="skill.name" v-for="skill in skills">
          <h2>{{skill.name}}</h2>
          <v-progress-circular color="teal" size="100" width="10" :value="skill.level">
            <span :class="`font-weight-bold`">{{skill.level.toFixed(2)}}%</span>
          </v-progress-circular>
          <!-- <SkillBadge v-for="skill in skills" :name="skill.name" :level="skill.level"></SkillBadge> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SkillBadge from "./SkillBadge.vue";

@Component({
  components: { SkillBadge }
})
export default class Skillsv2 extends Vue {
  skills: any[];
  data() {
    return {
      skills: [
        { name: "Go Lang", level: 100 / 2, desc: "" },
        { name: "Microservices", level: 100 / 3, desc: "" },
        { name: "Node.JS", level: 100 / 4, desc: "" },
        { name: "Python", level: 100 / 1, desc: "" },
        { name: "Kubernetes", level: 100 / 3, desc: "" },
        { name: "Mysql", level: 100 / 4, desc: "" },
        { name: "InfoSeg", level: 100 / 3, desc: "" },
        { name: "Android", level: 100 / 4, desc: "" },
        { name: "Kotlin", level: 100 / 4, desc: "" },
        { name: "Git", level: 100 / 4, desc: "" },
        { name: "Restful WebSevices", level: 100 / 4, desc: "" },
        { name: "Model View ViewModel", level: 100 / 3, desc: "" },
        { name: "GraphQL", level: 100 / 2, desc: "" },
        { name: "APIs", level: 100 / 4, desc: "" }
      ]
    };
  }
}
</script>

<style lang="scss">
.skills {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

}

.skills ::-webkit-scrollbar {
  width: 0;
  display: inline !important;
}

.skill-progress {
  text-align: center;
  // display: inline-block;
}

.sp-flex-layout {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  .skill-progress {
    flex: 0 0 auto;
  }
    &::-webkit-scrollbar {
    display: none;
  }
}
</style>
