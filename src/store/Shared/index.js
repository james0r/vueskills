import * as firebase from 'firebase'

export default {
    state: {
        loading: false,
        error: null,
        techIcon: ''
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
        },
        matchTechIcon (state, payload) {
            state.techIcon = (payload) => {
                switch (payload) {
                    case 'Javascript':
                        return 'devicon-javascript-plain'
                        break;
                    case 'PHP':
                        return 'devicon-php-plain'
                        break;
                    case 'Python':
                        return 'devicon-python-plain'
                        break;
                    case 'C#':
                        return 'devicon-csharp-plain'
                        break;
                    case 'Webpack':
                        return 'devicon-webpack-plain'
                        break;
                    case 'Sass':
                        return 'devicon-sass-plain'
                        break;
                    case 'HTML5':
                        return 'devicon-html5-plain'
                        break;
                    case 'Gulp':
                        return 'devicon-gulp-plain'
                        break;
                    case 'Java':
                        return 'devicon-java-plain'
                        break;
                    case 'C++':
                        return 'devicon-cpluscplus-plain'
                        break;
                    case 'Ruby':
                        return 'devicon-ruby-plain'
                        break;
                    case 'Linux':
                        return 'devicon-linux-plain'
                        break;
                    case 'Windows':
                        return 'devicon-windows8-plain'
                        break;
                    case 'Mac':
                        return 'devicon-apple-plain'
                        break;
                    case 'AWS':
                        return 'devicon-amazonwebservices-original'
                        break;
                    case 'Apache':
                        return 'devicon-apache-plain'
                        break;
                    case 'Photoshop':
                        return 'devicon-photoshop-plain'
                        break;
                    case 'Illustrator':
                        return 'devicon-illustrator-plain'
                        break;
                    case 'Vue.js':
                        return 'devicon-vuejs-plain'
                        break;
                    case 'React':
                        return 'devicon-react-plain'
                        break;
                    case 'Angular':
                        return 'devicon-angularjs-plain'
                        break;
                    case 'Django':
                        return 'devicon-django-plain'
                        break;
                    case 'CSS':
                        return 'devicon-css3-plain'
                        break;
                    case 'Git':
                        return 'devicon-git-plain'
                        break;
                    case 'jQuery':
                        return 'devicon-jquery-plain'
                        break;
                    case 'MongoDB':
                        return 'devicon-mongodb-plain'
                        break;
                    case 'Node.js':
                        return 'devicon-nodejs-plain'
                        break;
                    case 'MySQL':
                        return 'devicon-mysql-plain'
                        break;
                    case 'NGINX':
                        return 'devicon-nginx-plain'
                        break;
                    case 'Wordpress':
                        return 'devicon-wordpress-plain'
                        break;
                    case 'Typescript':
                        return 'devicon-typescript-plain'
                        break;
                    default:
                        return 'fas fa-question'
                }
            }

        }
    },
    actions: {
        clearError ({commit}) {
            commit('clearError')
        }
    },
    getters: {
        loading (state) {
            return state.loading
        },
        error (state) {
            return state.error
        },
        getTechIcon (state, payload) {
            return commit('matchTechIcon', payload)
        }

    }

}