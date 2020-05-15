import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Buefy from 'buefy';
import VuePageTransition from 'vue-page-transition';
import VueSimpleMarkdown from 'vue-simple-markdown';
import VueHighlightJS from 'vue-highlightjs';
import VueClipboard from 'vue-clipboard2';
import Vuelidate from 'vuelidate';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(Vuelidate)
Vue.use(VueClipboard)
Vue.use(VueHighlightJS)
Vue.use(Buefy)
Vue.use(VuePageTransition)
Vue.use(VueSimpleMarkdown)

// Global components
import HttpsOnlyToolip from '@/components/Form/HttpsOnlyTooltip';
Vue.component('https-only-tooltip', HttpsOnlyToolip);

Vue.config.productionTip = false

new Vue({
    store,
    router,
    validations: {},
    render: h => h(App)
}).$mount('#app')