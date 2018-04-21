<template>
  <div class="outline-main col-10 col-sm-10 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
    <div class="row profile-card-header text-center mb-3 mx-0">
      <div class="mx-auto my-3">
        <img class="avatar-img" :src="user.personal.avatarUrl">
        <div class="header-title">
          <h2 class="my-0">{{ user.personal.firstName }} {{ user.personal.lastName }}</h2>
          <h5 class="my-0 text-white">{{ user.personal.title }}</h5>
        </div>
      </div>
    </div>
    <div v-if="hasSkills">
      <div
      style="height: 40px" 
      class="col-12 text-center bg-primary text-white card-shadow mt-3 mb-3 pb-0 pt-1">
        <h4 class="">Skills</h4>
      </div>
      <div class="flex-around">
        <div class="card border-primary mb-3 mt-0" v-for="skill in user.skills" :key="skill.key" style="width: 10rem;">
          <div class="card-header text-center py-1">{{ skill.name }}
            <i :class="skill.icon"></i>
          </div>
          <div class="card-body text-primary py-1">
            <div class="text-center">
              <i v-for="star in Math.floor(skill.stars)" :key="star.key" class="fas fa-star"></i>
              <i v-if="Number.isInteger(skill.stars)" class="fas fa-star-half"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center mb-3">
      No Skills Entered
    </div>
    <div v-show="showMore">
      <education-component 
      v-if="hasEducation"
      :class="{fadeIn: showMore, fadeOut: triggerFadeOut}"
      ></education-component>
      <div v-else class="text-center mb-3">
        No Education Entered
      </div>
      <employment-component
      v-if="hasEmployment"
      class="mb-3" 
      :class="{fadeIn: showMore, fadeOut: triggerFadeOut}"
      ></employment-component>
      <div v-else class="text-center mb-3">
        No Employment Entered
      </div>
    </div>
    <div class="text-center">
      <button 
      class="btn btn-primary card-shadow"
      v-show="!showMore" 
      @click="delayCollapse">Show Employment & Education</button>
      <button 
      class="btn btn-primary card-shadow" 
      v-show="showMore"
      @click="delayCollapse">Hide Employment & Education</button>
    </div>
  </div>
</template>

<script>
import EducationComponent from './educationComponent' 
import EmploymentComponent from './employmentComponent' 
export default {
  name: 'Home',
  data () {
    return {
        showMore: false,
        triggerFadeOut: false
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    education: function () {
      return this.$store.getters.getEducation
    },
    error () {
      return this.$store.getters.error
    },
    hasSkills () {
      return this.$store.getters.getSkills.length > 0
    },
    hasEducation () {
      return this.$store.getters.getEducation.length > 0
    },
    hasEmployment () {
      return this.$store.getters.getEmployment.length > 0
    }
  },
  methods: {
      delayCollapse () {
          if (this.showMore) {
                this.triggerFadeOut = true
                console.log(this.triggerFadeOut)
              setTimeout(function() {
                  this.showMore = false
                    this.triggerFadeOut = false
              }.bind(this),499)
          } else {
              this.showMore = true
          }
          
      }
  },
  components: {
      EducationComponent,
      EmploymentComponent
  }
}
</script>

<style scoped>
.fadeIn {
    opacity: 1;
    animation: fadeIn .5s ease-in;
}
@keyframes fadeIn {
  0% { opacity: 0 }
  100% { opacity: 1 }
}

.fadeOut {
    opacity: 1;
    animation: fadeOut .5s ease-in;
}
@keyframes fadeOut {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
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
  padding: 10px 0px 20px 0px;
  border-radius: 10px;
}

.avatar-img {
  position: relative;
  width: 120px;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 40% 50%;
  border-radius: 50%;
  border: 2px solid #5A005A;
}

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