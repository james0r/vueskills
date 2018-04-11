import * as firebase from 'firebase'

export default {
    state: {
        user: null
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        signUserUp ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        personal: {
                            firstName: '',
                            lastName: '',
                            title: '',
                            avatarUrl: '',
                            email: payload.email,
                            twitterUrl: '',
                            facebookUrl: '',
                            instagramUrl: '',
                            linkedInUrl: '',
                            websiteUrl: ''
                        },
                        skills: [
                            
                        ],
                        education: [
                            
                        ],
                        employment: [
                            
                        ]
                    }
                    commit('setUser', newUser)
                }
            )
            .catch(
                error => {
                    commit('setLoading', false),
                    commit('setError', error),
                    console.log(error)
                }
            )
        },
    },
    getters: {
        user (state) {
            return state.user
        }
    }
}