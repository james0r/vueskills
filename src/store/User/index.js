import * as firebase from 'firebase'
import Shared from '../Shared'

export default {
    state: {
        userIsAuth: false,
        skillEditingID: ''
    },
    mutations: {
        setUserAuth (state, payload) {
            state.userIsAuth = payload
        },
        // setSkill (state, payload) {
        //     state.user.skills.push(payload)
        // },
        // setEducation (state, payload) {
        //     state.user.education.push(payload)
        // },
        // setEmployment (state, payload) {
        //     state.user.employment.push(payload)
        // },
        // setPersonalInfo (state, payload) {
        //     state.user.personal = payload
        // },
        // updateSkills (state, payload) {
        //     state.user.skills = payload
        // },
        // updateEducation (state, payload) {
        //     state.user.education = payload
        // },
        // updateEmployment (state, payload) {
        //     state.user.employment = payload
        // },
        setSkillEditing (state, payload) {
            state.skillEditingID = payload
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
                            firstName: 'Your',
                            lastName: 'Name',
                            title: 'VueSkills Resume Title',
                            avatarUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMwMHB4IiB3aWR0aD0iMzAwcHgiIHZlcnNpb249IjEuMCIgdmlld0JveD0iLTMwMCAtMzAwIDYwMCA2MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIHN0cm9rZT0iI0FBQSIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMjgwIiBmaWxsPSIjRkZGIi8+Cjx0ZXh0IHN0eWxlPSJsZXR0ZXItc3BhY2luZzoxO3RleHQtYW5jaG9yOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcjtzdHJva2Utb3BhY2l0eTouNTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MjtmaWxsOiM0NDQ7Zm9udC1zaXplOjM2MHB4O2ZvbnQtZmFtaWx5OkJpdHN0cmVhbSBWZXJhIFNhbnMsTGliZXJhdGlvbiBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxMjUlO3dyaXRpbmctbW9kZTpsci10YjsiIHRyYW5zZm9ybT0ic2NhbGUoLjIpIj4KPHRzcGFuIHk9Ii00MCIgeD0iOCI+Tk8gSU1BR0U8L3RzcGFuPgo8dHNwYW4geT0iNDAwIiB4PSI4Ij5BVkFJTEFCTEU8L3RzcGFuPgo8L3RleHQ+Cjwvc3ZnPg==',
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
        setSkillEditing ({commit}, payload) {
            commit('setSkillEditing', payload)
        },
        signUserUp ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    // commit('setLoading', false)
                    const newUser = {
                        userID: user.uid,
                        email: payload.email,
                        "personal": {
                            firstName: 'Your',
                            lastName: 'Name',
                            title: 'VueSkills Resume Title',
                            avatarUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMwMHB4IiB3aWR0aD0iMzAwcHgiIHZlcnNpb249IjEuMCIgdmlld0JveD0iLTMwMCAtMzAwIDYwMCA2MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIHN0cm9rZT0iI0FBQSIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMjgwIiBmaWxsPSIjRkZGIi8+Cjx0ZXh0IHN0eWxlPSJsZXR0ZXItc3BhY2luZzoxO3RleHQtYW5jaG9yOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcjtzdHJva2Utb3BhY2l0eTouNTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MjtmaWxsOiM0NDQ7Zm9udC1zaXplOjM2MHB4O2ZvbnQtZmFtaWx5OkJpdHN0cmVhbSBWZXJhIFNhbnMsTGliZXJhdGlvbiBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxMjUlO3dyaXRpbmctbW9kZTpsci10YjsiIHRyYW5zZm9ybT0ic2NhbGUoLjIpIj4KPHRzcGFuIHk9Ii00MCIgeD0iOCI+Tk8gSU1BR0U8L3RzcGFuPgo8dHNwYW4geT0iNDAwIiB4PSI4Ij5BVkFJTEFCTEU8L3RzcGFuPgo8L3RleHQ+Cjwvc3ZnPg==',
                            email: payload.email,
                            twitterUrl: '',
                            facebookUrl: '',
                            instagramUrl: '',
                            linkedInUrl: '',
                            websiteUrl: ''
                        },
                        "skills": {
                           
                        },
                        "education": {
                            
                        },
                        "employment": {
                            
                        }
                    }
                    return newUser
                })
            .then(newUser => {
                return firebase.database().ref('profiles').push(newUser)
            })
            .then(fileData => {
                console.log("Key Returned: " + fileData.key)
                commit('setUserAuth', true)
            })
            .catch(
                error => {
                    commit('setLoading', false),
                    commit('setError', error),
                    console.log(error)
                }
            )
        },
        // setSkill ({ commit}, payload) {
        //     const newSkill = {
        //         id: payload.id,
        //         name: payload.name,
        //         icon: Shared.state.techIcons[payload.name],
        //         stars: payload.stars,
        //         notes: payload.notes,
        //         strongestSkill: payload.strongestSkill
        //     }
        //     commit('setSkill', newSkill)
        // },
        // setEducation ({ commit}, payload) {
        //     const newEducation = {
        //         id: payload.id,
        //         organization: payload.organization,
        //         degree: payload.degree,
        //         city: payload.city,
        //         state: payload.state,
        //         fromYear: payload.fromYear,
        //         toYear: payload.toYear,
        //         completed: payload.completed
        //     }
        //     commit('setEducation', newEducation)
        // },
        // setEmployment ({commit}, payload) {
        //     const newEmployment = {
        //         id: payload.id,
        //         employer: payload.employer,
        //         jobTitle: payload.jobTitle,
        //         city: payload.city,
        //         state: payload.state,
        //         fromYear: payload.fromYear,
        //         toYear: payload.toYear,
        //         ach1: payload.ach1,
        //         ach2: payload.ach2,
        //         ach3: payload.ach3
        //     }
        //     commit('setEmployment', newEmployment)
        // },
        // setPersonalInfo ({ commit}, payload) {
        //     commit('setPersonalInfo', payload)
        // },
        // updateSkills ({commit}, payload) {
        //     const newSkills = payload
        //     commit('updateSkills', newSkills)
        // },
        // updateEducation ({commit}, payload) {
        //     const newEducation = payload
        //     commit('updateEducation', newEducation)
        // },
        // updateEmployment ({commit}, payload) {
        //     const newEmployment = payload
        //     commit('updateEmployment', newEmployment)
        // },
        autoSignIn ({commit}, payload) {
            commit('setUser', {
                id: user.uid,
                personal: {
                    firstName: 'Your',
                    lastName: 'Name',
                    title: 'VueSkills Resume Title',
                    avatarUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMwMHB4IiB3aWR0aD0iMzAwcHgiIHZlcnNpb249IjEuMCIgdmlld0JveD0iLTMwMCAtMzAwIDYwMCA2MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIHN0cm9rZT0iI0FBQSIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMjgwIiBmaWxsPSIjRkZGIi8+Cjx0ZXh0IHN0eWxlPSJsZXR0ZXItc3BhY2luZzoxO3RleHQtYW5jaG9yOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcjtzdHJva2Utb3BhY2l0eTouNTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MjtmaWxsOiM0NDQ7Zm9udC1zaXplOjM2MHB4O2ZvbnQtZmFtaWx5OkJpdHN0cmVhbSBWZXJhIFNhbnMsTGliZXJhdGlvbiBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxMjUlO3dyaXRpbmctbW9kZTpsci10YjsiIHRyYW5zZm9ybT0ic2NhbGUoLjIpIj4KPHRzcGFuIHk9Ii00MCIgeD0iOCI+Tk8gSU1BR0U8L3RzcGFuPgo8dHNwYW4geT0iNDAwIiB4PSI4Ij5BVkFJTEFCTEU8L3RzcGFuPgo8L3RleHQ+Cjwvc3ZnPg==',
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
            })
        },
        // fetchUserData ({commit, getters}) {
        //     commit('setLoading', true)
        //     firebase.database().ref('/users/' + getters.user.id + '/registrations/').once('value')
        //     .then(data => {
        //         const dataPairs = data.val()
        //         let registeredMeetups = []
        //         let swappedPairs = {}
        //         for (let key in dataPairs) {
        //             registeredMeetups.push(dataPairs[key])
        //             swappedPairs[dataPairs[key]] = key
        //         }
        //         const updatedUser = {
        //             id: getters.user.id,
        //             registeredMeetups: registeredMeetups,
        //             fbKeys: swappedPairs,
        //             email: getters.user.email
        //         }
        //         commit('setLoading', false)
        //         commit('setUser', updatedUser)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         commit('setLoading', false)
        //     })
        // }
    },
    getters: {
        userIsAuth (state) {
            return state.userIsAuth
        },
        getSkillEditing (state) {
            return state.skillEditingID
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