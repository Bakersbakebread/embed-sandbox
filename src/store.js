import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({ 'webhooks': state.webhooks }),
    filter: (mutation) => mutation.type == 'appendWebhook' || mutation.type == 'deleteWebhook'
})

console.log(vuexLocal)
Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vuexLocal.plugin],
    state: {
        embed: {
            title: '',
            author: {
                name: '',
                url: '',
                icon_url: ''
            },
            description: '',
            url: '',
            thumb_url: '',
            color: '',
            fields: [{ name: '', value: '', inline: false }],
            footer: { text: '', icon_url: '' },
        },
        webhooks: [],
        sidebar_open: false,
        user_settings: {
            username: '',
        }
    },
    getters: {
        getField,
    },
    mutations: {
        updateField,
        initWebhooks(state, webhooks) {
            state.webhooks = webhooks
        },
        appendWebhook(state, webhook) {
            state.webhooks.push(webhook);
        },
        deleteWebhook(state, webhook) {
            let updatedWebhooks = state.webhooks.filter((wh) => wh.name != webhook.name)
            state.webhooks = updatedWebhooks
        },
        addField(state, field) {
            // mutate state
            state.embed.fields.push(field)
        },
        moveFieldUp(state, index) {
            state.embed.fields.splice(index - 1, 0, state.embed.fields.splice(index, 1)[0])
        },
        moveFieldDown(state, index) {
            state.embed.fields.splice(index + 1, 0, state.embed.fields.splice(index, 1)[0])
        },
        deleteField(state, index) {
            state.embed.fields.splice(state.embed.fields.indexOf(index), 1);
        },
        toggleSidebar(state) {
            state.sidebar_open = !state.sidebar_open
        }
    },
})