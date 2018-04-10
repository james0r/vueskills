<template>
  <div>
    <div id="app">
      <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <router-link to="/" class="navbar-brand" style="cursor: pointer">VueSkillz</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarsExample04">
          <ul class="navbar-nav ml-auto">
            <li v-for="item in menuItems" :key="item.title" class="nav-item active">
              <router-link class="nav-link" :to="item.link">
                <i :class="item.icon"></i>
                {{ item.title }} 
                </router-link>
            </li>
            <li class="nav-item active">
              <button class="btn btn-secondary nav-link" data-toggle="modal" data-target="#registerModal">
                <i class="far fa-registered"></i>
                Register
                </button>
            </li>
            <li class="nav-item active">
              <button class="btn btn-secondary nav-link" data-toggle="modal" data-target="#signInModal">
                <i class="fas fa-sign-out-alt"></i>
                Sign In
                </button>
            </li>
            <li class="nav-item active">
              <button class="btn btn-secondary nav-link" data-toggle="modal" data-target="#educationModal">
                <i class="fas fa-graduation-cap"></i>
                Education
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

  </div>
</template>

<script>
import Register from './components/NoAuth/Register'
import SignIn from './components/NoAuth/SignIn'
import AddEducationModal from './components/Auth/AddEducationModal'

export default {
  computed: {
    menuItems () {
      let menuItems = [
      { icon: 'fas fa-cog', title: 'Settings', link: '/settings'},
      { icon: 'far fa-edit', title: 'Edit Profile', link: '/edit'}
      ]
      return menuItems
    }
  },
  components: {
    Register,
    SignIn,
    AddEducationModal
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
