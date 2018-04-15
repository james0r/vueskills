import * as firebase from 'firebase'
import Shared from '../Shared'

export default {
    state: {
        user: {
            id: '',
            personal: {
                firstName: '',
                lastName: '',
                title: '',
                avatarUrl: '',
                email: '',
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
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        },
        setSkill (state, payload) {
            state.user.skills.push(payload)
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
        setSkill ({ commit}, payload) {
            const newSkill = {
                id: payload.id,
                name: payload.name,
                icon: Shared.state.techIcons[payload.name],
                stars: payload.stars,
                notes: payload.notes,
                strongestSkill: payload.strongestSkill
            }
            commit('setSkill', newSkill)
        }
    },
    getters: {
        user (state) {
            return state.user
        }
    }
}