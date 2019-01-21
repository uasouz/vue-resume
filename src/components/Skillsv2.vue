<template>
  <div id="skills">
    <v-container>
      <v-layout align-start justify-center row fill-height>
        <v-flex>
            <SkillBadge v-for="skill in skills" :name="skill.name" :level="skill.level"></SkillBadge>
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
        { name: "Go Lang", level: 2, desc: "" },
        { name: "Microservices", level: 3, desc: "" },
        { name: "Node.JS", level: 4, desc: "" },
        { name: "Python", level: 1, desc: "" },
        { name: "Kubernetes", level: 3, desc: "" },
        { name: "Mysql", level: 4, desc: "" },
        { name: "Seguranca da informacao", level: 3, desc: "" },
        { name: "Android", level: 4, desc: "" },
        { name: "Kotlin", level: 4, desc: "" },
        { name: "Git", level: 4, desc: "" },
        { name: "Restful WebSevices", level: 4, desc: "" },
        { name: "Model View ViewModel", level: 3, desc: "" },
        { name: "GraphQL", level: 2, desc: "" },
        { name: "APIs", level: 4, desc: "" }
      ]
    };
  }
}
</script>