<template>
  <div>
    <div id="app">
      <nav class="navbar navbar-expand-md navbar-dark bg-primary py-0">
        <router-link to="/" class="navbar-brand" style="cursor: pointer">
        <div class="row nowrap pl-2">
        <img src="./assets/vueskills-logo.png" height="38px" class="ml-0">
        <p class="my-auto ml-1">Vueskills (Alpha Release)</p>
        </div>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarsExample04">
          <ul class="navbar-nav ml-auto">
            <li v-show="userIsAuth" 
            flat 
            class="nav-item active">
              <div 
              style="cursor: pointer"
              @click="logout" 
              class="nav-link">
                <i class="fas fa-sign-out-alt"></i> Logout
              </div>
            </li>
            <li v-for="item in menuItems" :key="item.title" class="nav-item active">
              <router-link 
              class="nav-link" 
              :to="item.link" 
              :data-toggle="item.dataToggle" 
              :data-target="item.dataTarget">
                <i :class="item.icon"></i>
                {{ item.title }} 
                </router-link>
            </li>

          </ul>
        </div>
      </nav>      
    </div>
    <router-view></router-view>
    <add-education-modal></add-education-modal>
    <add-employment-modal></add-employment-modal>
    <directional-landing-modal></directional-landing-modal>
    <edit-skill-modal></edit-skill-modal>
    <add-skill-modal></add-skill-modal>
    <router-link 
    to="/credits"
    height=50px 
    width=50px
    class="position-fixed text-primary info-button-container">
      <i class="fas fa-info-circle info-button" style="box-shadow: 5px 5px 5px 5px black"></i>
    </router-link>
    
  </div>
</template>

<script>
import * as firebase from 'firebase'
import Register from './components/NoAuth/Register'
import SignIn from './components/NoAuth/SignIn'
import AddEducationModal from './components/Auth/AddEducationModal'
import AddEmploymentModal from './components/Auth/AddEmploymentModal'
import DirectionalLandingModal from './components/NoAuth/DirectionalLandingModal'
import AddSkillModal from './components/Auth/AddSkillModal'
import EditSkillModal from './components/Auth/EditSkillModal'
import Profile from './components/Auth/Profile'

export default {
  data () {
    return {
      showRegister: false
    }
  },
  methods: {
    toggleRegister () {
      this.showRegister = !this.showRegister
    },
    logout () {
      firebase.auth().signOut()
      this.$store.dispatch('setUserAuth', false)
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'fas fa-eye', title: 'Browse', link: '/', dataToggle: '', dataTarget: ''},
        { icon: 'fas fa-sign-out-alt', title: 'Sign In', link: '/signin', dataToggle: 'modal', dataTarget: '#signInModal'},
        { icon: 'far fa-registered', title: 'Register', link: '/register'}
      ]
      if (this.userIsAuth) {
        menuItems = [
          { icon: 'fas fa-cog', title: 'Settings', link: '/settings', dataToggle: '', dataTarget: ''},
          { icon: 'far fa-edit', title: 'Edit Profile', link: '/edit'}
        ]
      }
      return menuItems
    },
    userIsAuth () {
      return this.$store.getters.userIsAuth
    },
  },
  components: {
    Register,
    SignIn,
    AddEducationModal,
    AddEmploymentModal,
    DirectionalLandingModal,
    AddSkillModal,
    EditSkillModal,
    Profile
  }
  // name: 'App',
  // components: {
  //   Home
  // },
}
</script>

<style lang="scss">
    .close-button-fix {
    padding-right: 15px !important;
    padding-top: 20px !important;
    }

    .modal-header {
    box-shadow: 0px 5px 8px 2px #888888;
    }
    .info-button-container {
    right: 20px; 
    bottom: 15px; 
    cursor: pointer;
    line-height: 64px;
    font-size: 48px;
    border-radius: 50%;
    border: none;
    text-shadow: 8px 2px #888888;
    }

    .info-button:hover, .info-button:focus {
      color: 800080;
    }
    .info-button-container .info-button {
    text-shadow: 5px 5px 2px #272634;
    }
</style>
