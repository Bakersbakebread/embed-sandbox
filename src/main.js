import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'
import VuePageTransition from 'vue-page-transition'
import VueSimpleMarkdown from 'vue-simple-markdown'

Vue.use(Buefy)
Vue.use(VuePageTransition)
Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')