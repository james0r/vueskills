<template>
<div class="container">
  <div class="row">
    <div class="col-12 col-lg-10 offset-lg-1 outline-main my-3">
      <div class="row">
        <div class="col-12 pt-1 text-center bg-primary text-white card-shadow">
          <h4 class="">Personal Information</h4>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm-12">
          <div class="form-group">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">First Name</span>
              </div>
              <input @keyup="onKeyUp" type="text" v-model="firstName" class="form-control" :placeholder="firstName"> {{ firstName}}
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">Last Name</span>
              </div>
              <input @keyup="onKeyUp" type="text" v-model="lastName" class="form-control" placeholder="Doe">{{ lastName }}
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Title</span>
            </div>
            <input 
            type="text" 
            @keyup="onKeyUp"
            v-model="title" 
            class="form-control" 
            placeholder="Enter a title that will appear under your name in candidate listings.">{{title}}
          </div>
            <div class="input-group mb-3">
              <div class="custom-file">
                <input 
                @change="onFilePicked"
                ref="fileInput" 
                accept="image/*"
                type="file" 
                class="custom-file-input" 
                id="inputGroupFile02">
                <label class="custom-file-label" for="inputGroupFile02">Choose Avatar File</label>
              </div>
              <div class="input-group-append">
            <popper trigger="click" :options="{placement: 'top'}">
                <div class="popper">
                  <img :src="avatarUrl" height="150px">
                </div>
                <span slot="reference" class="input-group-text" id="">Preview</span>
            </popper>
              </div>
            </div>
          <div class="input-group mb-3" :class="{required: emailAlert}">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Email</span>
            </div>
            <input @keyup="onKeyUp" v-model="email" type="text" class="form-control" placeholder="example@example.com">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Twitter Handle</span>
            </div>
            <input 
            @keyup="onKeyUp"
            v-model="twitterUrl"
            type="text" 
            class="form-control" 
            placeholder="@handle">
          </div> {{ twitterUrl }}
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Facebook URL</span>
            </div>
            <input @keyup="onKeyUp" v-model="facebookUrl" type="text" class="form-control" placeholder="www.facebook.com/me">
          </div> {{ facebookUrl }}
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Instagram URL</span>
            </div>
            <input @keyup="onKeyUp" v-model="instagramUrl" type="text" class="form-control" placeholder="www.instagram.com/me">
          </div> {{ instagramUrl }}
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">LinkedIn URL</span>
            </div>
            <input @keyup="onKeyUp" v-model="linkedInUrl" type="text" class="form-control" placeholder="www.linkedin.com/me">
          </div> {{ linkedInUrl }}
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Website</span>
            </div>
            <input @keyup="onKeyUp" v-model="websiteUrl" type="text" class="form-control" placeholder="www.mywebsite.com">
          </div> {{ websiteUrl }}
          <div class="text-center col mx-auto">
            <button v-if="!infoSaved" class="btn btn-primary button-shadow" @click="savePersonalInfo">
              <i class="far fa-save"></i> Save
            </button>
            <button v-else class="btn btn-primary button-shadow" @click="savePersonalInfo">
              <i class="far fa-save"></i> Saved
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-2">
          <div class="row">
            <div class="col-12 text-center mb-4 bg-primary text-white card-shadow">
              <h4 class="pt-1">Skills</h4>
            </div>
          </div>
          <div class="flex-around">
            <div 
            class="card border-primary mb-3 mx-2" 
            v-for="skill in skills" 
            :class="{ jiggle: isEditable }"
            :key="skill.key" style="width: 10rem;">
                <div v-show="skill.strongestSkill" class="box">
                  <div class="ribbon">
                    <span>STRONGEST</span>
                  </div>
                </div>
                <div class="card-header text-center py-1">{{ skill.name }}
                  <i :class="skill.icon"></i>
                </div>
                <div class="card-body text-primary py-1">
                  <div class="col-10 offset-1 mx-auto px-0 nowrap">
                    <div class="row mx-1 px-auto nowrap">
                      <div 
                      class="mr-0"
                      v-for="star in Math.floor(skill.stars)" 
                      :key="star.key"><i class="fas fa-star"></i>
                      </div><div v-show="skill.stars % 1 !== 0"><i class="fas fa-star-half"></i></div>
                    </div>
                    <div class="row mx-auto text-center">
                      <a
                      v-show="isEditable"
                      class="mx-auto"
                      :class="{ clickable: isEditable }"
                      @click="sendID(skill.id)"
                      data-toggle="modal"
                      data-target="#editSkillModal">
                      <p class="text-center my-0 py-0">Edit</p>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
            <div class="text-center mb-3">
              <button class="btn btn-primary button-shadow" @click="skillCardsEditable">
                <i class="far fa-edit"></i> Edit
              </button>
              <button class="btn btn-primary button-shadow ml-3" data-toggle="modal" data-target="#addSkillModal">
                <i class="fas fa-plus"></i> Add
              </button>
            </div>
        </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 mt-2">
            <div class="row">
              <div class="col-12 text-center mb-4 bg-primary text-white card-shadow">
                <h4 class="pt-1">Education</h4>
              </div>
            </div>
            <div 
            v-for="eduItem in education"
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
            <div class="text-center">
              <button class="btn btn-primary button-shadow" data-toggle="modal" data-target="#addEducationModal">Add Education</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center mb-3 bg-primary text-white card-shadow">
            <h4 class="pt-1">Employment</h4>
          </div>
          <div class="col-12 mt-2">
            <div 
            v-for="empItem in employment" 
            :key="empItem.key"
            class="row mb-3 mx-0 border card-shadow">
              <div class="col-12">
                <div class="row">
                  <div class="col-8 font-weight-bold">{{ empItem.employer }}</div>
                  <div class="col-4 text-right font-italic nowrap">{{ empItem.city }}, {{empItem.state}}</div>
                </div>
                <div class="row mt-2 text-center">
                  <div class="col-12" style="font-weight: 600">
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
            <div class="text-center">
              <button class="btn btn-primary button-shadow" data-toggle="modal" data-target="#addEmploymentModal">Add Employer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <edit-skill-modal></edit-skill-modal>
  </div>
