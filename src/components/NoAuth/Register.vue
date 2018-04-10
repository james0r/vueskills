<template>
  <div class="modal fade" id="myModal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
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
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">Email</span>
              </div>
              <input type="text" class="form-control">
            </div>
            <div class="input-group my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">Password</span>
              </div>
              <input type="password" class="form-control">
            </div>
            <div class="input-group my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">Confirm</span>
              </div>
              <input type="password" class="form-control">
            </div>
            <p class="text-danger mb-0">Please for alert</p>
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
        
    }

</script>
