import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Bulma
import Buefy from 'buefy'
Vue.use(Buefy)

import store from './store'

import VueSimpleMarkdown from 'vue-simple-markdown'

Vue.use(VueSimpleMarkdown)
    /*eslint-enable */
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')