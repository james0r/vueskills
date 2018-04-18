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
              <input @keyup="onKeyUp" type="text" v-model="firstName" class="form-control" placeholder="Jane"> {{ firstName}}
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
      avatarUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEXb29vZ2dn////x8fHe3t5YWFjm5ubp6enPz8/g4OBVVVXKysr39/dTU1P6+vpQUFDT09Otra21tbVeXl54eHjExMSPj4+8vLxkZGSkpKRMTEyYmJhqamp9fX2EhISpqamDg4OcnJxFRUVycnKE8xxQAAANP0lEQVR4nO2d2ZriKhCAIZIEiOmgMWu7tOP7v+OpKrIQ25k5auabEVMX3UIKwh+g2MrIgk7WK69k3XMFzOJFgjHGSbp/+GkSw9xLg8okwL4rDCqMrrNJvBtmzg1v5H8z67FQ16kZE/GHQxgzD4Wz1UAYIb6RUtJDxQ9WDCnKMYzXjZxc/6ZufqnOri5fJ/+5OhXuW/Jf5s7jjhABZcKjOEpASaq4F7zAZDSEMRduhmBcwHXjqONNnMtSTtQpdz6qKzlV55h7MoYTzJ2P6pTcUZ/mHieQ3LBB20jWIbJgBY044dhoPzBWroY+uqJKCMY+i2VgYxgJHfW1uVJPsGeMYSJy1OVUHR8Ql2MYCWU0qiMh+xjV5VXuSBhPkzO+RkKwMYkAvFVEdcZV1IuiZjcEI+rMbAjGZqpuk0/VJ+FfqwsyFfEQptxFNAmPN4/YjbuNua8iImQKCFfYerG+rDGc2KyrMLsVnk39zuQ3L3/Ljq0DFkEVroKV+a1tej1ByDhgivEiCHpkj4QnaG1UwKh7r/0DxAYKfVEgITPGwypEuzsQeioL4euLQygL+bdL8ydkJORyFfttaXwdLbwn5N4TvkEdwryNeU2IUzXPCUkWwpcW7nsrBUsjB1u6XnlI6M5LjfRxD+O91haeikvoYy+cECZF4iOj9/PShdAD8Z8w8J2QJ7jB5jOh9RPwmpBkIXxpMdJZH374SBjH4/pQqb9dmj8hzryUlvveCX+v1ZOf8laExndLw03w8bdL8yfE/7XFQvj6slobzwmX0zVPZCF8aTHGeE64/hi9vqSXyyd3feile+l7rS08lXc65eaJ/XaHb+L/zHshfH3xnzCKfF8fLqdrnojXhN63Us7N4Odt1qu/XZw/Icvq6fVlIXx9eav1ofee7J6Oh08QCpD+o3N6DJ9BxLVypyGcVN/D4ltKIdzcxCB3lPNhQlNVVdHdqWia7gu2ihdNWZZNYSYn5nzbnFBDFJCqcu6C4cLRaprKKT3ktoHczpUkSF4NcofFeJRQlG3WZg0Vh1+y9tMSbfc6S9M00/uNk5coQLkEjSJD+RoIPtMsa8PuQYmqhYu582XkzSWk3LK6lIKpTZt18qP53y4HXCYPEu50GIZpQs92p1Mi5GWrQ51mKfxtj2NmotBhCoRim0GisO3rSYZuUJUphLLNUIlfGdwD+CC7bAepG0itU5T2/xM+PPPuCI8uoSqhCNnl3JR7+NBX63fC9GivqIaCWUfIa3gwob70yXaYW142TVm3aa1IXR9KlGNxT098hjBMsXQdoaggSm/RNrBPKF2eDBbCIcwPWte2Japa61L3hGILVXgERGmDkIUOG7Q+QlS7vSXMtupeS/MEoT4C0G4kVAcorW0+guHnc18bE8Kt7loi9M6whpiOUB1TvavSMLWdO8kh902Xg8B3K1nCu+EePeUWSAUYUGc9ocEq7AqgoORje5u00gKezQ6viDLVh2QgZNDHTjyHZBhEHNsHBnmQMI6HnahEqTsJqzbU0HwsoYDnr7+GvtdCG45uESZQUGrAPNfZZiCkRppE8NBabMPUIBBnHACJsIpuDbe/kkfnpUhYxhcoxkl1hCdoYUPDjABQ9/lN69C01IDVJtO1Sdqe8CuFSkcNykRAI80QsNqS4GiBliavQfLNHYiPri2IUIFt0Tm3hPSIh1srNIz90DYljC5gawDigDkUPSG3HVeC9bngC8ygudaYT6ZR0ou1NCGFss87PPCeIxTHFIwLu49QYWUXKkErOhDaS1BRYE0z+D8Q/oAxH7LqRoswRwlPj9XhXbsYHWEBTzWXI+HYSnH0vjVaAGECo0wZnaGRcjHU4RHrTpCJQrMFnTTMkLD5PJ/zgTA7JSj3zJ/dt7fc8xYlS0iDfAY2FfshmAp97Amhs1FTvEEo0JzkfA+JxEBo4IFQH6vhme05U3ttJztoWOqRcKvYncPhw/NSS8gkPN/9BR+7KIAw76DAjBDTTUIyJzCYtslAqE59H9N2HgFT1lD3GbiE944WD7/5oydUZzsRwxG/1vSM8aqBKtDV7VYqBJgTNLVQ6p5QQLWGtRXSxSQw2NrcpnV4pzxLCCZB94QIm1cwz2LyAIZ9NypPCcmchDQqdIQCZjBpaV9ZmUAPrqEgR+zJJ8hN8PyJOnye0E6faeZt0H6mu8/zEWfQepwdXxN2M3Ac9i0hZtIWqs8Zq1/IHBBh3XQuL6Mt1bvjF8odoOu1fI6QMaxEIhRJnSEjWvc0rJx1/zWhQXuCk7quDhVA5F2hBXRhnBsJube5UXa1Ox7q7Pj/CWki8xBh21pCUeVt29q5tPmsYTkHS9T6KJ0y9CtgsYXRDauW1s+UJPmR/ahUksL1PoGB9C3Ss6ZbT2f1Afvqpu3lR3lnY31kFyPZbLoBXSRF0e1ECCWr5nxuKjktAa82G3pN5/Zk9zDMdrO1N6MPfGuv20xA2bZCZYoNDIenQjIKF4Pcu+/50E7UOP2FxzvdTfo+M+7HMNFfGgY1+0EINVEe88bs3Av3b0VRSp93E/3/dt5H0NtSlvjvfekl4PLtPA9k0kp9P10zcfRb9ReU5XTt9WUhfH2JosfWh68jy7fzPBGvCef3vsRTJTZdwU4XxT+PsXE3kjwh3MjR+zJYz5Cj2B4Oh69hn21Dp9Ll56no1+XGxpTnremi+hgQ3I6pus9NxeZgDOb2+uL7TOusP0c0dUauBWnW5icqsDi1XUzWHmgDcYhJUzz7F5chSfjJn2acffWEZzV4BNE9LNr7zsidQmc73J/CzUJ0sMhS+KcbNybLfuAmMXoIYAD/1fe6JHyXuQnxvCGHAnfHbECo99vttsFip7gLLuhEY7vdlPs01OlGDTF0EGp3hPMNJPkK6XTy2RLNvj6stf7MQ32wzRQJd0wJJTaI2FiebAMxyhzxKMcMMd0WGhEaVKjwhK18tkAze1+ix0maQBkz++yJ0P4g0SmzZzGb/iBV0FHOSY0xNgsipCSVe1T+qLjrw4/nvS9Vmep9hEU+USWOhEzh8QZY1JFH4YnjQTh1iLEjoXVXuOfM/pbMPPNWUKRPlWAzpbBLeNTYPR1CPHEKc3vWeE76rWyXsLEHwk/JvISiArNYCbXrD/FdQjwcayZtUtVh2BKhFU1eGCOhKDLnWPlBmZkQGymnPme9oxxCQpsSRtARO0J7pFR+J0z/LUKeQ6uKhMKzbzogdevwdKMOe0K934FcMH7mOuTczPjuSzqgb9ArFg81cbB2CUvoh1u3H5ITQE2EP7E0pxn64awzb0En052Q54lDiE1yakvFVqPrX0c4ZOIQorvOs7bUZjoTIXogkAcTelToC3MJ8bR3Oh5a69qIn46HQuLsaJZN3JkIsZHq3YEEyobn2ZYQFgwKZ6hYrd3ohyeGm5YGdHGrDjGJ2KXX/okPyOR07UlCHKBzu9iLTtafBgkv0siiwUnmnvcm1ZikOrbhyAwxKLwjTIwpNjW0+VY+ScgjNd8bB8hlpHfhhuLXWIch+aKFuJKok34lgc5pGiY0NOscYkANktPagpKgU/T9/jPXMv3NrqcIqS56N5AIGmVakedQN9aFX1QdxGO7a1Y3bBqTfmEdpl0S9Bl+/jWAM64t1BGWdH1ANJmG0Y9b66rr3bl3lylyu4K8HDf2Sxl9DLnlQB2eyYM8rHflLIv8WVdP0vmuhDIS60xF17suQv08hpwS1DeFp+Stzg+9POR+h3OLhfD1xX/C1dpzQv6o9+WLyUL4+uI3Iff9lHs9vEf4Dbwvje9+bb7KexF6/44hEy3ely8pC+Hri/eEPIo8J5z13OIfloXwpcX/d18aOZ7jz+Ax9A/KO71zz1dZCF9fvP8O6cT70vf3CHs6Hi6EHoj/vzxupOeEdojwmpBkIXxp8f47pFyp8XvAq9hDwmV96IEshK8v73TK7e+bsHyfly6Ery/eE/KkmvHbef+m+H4yY2UhfGnx/vwQvS97wkR66fb1Tm8V9FW8J+Tv1Eq5ZMJvS+PraLEQvr54T8jj2HfCpFi+neeFLIQvLTRV61ZPs7z78p+TfrTAn26Sd/0W1msIV0FQcaYCFv/tovwhMetAFYzFAetc2vgo1xE3w39WfYa7rYKPBPrhOmBB936x1SrqhMIi7oP0/iGuhiD9GqQZgpHdlhzDZqpuk1+pM0ed/1rdTMPkRnml7uQmuuSrjyAwCWgGQEiVyE0wCGrxaAzjPZLVEFzhu2gSRx2vqzGMfVrGQxC3g5j5GMJK4latow7XzZh7gLnLMRjhjxGZqTofc/+gB7AewrHs1T/QuOAVuBc+By5NFHdCT5X1oTgiIjGEFREPwdgun8cwEhonORFGozoSGkcdCdUYJkIn92QaxpkYH9WpcHzMnaoc1JWsJLePAp8mIdrfPkOhEo9BeocUlz8Nm+sw+57bdXIzVf/d3ZzL8oa6Ex4Lw/u6pvbiqT21bd/2iHUkyAKRFeosExuME352jS1d7AwY6//za7F5WUV2HX91m++pJ7e6zrK/uY0ZTan7ScRd3x/6/HrllYzG5z+Y4AEqpJKvLwAAAABJRU5ErkJggg==',
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
  created: {
    
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

