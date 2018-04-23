<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content" role="document">
      <div class="modal-header bg-primary text-white py-1 border-primary">
        <div class="modal-title pt-1 pb-0" id="modalLabel">
          <h4>Sign In</h4>
        </div>
        <button type="button" class="close close-button-fix" data-dismiss="modal" aria-label="Close">
          <span class="text-white" aria-hidden="true"></span>
        </button>
        <h3></h3>
      </div>
      <div class="modal-body text-center">
        <div class="input-group">
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
        <a href="#" style="text-decoration: none">Forgot Password?</a>
      </div>
      <div class="modal-footer">
        <div class="col">
          <div class="row float-right">
            <router-link to="/register" class="btn btn-primary">Create an Account</router-link>
            <button type="submit" class="btn btn-primary ml-2">Sign in</button>
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
                password: ''
            }
        },
        computed: {
            
        },
        methods: {

        }
    }

</script>

<style lang="scss" scoped>
    .btn:focus {
        outline: none;
    }
    a:hover {
      color: hotpink !important;
    }
</style>

