<template>
  <div class="modal fade" id="registerModal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content" role="document">
          <div class="modal-header bg-primary text-white py-1 border-primary">
            <div class="modal-title pt-1 pb-0" id="modalLabel">
              <h4>Register</h4>
            </div>
            <button type="button" class="close close-button-fix" data-dismiss="modal" aria-label="Close">
              <span class="text-white" aria-hidden="true">&times;</span>
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
              <input type="password" class="form-control" v-model="confirmPassword">
            </div>
            <p class="text-danger mb-0">Please for alert</p>
            Email: {{ email }} <br>
            Password: {{ password }} <br>
            Confirm Password: {{ confirmPassword }}
          </div>
          <div class="modal-footer">
            <div class="col text-right">
              <div class="row float-right">
                <a class="pt-2" href="#">Already Registered?</a>
                <button type="submit" class="btn btn-primary ml-2">Register</button>
              </div>
              <div class="clearfix"></div>
            </div>
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
                confirmPassword: ''
            }
        },
        computed: {
            
        },
        methods: {
            signUp () {
                if (passwordsMatch()) {

                } else {

                }
            },
            passwordsMatch () {
                return this.password !== this.confirmPassword ? false : true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .close-button-fix {
    padding-right: 15px !important;
    padding-top: 20px !important;
    }

    .modal-header {
    box-shadow: 0px 5px 8px 2px #888888;
    }
</style>

