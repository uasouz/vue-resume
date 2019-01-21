<template>
  <div class="contacts">
      <strong v-if="!mini">Contacts</strong>
        <v-list dark two-line>
          <template v-for="contact in contacts">
            <v-list-tile :key="contact.title" avatar>
              <v-list-tile-avatar>
                 <v-icon :key="contact.icon">{{contact.icon}}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
               <v-list-tile-title v-html="contact.title"></v-list-tile-title>
                <p v-if="!mini" :key="contact.title">
                  {{contact.content}}
                </p>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        <v-divider></v-divider>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Contacts extends Vue {
  @Prop({ default: false })
  mini: boolean;

  data() {
    return {
      contacts: [
        { title: "Mobile", content: "(92) 981458662", link: "", icon: "phone" },
        {
          title: "E-mail",
          content: "vlopes45@gmail.com",
          link: "mailto:vlopes45@gmail.com",
          icon: "email"
        },
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
.contacts {
  color: snow;
}
.contacts p {
  font-weight: 400;
  font-size: 16px;
}

.contacts strong {
    margin-left: 5%;
    font-weight: 400;
    font-size: 20px;
}
</style>