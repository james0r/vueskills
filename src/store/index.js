import Vue from 'vue'
import Vuex from 'Vuex'
import shared from './Shared'
import user from './User'
import profiles from './Profiles'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        shared: shared,
        user: user,
        profiles: profiles
    }
})