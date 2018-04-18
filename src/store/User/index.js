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
        },
        skillEditingID: ''
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        },
        setSkill (state, payload) {
            state.user.skills.push(payload)
        },
        setPersonalInfo (state, payload) {
            state.user.personal = payload
        },
        updateSkills (state, payload) {
            state.user.skills = payload
        },
        setSkillEditing (state, payload) {
            state.skillEditingID = payload
        },
    },
    actions: {
        setSkillEditing ({commit}, payload) {
            commit('setSkillEditing', payload)
        },
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
        },
        setPersonalInfo ({ commit}, payload) {
            commit('setPersonalInfo', payload)
        },
        updateSkills ({commit}, payload) {
            const newSkills = payload
            commit('updateSkills', newSkills)
        }
    },
    getters: {
        user (state) {
            return state.user
        },
        getSkillEditing (state) {
            return state.skillEditingID
        },
        getSkills (state) {
            return state.user.skills
        },
        getPersonalInfo (state) {
            return state.user.personal
        }
    }
}