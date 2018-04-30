<template>
  <div>
    <div v-if="profiles">
      <div v-for="profile in profiles" :key="profile.key">
        <div class="outline-main col-10 col-sm-10 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
          <div class="row profile-card-header text-center mb-3 mx-0">
            <div class="mx-auto my-3">
              <img class="avatar-img" :src="userData.personal.avatarUrl">
              <div class="header-title">
                <h2 class="my-0">{{ userData.personal.firstName }} {{ userData.personal.lastName }}</h2>
                <h5 class="my-0 text-white">{{ userData.personal.title }}</h5>
              </div>
            </div>
          </div>
          <div v-if="userData.skills.length > 0">
            <div
            style="height: 40px" 
            class="col-12 text-center bg-primary text-white card-shadow mt-3 mb-3 pb-0 pt-1">
              <h4 class="">Skills</h4>
            </div>
            <div class="flex-around">
              <div class="card border-primary mb-3 mt-0" v-for="skill in userData.skills" :key="skill.key" style="width: 10rem;">
                <div v-show="skill.strongestSkill" class="box">
                  <div class="ribbon">
                    <span>STRONGEST</span>
                  </div>
                </div>
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
            v-if="userData.education.length > 0"
            :class="{fadeIn: showMore, fadeOut: triggerFadeOut}"
            ></education-component>
            <div v-else class="text-center mb-3">
              No Education Entered
            </div>
            <employment-component
            v-if="userData.employment.length > 0"
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
      </div>
    </div>
    <div v-else class="alert alert-danger col-6 offset-3 my-3 text-center">
      NO PROFILES TO DISPLAY
    </div>
  </div>
</template>

<script>
import EducationComponent from './educationComponent' 
import EmploymentComponent from './employmentComponent' 
import * as firebase from 'firebase'
export default {

  name: 'Home',
  data () {
    return {
        showMore: false,
        triggerFadeOut: false,
        userData: []
    }
  },
  computed: {
    userID () {
      return this.$store.getters.getUserID
    },
    user () {
      return this.$store.getters.user
    },
    profiles () {
      return this.$store.getters.getProfiles
    },
    error () {
      return this.$store.getters.error
    }
  },
  created: function () {
    console.log("created hook has run")
    this.fetchUserData(this.$store.getters.getUserID)
  },
  methods: {
    fetchUserData (userID) {
        this.$store.dispatch('setLoading', true)
        console.log("fetchUserData called with userID of " + userID)
        let db = firebase.database()
        let ref = db.ref('/profiles/' + userID)
        ref.once('value')
        .then(data => {

          let dataVal = data.val()
          console.log(dataVal)
          console.log(dataVal.email)
          console.log(dataVal.isNew)
          let builtData = {}
          
          if (dataVal.isNew == true){
            console.log("isNew is true")
             builtData = {
                personal: {
                  firstName: 'First',
                  lastName: 'Last',
                  title: 'Your Title',
                  avatarUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMwMHB4IiB3aWR0aD0iMzAwcHgiIHZlcnNpb249IjEuMCIgdmlld0JveD0iLTMwMCAtMzAwIDYwMCA2MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIHN0cm9rZT0iI0FBQSIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMjgwIiBmaWxsPSIjRkZGIi8+Cjx0ZXh0IHN0eWxlPSJsZXR0ZXItc3BhY2luZzoxO3RleHQtYW5jaG9yOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcjtzdHJva2Utb3BhY2l0eTouNTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MjtmaWxsOiM0NDQ7Zm9udC1zaXplOjM2MHB4O2ZvbnQtZmFtaWx5OkJpdHN0cmVhbSBWZXJhIFNhbnMsTGliZXJhdGlvbiBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxMjUlO3dyaXRpbmctbW9kZTpsci10YjsiIHRyYW5zZm9ybT0ic2NhbGUoLjIpIj4KPHRzcGFuIHk9Ii00MCIgeD0iOCI+Tk8gSU1BR0U8L3RzcGFuPgo8dHNwYW4geT0iNDAwIiB4PSI4Ij5BVkFJTEFCTEU8L3RzcGFuPgo8L3RleHQ+Cjwvc3ZnPg==',
                  email: 'your@email.com',
                  twitterUrl: '',
                  facebookUrl: '',
                  instagramUrl: '',
                  linkedInUrl: '',
                  websiteUrl: ''
                },
                userID: 'userID_placeholder',
                email: dataVal.email,
                isNew: false,
                skills: [],
                employment: [],
                education: []
            }
            console.log(userID)
            let isNew = {isNew: true}
            firebase.database().ref('/profiles/').child(userID).update(builtData)
          } else {
            console.log("isNew is false")
             builtData = {
              personal: {
                firstName: dataVal.personal.firstName,
                lastName: dataVal.personal.lastName,
                title: dataVal.personal.title,
                avatarUrl: dataVal.personal.avatarUrl,
                email: dataVal.personal.email,
                twitterUrl: dataVal.personal.twitterUrl,
                facebookUrl: dataVal.personal.facebookUrl,
                instagramUrl:dataVal.personal.instagramUrl,
                linkedInUrl: dataVal.personal.linkedInUrl,
                websiteUrl: dataVal.personal.websiteUrl
              },
              userID: 'userID_placeholder',
              email: dataVal.email,
              skills: [],
              employment: [],
              education: []
            }
            if (dataVal.hasOwnProperty('skills')) {
              for (let key in dataVal.skills) {
                let newSkill = {}
                  for (let skill in dataVal.skills[key]) {
                    newSkill[skill] = dataVal.skills[key][skill]
                  }
                  builtData.skills.push(newSkill)
                }
            }
            if (dataVal.hasOwnProperty('employment')) {
              for (let key in dataVal.employment) {
                let newEmployment = {}
                  for (let emp in dataVal.employment[key]) {
                    newEmployment[emp] = dataVal.employment[key][emp]
                  }
                  builtData.skills.push(newEmployment)
                }
            }
            if (dataVal.hasOwnProperty('education')) {
              for (let key in dataVal.education) {
                let newEducation = {}
                  for (let edu in dataVal.education[key]) {
                    newEducation[edu] = dataVal.education[key][edu]
                  }
                  builtData.skills.push(newEducation)
                }
            }
          }
          console.log(builtData)
          this.userData = builtData
        })
        .catch(error => {
            console.log("error thrown" + error)
            this.$store.dispatch('setLoading', false)
        })
    },
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
.ribbon {
  position: absolute;
  right: -5px; top: -5px;
  z-index: 6;
  overflow: hidden;
  width: 75px; height: 75px;
  text-align: right;
}
.ribbon span {
  font-size: 10px;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 100px;
  display: block;
  background: #79A70A;
  background: linear-gradient(#800080 0%, #800080 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px; right: -21px;
}
.ribbon span::before {
  content: "";
  position: absolute; left: 0px; top: 100%;
  z-index: 4;
  border-left: 3px solid #800080;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #800080;
}
.ribbon span::after {
  content: "";
  position: absolute; right: 0px; top: 100%;
  z-index: 4;
  border-left: 3px solid transparent;
  border-right: 3px solid #800080;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #800080;
}
</style>