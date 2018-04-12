<template>
  <div class="container my-3">
    <div class="outline-main col-12 col-sm-12 col-md-10 offset-md-1 col-lg-12 offset-lg-0">
      <div class="row profile-card-header text-center mb-3">
        <div class="mx-auto my-3">
          <img class="avatar-img">
          <div class="header-title">
            <h2 class="my-0">Janette Lewis</h2>
            <h5 class="my-0 text-white">Senior Game Designer</h5>
          </div>
        </div>
      </div>
      <div class="row">
      </div>
      <div class="flex-around">
        <div 
        class="card border-primary mb-3 mx-2" 
        v-for="skill in user.skills"
        :key="skill.key" 
        style="width: 10rem;">
          <div class="card-header text-center py-1">{{ skill.name }}
            <i class="devicon-github-plain"></i>
          </div>
          <div class="card-body text-primary py-1">
            <div class="text-center">
              <i v-for="star in Math.floor(skill.stars)" :key="star.key" class="fas fa-star"></i>
              <i v-if="Number.isInteger(skill.stars)" class="fas fa-star-half"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-primary card-shadow">See More</button>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
  
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-title {
  background-color: rgba(255,255,255, .4);
  padding: 10px;
  border-radius: 10px;
  position: relative;
  transform: translateY(-30px);
  z-index: 2;
}
.profile-card-header {
  background-color: #5A005A;
  border-radius: 10px;
  box-shadow: 0px 5px 8px 2px #888888;
  max-height: 205px;
}
.outline-main {
  border: 1px solid #E5E5E5;
  padding-bottom: 20px;
  border-radius: 10px;
}

.avatar-img {
  position: relative;
  width: 120px;
  height: 120px;
  background-image: url("https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 40% 50%;
  border-radius: 50%;
  border: 2px solid #5A005A;
}

.card-shadow,
.card {
  box-shadow: 5px 5px 8px 2px #888888;
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
