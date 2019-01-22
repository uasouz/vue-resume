<template>
    <v-card class="skill-badge">
      <h3 class="skill-badge-title">{{name}}</h3>
      <div class="level-sequence">
        <template  v-for="degree in level">
          <div :key="degree" class="degree"></div>
        </template>
      </div>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class SkillBadge extends Vue {

  @Prop({ default: "Skill" })
  name: string;

  @Prop({ default: 5 })
  level: number;

  @Prop({ default: "Description" })
  desc: string;

  data() {
    return {};
  }
}
</script>

<style lang="scss">
.skill {
  display: inline-block;
  width: 210px;
  height: 110px;
}

.skill-badge {
  display: grid;
  position: relative;
  border-radius: 0% 0% 20% 0%;
  margin-bottom: 10px;
  margin-top: 10px;
  // margin-left: 20px;
  width: 200px;
  height: 100px;
  background: $primaryDark !important;
}

// .skill-badge:before {
//   width: 0px;
//   height: 0;
//   content: "";
//   position: absolute;
//   left: -20px;
//   z-index: 1;
//     // background-color: royalblue;
//   border-left: 30px solid orange;
//   border-right: 30px solid transparent;
//   border-radius: 0% 0% 0% 0%;
// //   border-bottom: 50px solid orange;
//   border-top: 100px solid orange;
// }

// .skill-badge:before {
//   width: 0px;
//   height: 0;
//   content: "";
//   position: absolute;
//   left: -20px;
//   z-index: 1;
//     // background-color: royalblue;
//   border-left: 0px solid rgb(24, 64, 110);
//   border-right: 30px solid rgb(24, 64, 110);
//   border-radius: 0% 0% 0% 0%;
//   border-bottom: 10px solid rgb(18, 31, 102);
//   border-top: 95px solid rgb(24, 64, 110);
// }

.skill-badge:after {
  content: "";
  position: absolute;
  right: -0px;
  width: 0px;
  height: 0;
  z-index: 1;
  //   background-color: royalblue;
  border-left: 30px solid transparent;
  border-right: 30px solid $secondary;
  border-radius: 0% 0% 20% 0%;
  //   border-top: 30px solid orange;
  //   border-top-left-radius: 200%;
  border-bottom: 100px solid $secondary;
}

.skill-badge:hover {
  .skill-badge:after {
    border-right: 30px solid $secondaryDark;
    border-bottom: 100px solid $secondaryDark;
  }
}

.skill-badge-title {
  z-index: 2;
  position: relative;
  top: 10px;
  left: 5px;
  color: white;
}

.level-sequence {
  margin-left: 5px;
  z-index: 1;
}

.degree {
  float: left;
  margin-left: 2px;
  width: 25px;
  height: 13.75px;
  margin-right: 2px;
  position: relative;
  background-color: $primaryLight;
}

.degree:before {
  content: "";
  position: absolute;
  top: -6.25px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 12.5px solid transparent;
  border-right: 12.5px solid transparent;
  border-bottom: 6.25px solid $primaryLight;
}

.degree:after {
  content: "";
  position: absolute;
  bottom: -6.25px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 12.5px solid transparent;
  border-right: 12.5px solid transparent;
  border-top: 6.25px solid $primaryLight;
}
</style>
