import * as firebase from 'firebase'
import Shared from '../Shared'
import { isNullOrUndefined } from 'util';

export default {
    state: {
        userIsAuth: false,
        user: {
            id: ''
        },
        triggerFetch: false
    },
    mutations: {
        triggerFetch (state) {
            state.triggerFetch = !state.triggerFetch
        },
        setUserAuth (state, payload) {
            state.userIsAuth = payload
        },
        setUser (state, payload) {
            state.user = payload
        },
        setUserID (state, payload) {
            state.user.id = payload
        }
    },
    actions: {
        triggerFetch({commit}) {
            commit('triggerFetch')
        },
        setUserAuth({commit}, payload) {
            commit('setUserAuth', payload)
        },
        signUserUp ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {

                    let key = user.uid
                    let email = {email: payload.email,
                                isNew: true}
                    // commit('setLoading', false)
                    return firebase.database().ref('/profiles/' + key).update(email)
                    commit('setUserID', key)
                })
            .catch(
                error => {
                    commit('setLoading', false),
                    commit('setError', error),
                    console.log(error)
                }
            )
        },
        signUserIn ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit('setUserID', user.uid)
                    commit('setUserAuth', true)
                }
            )
            .catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
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
        autoSignIn ({commit}, payload) {
            //This function delivers the UID from Firebase auth and stores it locally for use with fetching
            commit('setUserID', payload)
            commit('setUserAuth', true)
        },
    },
    getters: {
        triggerFetch (state) {
            return state.triggerFetch
        },
        userIsAuth (state) {
            return state.userIsAuth
        },
        getUser (state) {
            return state.user
        },
        getUserID (state) {
            return state.user.id
        },
        getSkills (state) {
            return state.user.skills
        },
        getPersonalInfo (state) {
            return state.user.personal
        },
        getEducation (state) {
            return state.user.education
        },
        getEmployment (state) {
            return state.user.employment
        }
    }
}