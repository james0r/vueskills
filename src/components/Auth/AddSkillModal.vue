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
                    :class="{ disabled: fieldsNotFilled}"
                    @click="save"
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
    export default {
        data: function() {
            return {
              techSelected: '',
              ratingSelected: 0,
              skillNotes: '',
              strongestSkill: false,
              techRequired: false,
              ratingRequired: false,
              modalShown: null,
              requiredAlert: false
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
            clearValues () {
                this.techSelected = '',
                this.ratingSelected = 0,
                this.skillNotes = '',
                this.strongestSkill = false

                setTimeout
            },
            save () {
                if (this.techSelected == '') {
                    this.techRequired = true
                    return;
                }
                if (this.ratingSelected == 0) {
                    this.ratingRequired = true
                    return;
                }
                if (this.strongestSkill) {
                    this.user.skills.map(function(currentValue) {
                        currentValue.strongestSkill = false
                    })
                }

                const skillData = {
                    id: this.makeid(),
                    name: this.techSelected,
                    stars: this.ratingSelected,
                    notes: this.skillNotes,
                    strongestSkill: this.strongestSkill
                }
                this.$store.dispatch('setSkill', skillData)

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

