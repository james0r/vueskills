import Vue from 'vue'
import Vuex from 'vuex'
import main from './Main'
import user from './User'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        main: main,
        user: user
    }
})