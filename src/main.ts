import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLanguage,faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin,faSuperpowers } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub,faLinkedin,faSuperpowers,faLanguage,faHome)
// library.add(faGitHub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
