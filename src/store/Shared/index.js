import * as firebase from 'firebase'

export default {
    state: {
        loading: false,
        error: null
    },
    mutations: {
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        }
    },
    actions: {
        clearError ({commit}) {
            commit('clearError')
        },
        setLoading (state, payload) {
            state.loading = payload
        }
    },
    getters: {
        loading (state) {
            return state.loading
        },
        error (state) {
            return state.error
        },
        getTechIcons (state) {
            return state.techIcons
        }
    }

}