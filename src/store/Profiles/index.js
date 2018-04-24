import * as firebase from 'firebase'

export default {
    state: {
        profiles: [{
            id: '',
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
        }]
    },
    mutations: {
 
    },
    actions: {
       
    },
    getters: {
        getProfiles (state) {
            return state.profiles
        }
    }
}