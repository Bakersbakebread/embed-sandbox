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
            fields: [{ name: '', value: '', inline: false }],
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
        }
    },
})