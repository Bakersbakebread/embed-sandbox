import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        embed: {
            title: '',
            author: {
                name: '',
                url: '',
                icon: ''
            },
            description: '',
            url: '',
            thumb_url: '',
            color: '',
            fields: [{}],
            footer: '',
        },
        user_settings: {
            username: '',
        }
    },
    getters: {
        getField,
    },
    mutations: {
        updateField,
    },
})