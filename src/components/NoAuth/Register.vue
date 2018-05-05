<template>
    <div class="modal-dialog" role="document">
      <div class="modal-content" role="document">
        <div class="modal-header bg-primary text-white py-1 border-primary">
          <div class="modal-title pt-1 pb-0" id="modalLabel">
            <h4>Register</h4>
          </div>
          <button type="button" class="close close-button-fix" data-dismiss="modal" aria-label="Close">
          </button>
          <h3></h3>
        </div>
        <div class="modal-body text-center">
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Email</span>
            </div>
            <input type="text" class="form-control" v-model="email">
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Password</span>
            </div>
            <input type="password" class="form-control" v-model="password">
          </div>
          <div class="input-group my-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Confirm</span>
            </div>
            <input type="password" class="form-control" v-model="confirmPassword" v-on:keyup.enter="signUp">
          </div>
          <div v-if="error" class="alert alert-danger" role="alert">
            {{ error.message }}
          </div>
        </div>
        <div class="modal-footer">
          <div class="col text-right">
            <div class="row float-right">
              <router-link to="/signin" class="pt-2 no-active-border link-secondary" 
              style="cursor: pointer" 
              >Already Registered?</router-link>
              <a href="#" 
              :class="{ disabled: passwordsDontMatch }" 
              @click="signUp" 
              class="btn btn-primary ml-2"
              >Register</a>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>


</template>


<script>
    export default {
        data () {
            return {
                //V-modal these
                email: '',
                password: '',
                confirmPassword: '',
                closeModal: false
            }
        },
        computed: {
            passwordsDontMatch () {
              return this.password !== this.confirmPassword ? true : false
            },
            userIsAuth () {
              return this.$store.getters.userIsAuth
            },
            error () {
              return this.$store.getters.error
            },
            loading () {
              return this.$store.getters.loading
            }
        },
        watch: {
          userIsAuth (value) {
            if (value !== null && value !== undefined) {
              this.$router.push('/')
            }
          },
          isBackdrop () {
            return !closeModal
          },
          userIsAuth (value) {
            if (value == true) {
              this.$router.push('/')
            }
          }
        },
        methods: {
            signUp () {
              console.log("signUp was called with email and password " + this.email + " and password is " + this.password)
              this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
            } 
        }
    }
</script>

<style lang="scss" scoped>
    body {
      background-color: black;
    }
    .close-button-fix {
    padding-right: 15px !important;
    padding-top: 20px !important;
    }

    .modal-header {
    box-shadow: 0px 5px 8px 2px #888888;
    }

    .no-active-border:focus {
        outline: none;
    }
    .link-secondary:hover {
      color: hotpink !important;
    }
    .link-secondary {
      color: #800080 !important;
    }
</style>

