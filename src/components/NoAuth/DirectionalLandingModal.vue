<template>
<div class="modal" id="directionalLandingModal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="vertical-alignment-helper">
    <div class="modal-dialog vertical-align-center fadeIn animated" role="document">
      <div class="modal-content" role="document">
        <div class="modal-body">
          <div class="row">
            <div class="col text-center">
              <h2>You are...</h2>
            </div>
          </div>
          <div class="row my-3">
            <div class="col-6 text-center content-left">
              <a href="#" class="btn btn-sq-lg btn-primary">
                <i class="fa fa-building fa-5x"></i><br/>an Employer
              </a>
            </div>
            <div class="col-6 text-center">
              <a href="#" class="btn btn-sq-lg btn-primary text-center">
                <i class="fa fa-user fa-5x mx-auto"></i><br/>a Job Seeker
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              <a href="#">Need Help?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.content-left {
  border-right: 1px solid #E9ECEF;
}

.vertical-alignment-helper {
    display:table;
    height: 100%;
    width: 100%;
    pointer-events:none; /* This makes sure that we can still click outside of the modal to close it */
}
.vertical-align-center {
    /* To center vertically */
    display: table-cell;
    vertical-align: middle;
    pointer-events:none;
}
.modal-content {
    /* Bootstrap sets the size of the modal in the modal-dialog class, we need to inherit it */
    width:inherit;
    max-width:inherit; /* For Bootstrap 4 - to avoid the modal window stretching full width */
    height:inherit;
    /* To center horizontally */
    margin: 0 auto;
    pointer-events: all;
}

@keyframes fadeIn {
   0% {opacity: 0;}
   100% {opacity: 1;}
}
@-webkit-keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
 }

.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
 }

.animated {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>


<script>
    export default {
        
    }

</script>
