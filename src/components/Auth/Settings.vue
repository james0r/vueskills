<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-10 offset-lg-1 outline-main mt-3">
        <div class="row">
          <div class="col-12 pt-1 text-center bg-primary text-white card-shadow">
            <h4 class="">Account Settings</h4>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-10 offset-1 col-md-8 offset-md-2">
                <div class="row">
                  <div class="col-sm-3">
                    <h5>Settings</h5>
                  </div>
                  <div class="col-sm-9">
                    <label class="">
                      <input type="checkbox" autocomplete="off"> Make profile private.
                    </label>
                    <p class="font-weight-light">Note: You can still edit and save changes to your profile, but profile will only be visible by you. </p>
                    <label class="">
                      <input type="checkbox" autocomplete="off"> Hide all social media links.
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">

                  </div>
                  <div class="col-sm-9">
                    <button type="button" class="btn btn-primary">Save Changes</button>
                  </div>
                </div>
                <div class="row d-flex nowrap mt-5">
                  <div class="col-sm-3">
                    <h5>Reset Profile</h5>
                  </div>
                  <div class="col-sm-9 mt-2">
                    <button type="button" class="btn btn-danger">Reset Profile</button>
                    <br>
                    <p class="font-weight-light mt-3">Note: This process is irreversible. Profile data cannot be retrieved after profile reset.</p>
                  </div>
                </div>
                <div class="row d-flex nowrap mt-3">
                  <div class="col-sm-3">
                    <h5>Delete Account</h5>
                  </div>
                  <div class="col-sm-9 mt-2">
                    <button type="button" class="btn btn-danger">Delete Account</button>
                  </div>
                </div>
                <div class="row d-flex nowrap mt-3">
                  <div class="col-12">
                    <div class="alert alert-danger text-center" role="alert">
                      Settings options will be implemented in a later version of Vueskills.
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

<style lang="scss" scoped>
.outline-main {
  border: 1px solid #E5E5E5;
  padding-bottom: 20px;
}

.card-shadow,
.card {
  box-shadow: 0px 5px 8px 0px #888888;
}

.dark-header {
  background-color: lightgray;
  color: white;
}

.flex-around {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
