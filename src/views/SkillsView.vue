<template>
  <v-layout id="skills-view">
    <Skills/>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Skills from "../components/Skillsv2.vue";
@Component({
  components: { Skills }
})
export default class SkillsView extends Vue {
  data() {
    return {};
  }
}
</script>

<style lang="scss">
#skills-view {
  width: 100%;
  height: 100%;
}
</style>
