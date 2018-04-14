<template>
      <div class="row">
        <div class="col-12 text-center mb-3 bg-primary header-title text-white card-shadow">
          <h4 class="pt-1">Employment</h4>
        </div>
        <div class="col-12 mt-2">
          <div class="row mb-3 mx-0 border card-shadow">
            <div class="col-12">
              <div class="row">
                <div class="col-8 font-weight-bold">Blizzard Entertainment</div>
                <div class="col-4 text-right font-italic nowrap">Los Angeles, CA</div>
              </div>
              <div class="row mt-2 text-center">
                <div class="col-12">
                  Senior Game Designer
                </div>
              </div>
              <div class="row mb-2 text-center">
                <div class="col-12">
                  2014 - Present
                </div>
              </div>
              <div class="row mb-2 text-center">
                <div class="col-12">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  </ul>
                </div>
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

            }
        }
    }
</script>

<style>
.header-title {
  background-color: rgba(255,255,255, .4);
  border-radius: 10px;
}
.fadeOut {
    opacity: 1;
    animation: fadeOut .5s ease-in;
}
@keyframes fadeOut {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
.outline-main {
border: 1px solid #E5E5E5;
padding-bottom: 20px;
}

.button-shadow,
.card-shadow,
.card {
box-shadow: 0px 5px 8px 2px #888888;
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
