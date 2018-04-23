<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12 text-center mb-4 bg-primary text-white card-shadow">
        <h4 class="pt-1">Employment</h4>
      </div>
    </div>
    <div class="col-12 card-shadow" v-for="empItem in employment" :key="empItem.key">
      <div class="row">
        <div class="col-8 font-weight-bold">{{ empItem.employer }}</div>
        <div class="col-4 text-right font-italic nowrap">{{ empItem.city }}, {{ empItem.state }}</div>
      </div>
      <div class="row mt-2 text-center">
        <div class="col-12">
          {{ empItem.jobTitle }}
        </div>
      </div>
      <div class="row mb-2 text-center">
        <div class="col-12">
          {{ empItem.fromYear }} - {{ empItem.toYear }}
        </div>
      </div>
      <div class="row mb-2 text-center">
        <div class="col-12">
          <ul>
            <li>{{ empItem.ach1 }}</li>
            <li>{{ empItem.ach2 }}</li>
            <li>{{ empItem.ach3 }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
    export default {
      computed: {
        employment: function () {
        return this.$store.getters.getEmployment
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
