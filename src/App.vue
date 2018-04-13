<template>
  <div>
    <div id="app">
      <nav class="navbar navbar-expand-md navbar-dark bg-primary py-0">
        <router-link to="/" class="navbar-brand" style="cursor: pointer">
        <div class="row nowrap pl-2">
        <img src="./assets/vueskills-logo.png" height="38px" class="ml-0">
        <p class="my-auto ml-1">Vueskills</p>
        </div>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarsExample04">
          <ul class="navbar-nav ml-auto">
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
            <li class="nav-item active">
              <button class="btn btn-info nav-link" @click="isUserAuth = !isUserAuth">
                UserAuth? {{ isUserAuth }}
                </button>
            </li>
          </ul>
        </div>
      </nav>      
    </div>
    <router-view></router-view>
    <register></register>
    <sign-in></sign-in>
    <add-education-modal></add-education-modal>
    <add-employment-modal></add-employment-modal>
    <directional-landing-modal></directional-landing-modal>
    <add-skill-modal></add-skill-modal>

  </div>
</template>

<script>
import Register from './components/NoAuth/Register'
import SignIn from './components/NoAuth/SignIn'
import AddEducationModal from './components/Auth/AddEducationModal'
import AddEmploymentModal from './components/Auth/AddEmploymentModal'
import DirectionalLandingModal from './components/NoAuth/DirectionalLandingModal'
import AddSkillModal from './components/Auth/AddSkillModal'

export default {
  data () {
    return {
      isUserAuth: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'fas fa-eye', title: 'Browse', link: '/browse', dataToggle: '', dataTarget: ''},
        { icon: 'fas fa-sign-out-alt', title: 'Sign In', link: '/signin', dataToggle: 'modal', dataTarget: '#signInModal'},
        { icon: 'far fa-registered', title: 'Register', link: '/register', dataToggle: 'modal', dataTarget: '#registerModal'}
      ]
      if (this.isUserAuth) {
        menuItems = [
          { icon: 'fas fa-cog', title: 'Settings', link: '/settings', dataToggle: '', dataTarget: ''},
          { icon: 'far fa-edit', title: 'Edit Profile', link: '/edit', dataToggle: '', dataTarget: ''},
        ]
      }
      return menuItems
    }
  },
  components: {
    Register,
    SignIn,
    AddEducationModal,
    AddEmploymentModal,
    DirectionalLandingModal,
    AddSkillModal
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
</style>
