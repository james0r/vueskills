// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import vSelect from 'vue-select'
import devicon from 'devicon'
import VModal from 'vue-js-modal'
import EditProfile from '@/components/Auth/EditProfile'
import EditSkillModal from '@/components/Auth/EditSkillModal'
import Popper from 'vue-popperjs'


import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';


import './assets/scss/styles.scss'
import './assets/fontawesome-all.js'

Vue.component('v-select', vSelect)
Vue.config.productionTip = false
Vue.use(VModal)
Vue.use(Popper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyAeiKMd8qgkoW2Dkc9N_Ku6Oa5dDrPN3T8",
      authDomain: "vueskills.firebaseapp.com",
      databaseURL: "https://vueskills.firebaseio.com",
      projectId: "vueskills",
      storageBucket: "vueskills.appspot.com",
      messagingSenderId: "757389415869"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        // this.$store.dispatch('fetchUserData')
      }
    })
  },
  components: { 
  App,
  EditProfile,
  EditSkillModal
  },
  template: '<App/>'
})
