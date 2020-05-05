import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Bulma
import Buefy from 'buefy'
Vue.use(Buefy)

import store from './store'

// eslint-disable-next-line
import Hljs from 'highlight.js'

/*eslint-disable */
function updateBlocks(el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        console.log(block);
        Hljs.highlightBlock(block);
        Hljs.initHighlighting();
    })
}
Vue.directive("highlight", {
    bind(el, binding, vnode) {
        updateBlocks(el);
    },
    inserted(el, binding, vndoe) {
        updateBlocks(el);
    },
    update: function(el, binding, vnode, oldVnode) {
        console.log(el);
        updateBlocks(el);
    },
    componentUpdated(el, binding, vnode, oldVnode) {
        updateBlocks(el);
    }
});

import VueSimpleMarkdown from 'vue-simple-markdown'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.use(VueSimpleMarkdown)
    /*eslint-enable */
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')