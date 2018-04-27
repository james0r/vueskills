<template>
    <div class="row">
        <div
        :class="{ in: modalShown }" 
        class="modal fade" 
        id="addSkillModal" 
        role="dialog" 
        aria-labelledby="modalLabel" 
        aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content" role="document">
                <div class="modal-header py-1 bg-primary text-white border-primary">
                <div class="modal-title pt-2" id="modalLabel">
                    <h4>Add Skill</h4>
                </div>
                </div>
                <div class="modal-body">
                <div class="row">
                    <div class="col-8 offset-2 text-center">
                        <div class="my-3">
                            <v-select :class="{required: techRequired}" placeholder="Choose a technology" v-model="techSelected" :options="[
                            'Angular',
                            'Apache',
                            'AWS',
                            'C#',
                            'C++',
                            'CSS',
                            'Django',
                            'Git',
                            'Gulp',
                            'HTML5',
                            'Illustrator',
                            'Java',
                            'Javascript',
                            'jQuery',
                            'LESS',
                            'Linux',
                            'Mac',
                            'MongoDB',
                            'MySQL',
                            'NGINX',
                            'Node.js',
                            'Photoshop',
                            'PHP',
                            'Python',
                            'React',
                            'Ruby',
                            'Sass',
                            'Typescript',
                            'Vue.js',
                            'Webpack',
                            'Windows',
                            'Wordpress'
                            ]"></v-select>
                        </div>
                    <form>
                        <div class="form-group">
                        <select 
                            placeholder="Rate your ability"
                            v-model="ratingSelected" 
                            class="form-control" 
                            :class="{required: ratingRequired}">
                            <option value=0 selected disabled>Rate your ability</option>
                            <option value=1>1 (Weakest)</option>
                            <option value=1.5>1.5</option>
                            <option value=2>2</option>
                            <option value=2.5>2.5</option>
                            <option value=3>3</option>
                            <option value=3.5>3.5</option>
                            <option value=4>4</option>
                            <option value=4.5>4.5</option>
                            <option value=5>5 (Strongest)</option>
                        </select>
                        </div>
                        <div class="form-group">
                        <textarea v-model="skillNotes" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Optional Notes"></textarea>
                        </div>
                        <div class="btn-groupmb-2">
                        <label class="btn btn-primary">
                            <input v-model="strongestSkill" type="checkbox" name="field" value="NO"> Strongest
                        </label>
                        <p v-if="requiredAlert" class="text-center" style="color: red">Complete All Required Fields</p>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <a 
                    href="#" 
                    class="btn btn-danger ml-3"
                    @click="clearValues" 
                    data-toggle="modal" 
                    data-target="#addSkillModal">Cancel</a>
                    <a href="#" 
                    class="btn btn-primary ml-3 px-3" 
                    :class="{ disabled: fieldsNotFilled }"
                    @click="save(userID)"
                    data-toggle="modal" 
                    data-target="#addSkillModal">Save</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase'
import store from '../../store'
    export default {
        data: function() {
            return {
                store,
              techSelected: '',
              ratingSelected: 0,
              skillNotes: '',
              strongestSkill: false,
              techRequired: false,
              ratingRequired: false,
              modalShown: null,
              requiredAlert: false,
              techIcons: 
                        {
                            'Javascript': 'devicon-javascript-plain',
                            'PHP': 'devicon-php-plain',
                            'Python': 'devicon-python-plain',
                            'C#': 'devicon-csharp-plain',
                            'Webpack': 'devicon-webpack-plain',
                            'Sass': 'devicon-sass-plain',
                            'HTML5': 'devicon-html5-plain',
                            'Gulp': 'devicon-gulp-plain',
                            'Java': 'devicon-java-plain',
                            'C++': 'devicon-cplusplus-plain',
                            'Ruby': 'devicon-ruby-plain',
                            'Windows': 'devicon-windows8-plain',
                            'Linux': 'devicon-linux-plain',
                            'Mac': 'devicon-apple-plain',
                            'AWS': 'devicon-amazonwebservices-original',
                            'Apache': 'devicon-apache-plain',
                            'Photoshop': 'devicon-photoshop-plain',
                            'Illustrator': 'devicon-illustrator-plain',
                            'Vue.js': 'devicon-vuejs-plain',
                            'React': 'devicon-react-plain',
                            'Angular': 'devicon-angularjs-plain',
                            'Django': 'devicon-django-plain',
                            'CSS': 'devicon-css3-plain',
                            'Git': 'devicon-git-plain',
                            'jQuery': 'devicon-jquery-plain',
                            'MongoDB': 'devicon-mongodb-plain',
                            'Node.js': 'devicon-mongodb-plain',
                            'MySQL': 'devicon-mysql-plain',
                            'NGINX': 'devicon-nginx-plain',
                            'Wordpress': 'devicon-wordpress-plain',
                            'Typescript': 'devicon-typescript-plain'
                        }
            }
        },
        watch: {
            techRequired: function (val) {
                if (val) {
                    var self = this;
                    setTimeout( function () {
                        self.techRequired = false
                    }, 1000)
                }
            },
            ratingRequired: function (val) {
                if (val) {
                    var self = this;
                    setTimeout( function () {
                        self.ratingRequired = false
                    }, 1000)
                }
            }
        },
        computed: {
            userID () {
                return this.$store.getters.getUserID
            },
            user () {
                return this.$store.getters.user
            },
            fieldsNotFilled () {
            if (this.techSelected == '' ||
                this.ratingSelected == 0) {
                  this.requiredAlert = true
                return true
                } else {
                  this.requiredAlert = false
                  return false
                }
          }
        },
        methods: {
            clearStrongest (userID, current) {
                if (this.strongestSkill) {
                   firebase.database()
                   .ref('/profiles/' + userID + '/skills/')
                   .once('value',function(s){
                        var skills = s.val()
                        var newUsers = {}
                        for(var key in skills) {
                            
                            if (key !== current) {
                                console.log("non current keys " + key)
                                firebase.database()
                                .ref('/profiles/' + userID + '/skills/' + key)
                                .update({strongestSkill: false})
                                .catch(error => {
                                    console.log(error)
                                })
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    this.strongestSkill =  false
                }
            },
            clearValues () {
                this.techSelected = '',
                this.ratingSelected = 0,
                this.skillNotes = ''
            },
            save (userID) {
                if (this.techSelected == '') {
                    this.techRequired = true
                    return;
                }
                if (this.ratingSelected == 0) {
                    this.ratingRequired = true
                    return;
                }
               

                const skillData = {
                    id: this.makeid(),
                    name: this.techSelected,
                    stars: this.ratingSelected,
                    notes: this.skillNotes,
                    strongestSkill: this.strongestSkill,
                    icon: this.techIcons[this.techSelected]
                }
                //Firebase push call here
                console.log("right before pushing, the strongestSkill is " + this.strongestSkill)
                firebase.database().ref('/profiles/' + userID + '/skills/').push(skillData)
                .then(data => {
                    console.log("data.key is  " + data.key)
                    this.clearStrongest(this.$store.getters.getUserID, data.key)
                })

                console.log("right before pushing, the strongestSkill is " + this.strongestSkill)
                this.$store.dispatch('triggerFetch')
                this.clearValues()
            },
            cancel () {
                console.log("cancel was called")
                this.modalShown = true
            },
            makeid() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 10; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            }

        }
    }
</script>

<style scoped>
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

