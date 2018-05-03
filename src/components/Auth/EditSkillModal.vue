<template>
    <div class="row">
        <div
        class="modal fade show" 
        id="editSkillModal" 
        role="dialog" 
        aria-labelledby="modalLabel" 
        aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content" role="document">
                <div class="modal-header py-1 bg-primary text-white border-primary">
                <div class="modal-title pt-2" id="modalLabel">
                    <h4>Edit Skill</h4>
                </div> 
                </div>
                <div class="modal-body">
                <div class="row">
                    <div class="col-8 offset-2 text-center">
                        <div class="my-3">
                            <v-select 
                            placeholder="Choose a technology" 
                            v-model="skillObj.name" 
                            :options="[
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
                            v-model="skillObj.stars" 
                            class="form-control">
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
                        <textarea 
                        v-model="skillObj.notes" 
                        class="form-control" 
                        rows="3" 
                        placeholder="Optional Notes"></textarea>
                        </div>
                        <div class="btn-groupmb-2">
                        <label class="btn btn-primary">
                            <input 
                            v-model="skillObj.strongestSkill" 
                            type="checkbox" 
                            name="field" 
                            value="NO"> Strongest
                        </label>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="#" 
                    class="btn btn-danger mr-auto" 
                    @click="deleteSkill(skillObj.id)"
                    data-toggle="modal" 
                    data-target="#editSkillModal">Delete</a>
                    <a 
                    href="#" 
                    class="btn btn-info ml-2"
                    data-toggle="modal" 
                    data-target="#editSkillModal">Cancel</a>
                    <a href="#" 
                    class="btn bg-primary text-white ml-2 px-3" 
                    @click="save"
                    data-toggle="modal" 
                    data-target="#editSkillModal">Save</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase'
    export default {
        data: function() {
            return {
              id: '',
              name: '',
              stars: 0,
              notes: '',
              strongestSkill: false,
              skillObj: {
                  icon: '',
                  id: '',
                  name: '',
                  notes: '',
                  stars: "",
                  strongestSkill: false
              }
            }
        },
        mounted () {
            this.$bus.$on('skillEditing', ($event) => {
            console.log('ID of skill being edited is: ', $event)
            this.id = $event
            this.fetchSkill($event)
            })
            console.log("EditSkillModal has been mounted")
        },
        destroyed () {
            this.$bus.$off('skillEditing', ($event) => {
            console.log($event)
            })
        },
        computed: {
 
        },
        methods: {
            clearStrongest (userID, current) {
                console.log("clearStrongest() was called")
                if (this.skillObj.strongestSkill) {
                   firebase.database()
                   .ref('/profiles/' + userID + '/skills/')
                   .once('value',function(s){
                        var skills = s.val()
                        var newUsers = {}
                        for(var key in skills) {
                            
                            if (key !== current) {
                                firebase.database()
                                .ref('/profiles/' + userID + '/skills/' + key)
                                .update({strongestSkill: false})
                                .catch(error => {
                                    console.log(error)
                                })
                            }
                        }
                    })
                    .then(data => {
                        this.triggerMyEvent()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    this.strongestSkill =  false
                } else {
                    this.triggerMyEvent()
                }
            },
            triggerMyEvent () {
                console.log("triggerEvent called")
                this.$bus.$emit('updateEditProfile', this.$store.getters.getUserID)
            },
            deleteSkill (id) {
                console.log("detete skill called with id: " + id)
                firebase.database()
                .ref('/profiles/' + this.$store.getters.getUserID + '/skills/')
                .child(id).remove()
                .then(data => {
                    this.triggerMyEvent()
                })
            },
            save () {
                firebase.database().ref('/profiles/' + this.$store.getters.getUserID + '/skills/' + this.id).update({
                    icon: this.skillObj.icon,
                    id: this.skillObj.id,
                    name: this.skillObj.name,
                    notes: this.skillObj.notes,
                    stars: this.skillObj.stars,
                    strongestSkill: this.skillObj.strongestSkill
                })
                .then(data => {
                    this.clearStrongest(this.$store.getters.getUserID, this.skillObj.id)
                })
                .catch(error => {
                    console.log(error)
                })
            },
            fetchSkill (skillID) {
                // this.$store.dispatch('setLoading', true)
                console.log("fetchSkill called with skill ID of: " + skillID)
                firebase.database().ref('/profiles/' + this.$store.getters.getUserID + '/skills/').once('value')
                .then(data => {

                let skillVal = data.val()
                console.log(skillVal)
                
                    for (let key in skillVal) {
                        if (key == skillID) {
                            console.log("skill found is " + key)
                            firebase.database()
                            .ref('/profiles/' + this.$store.getters.getUserID + '/skills/' + key).once('value')
                            .then(data => {
                                console.log(data.val())
                                this.skillObj = data.val()
                                return
                            })
                        }
                    }
                })
                .catch(error => {
                console.log("Some error occured while iterating through user skills --> " + error)
                this.$store.dispatch('setLoading', false)
                })

                this.$bus.$off('skillEditing', ($event) => {
                    console.log($event)
                })
            },
        }
    }
</script>

<style scoped>

</style>