</template>

<script>
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/css/vue-popper.css'
import moment from 'moment'
import EditSkillModal from './EditSkillModal'
export default {
  data () {
    return {
      infoSaved: false,
      firstName: '',
      lastName: '',
      title: '',
      avatarUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMwMHB4IiB3aWR0aD0iMzAwcHgiIHZlcnNpb249IjEuMCIgdmlld0JveD0iLTMwMCAtMzAwIDYwMCA2MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIHN0cm9rZT0iI0FBQSIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMjgwIiBmaWxsPSIjRkZGIi8+Cjx0ZXh0IHN0eWxlPSJsZXR0ZXItc3BhY2luZzoxO3RleHQtYW5jaG9yOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcjtzdHJva2Utb3BhY2l0eTouNTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MjtmaWxsOiM0NDQ7Zm9udC1zaXplOjM2MHB4O2ZvbnQtZmFtaWx5OkJpdHN0cmVhbSBWZXJhIFNhbnMsTGliZXJhdGlvbiBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxMjUlO3dyaXRpbmctbW9kZTpsci10YjsiIHRyYW5zZm9ybT0ic2NhbGUoLjIpIj4KPHRzcGFuIHk9Ii00MCIgeD0iOCI+Tk8gSU1BR0U8L3RzcGFuPgo8dHNwYW4geT0iNDAwIiB4PSI4Ij5BVkFJTEFCTEU8L3RzcGFuPgo8L3RleHQ+Cjwvc3ZnPg==',
      avatar: '',
      email: '',
      twitterUrl: '',
      facebookUrl: '',
      instagramUrl: '',
      linkedInUrl: '',
      websiteUrl: '',
      isEditable: false,
      skillID: '',
      emailAlert: false,
      dateCreated: moment().format('YYYY[-]MM[-]DD')
    }
  },
  watch: {
    
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    skills: function () {
      return this.$store.getters.getSkills
    },
    education: function () {
      return this.$store.getters.getEducation
    },
    employment: function () {
      return this.$store.getters.getEmployment
    },
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    onKeyUp () {
      this.infoSaved = false
    },
    savePersonalInfo () {
      console.log("savePersonalInfo was called")
      this.infoSaved = true

      const personalInfoItems = {
        firstName: this.firstName,
        lastName: this.lastName,
        title: this.title,
        avatarUrl: this.avatarUrl,
        email: this.email,
        twitterUrl: this.twitterUrl,
        facebookUrl: this.facebookUrl,
        instagramUrl: this.instagramUrl,
        linkedInUrl: this.linkedInUrl,
        websiteUrl: this.websiteUrl
      }

      this.$store.dispatch('setPersonalInfo', personalInfoItems)
    },
    emailIsValid () {
      console.log("emailIsValid was called")

      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
        this.emailAlert = false
      } else {
        this.emailAlert = true
      }
    },
    skillCardsEditable () {
      this.isEditable = !this.isEditable
    },
    sendID (id) {
      this.$store.dispatch('setSkillEditing', id)
      console.log("sent id " + id)
    },
    onFilePicked (event) {
      this.infoSaved = false

      const files = event.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
        console.log('Please add a valid file.')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.avatarUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.avatar = files[0]
    }
  },
  components: {
    EditSkillModal,
    'popper': Popper
  }
}

</script>

<style lang="scss">
    .outline-main {
    border: 1px solid #E5E5E5;
    padding-bottom: 20px;
    }

    .button-shadow:hover,
    .button-shadow:active,
    .button-shadow:focus,
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
    .box {
    width: 10rem;
    position: relative;
    right: 3px;
    background: #EEE;
    z-index: 5;
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
    @-webkit-keyframes wiggle
    {
        0% {-webkit-transform: rotateZ(2deg);}
        50% {-webkit-transform: rotateZ(-2deg);}
        100% {-webkit-transform: rotateZ(2deg);}
    }
    @-moz-keyframes wiggle
    {
        0% {-moz-transform: rotateZ(2deg);}
        50% {-moz-transform: rotateZ(-2deg);}
        100% {-moz-transform: rotateZ(2deg);}
    }
    @-o-keyframes wiggle
    {
        0% {-o-transform: rotateZ(2deg);}
        50% {-o-transform: rotateZ(-2deg);}
        100% {-o-transform: rotateZ(2deg);}
    }
    @keyframes wiggle
    {
        0% {transform: rotateZ(2deg);}
        50% {transform: rotateZ(-2deg);}
        100% {transform: rotateZ(2deg);}
    }

    .jiggle {
        -webkit-animation: wiggle 0.2s ease infinite;
        -moz-animation: wiggle 0.2s ease infinite;
        -o-animation: wiggle 0.2s ease infinite;
        animation: wiggle 0.2s ease infinite;
    }
    .clickable {
      cursor: pointer;
    }
    .required {
        border: 2px solid red;
        border-radius: 5px;
        animation: blinker 1 ease-in-out 1;
    }

    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
</style>

