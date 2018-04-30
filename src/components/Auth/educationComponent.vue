<template>
    <div class="col-12 mt-2">
      <div class="row">
        <div class="col-12 text-center mb-4 bg-primary text-white card-shadow">
          <h4 class="pt-1">Education</h4>
        </div>
      </div>
      <div 
      v-for="eduItem in userData.education"
      :key="eduItem.key"
      class="row mb-3 mx-0 border card-shadow">
        <div class="col-12">
          <div class="row">
            <div class="col-8 font-weight-bold">{{ eduItem.organization }}</div>
            <div class="col-4 text-right font-italic nowrap">{{ eduItem.city }}, {{ eduItem.state }}</div>
          </div>
          <div class="row mt-2 text-center">
            <div class="col-12">
              {{ eduItem.degree }}
            </div>
          </div>
          <div class="row mb-2 text-center">
            <div class="col-12">
              {{ eduItem.fromYear }} - {{ eduItem.toYear }}
            </div>
          </div>
          <div v-if="eduItem.completed" class="row mb-2 text-center">
            <div class="col-12">
              <i v-show="eduItem.completed" class="fas fa-graduation-cap"></i> Completed
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['userData'],
  mounted () {
    // this.$bus.$on('emitUserData', ($event) => {
    //   this.storeUserData($event)
    //   console.log("educationComponent received the emit event")
    // })
  },
  computed: {

  },
  methods: {
   
  }
}
</script>

<style scoped>
.header-title {
  background-color: rgba(255,255,255, .4);
  border-radius: 10px;
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
