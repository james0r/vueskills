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
              <input type="text" class="form-control" placeholder="Jane">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">Last Name</span>
              </div>
              <input type="text" class="form-control" placeholder="Doe">
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Title</span>
            </div>
            <input type="text" class="form-control" placeholder="Enter a title that will appear under your name in candidate listings.">
          </div>
          <div class="input-group mb-3">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile02">
              <label class="custom-file-label" for="inputGroupFile02">Choose Avatar File</label>
            </div>
            <div class="input-group-append">
              <span class="input-group-text" id="">Upload</span>
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Email</span>
            </div>
            <input type="text" class="form-control" placeholder="example@example.com">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Twitter Handle</span>
            </div>
            <input type="text" class="form-control" placeholder="@handle">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Facebook URL</span>
            </div>
            <input type="text" class="form-control" placeholder="www.facebook.com/me">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Instagram URL</span>
            </div>
            <input type="text" class="form-control" placeholder="www.instagram.com/me">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">LinkedIn URL</span>
            </div>
            <input type="text" class="form-control" placeholder="www.linkedin.com/me">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Website</span>
            </div>
            <input type="text" class="form-control" placeholder="www.mywebsite.com">
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
            <div class="row mb-3 mx-0 border card-shadow">
              <div class="col-12">
                <div class="row">
                  <div class="col-8 font-weight-bold">University of Southern California</div>
                  <div class="col-4 text-right font-italic nowrap">Los Angeles, CA</div>
                </div>
                <div class="row mt-2 text-center">
                  <div class="col-12">
                    Bachelor of Science in Computer Science
                  </div>
                </div>
                <div class="row mb-2 text-center">
                  <div class="col-12">
                    2010 - 2014
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
import EditSkillModal from './EditSkillModal'
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      title: '',
      avatarUrl: '',
      email: '',
      twitterUrl: '',
      facebookUrl: '',
      instagramUrl: '',
      linkedInUrl: '',
      websiteUrl: '',
      isEditable: false,
      skillID: ''
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
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    skillCardsEditable () {
      this.isEditable = !this.isEditable
    },
    sendID (id) {
      this.$store.dispatch('setSkillEditing', id)
      console.log("sent id " + id)
    }
  },
  components: {
    EditSkillModal
  }
}

</script>

<style lang="scss">
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
</style>

