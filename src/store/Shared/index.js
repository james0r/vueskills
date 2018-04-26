import * as firebase from 'firebase'

export default {
    state: {
        loading: false,
        error: null,
        techIcons: 
            {
                'Javascript': 'devicon-javascript-plain',
                'PHP': 'devicon-php-plain',
                'Python': 'devicon-python-plain',
                'C#': 'devicon-csharp-plain',
                'Webpack': 'devicon-webpack-plain',
                'Sass': 'devicon-sass-plain',
                'HTML5': 'devicon-html5-plain',
                'Gulp': 'devicon-gulp-plain',
                'Java': 'devicon-java-plain',
                'C++': 'devicon-cplusplus-plain',
                'Ruby': 'devicon-ruby-plain',
                'Windows': 'devicon-windows8-plain',
                'Linux': 'devicon-linux-plain',
                'Mac': 'devicon-apple-plain',
                'AWS': 'devicon-amazonwebservices-original',
                'Apache': 'devicon-apache-plain',
                'Photoshop': 'devicon-photoshop-plain',
                'Illustrator': 'devicon-illustrator-plain',
                'Vue.js': 'devicon-vuejs-plain',
                'React': 'devicon-react-plain',
                'Angular': 'devicon-angularjs-plain',
                'Django': 'devicon-django-plain',
                'CSS': 'devicon-css3-plain',
                'Git': 'devicon-git-plain',
                'jQuery': 'devicon-jquery-plain',
                'MongoDB': 'devicon-mongodb-plain',
                'Node.js': 'devicon-mongodb-plain',
                'MySQL': 'devicon-mysql-plain',
                'NGINX': 'devicon-nginx-plain',
                'Wordpress': 'devicon-wordpress-plain',
                'Typescript': 'devicon-typescript-plain'
            }
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