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
                            v-model="skillLoaded.name" 
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
                            v-model="skillLoaded.stars" 
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
                        v-model="skillLoaded.notes" 
                        class="form-control" 
                        rows="3" 
                        placeholder="Optional Notes"></textarea>
                        </div>
                        <div class="btn-groupmb-2">
                        <label class="btn btn-primary">
                            <input 
                            v-model="skillLoaded.strongestSkill" 
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
                    @click="deleteSkill(skillID)"
                    data-toggle="modal" 
                    data-target="#editSkillModal">Delete</a>
                    <a 
                    href="#" 
                    class="btn btn-info ml-2"
                    data-toggle="modal" 
                    data-target="#editSkillModal">Cancel</a>
                    <a href="#" 
                    class="btn bg-primary text-white ml-2 px-3" 
                    @click="updateSkill"
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
              strongestSkill: false
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
        computed: {
            userID () {
                return this.$store.getters.getUserID
            }
        },
        methods: {
            deleteSkill (id) {
                console.log("detete skill called with id: " + id)
                let newSkills = this.$store.getters.user.skills.filter(skill => skill.id !== id)

                this.$store.dispatch('updateSkills', newSkills)

            },
            fetchSkill (skillID) {
                this.$store.dispatch('setLoading', true)
                console.log("fetchSkill called with skill ID of: " + skillID)
                let db = firebase.database()
                let ref = db.ref('/profiles/' + userID)
                ref.once('value')
                .then(data => {

                let dataVal = data.val()
                
                let builtData = {}
                
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
                console.log(builtData)
                this.userData = builtData
            })
            .catch(error => {
                console.log("error thrown" + error)
                this.$store.dispatch('setLoading', false)
            })
            },
        }
    }
</script>

<style scoped>

</style>

