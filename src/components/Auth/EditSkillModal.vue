<template>
            <div class="row">
                <div
                class="modal fade" 
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
                                <modal name="hello-world">
                                    test
                                </modal>
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
                                    <option value="0" selected disabled>Rate your ability</option>
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
                                Skill Notes: {{ notes }}
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
                            @click="deleteSkill"
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
    export default {
        data: function() {
            return {
              id: '',
              name: '',
              stars: '',
              notes: '',
              strongestSkill: false
            }
        },
        watch: {
 
        },
        computed: {
            user () {
                return this.$store.getters.user
            },
            skills () {
                return this.$store.getters.user.skills
            },
            skillLoaded () {
                let id = this.$store.getters.getSkillEditing
                let skillToEdit = this.$store.getters.user.skills.filter(skill => skill.id == id)

                if (skillToEdit.length > 0) {

                let skillItems = {
                    name: skillToEdit[0].name,
                    stars: skillToEdit[0].stars,
                    notes: skillToEdit[0].notes,
                    strongestSkill: skillToEdit[0].strongestSkill
                }

                    return skillItems
                } else {
                    
                    return {
                        name: '',
                        stars: '',
                        notes: '',
                        strongestSkill: false
                    }
                }

            }
        },
        methods: {
            clearValues () {

            },
            save () {
                if (this.strongestSkill) {
                    this.skills.map(function(currentValue) {
                        currentValue.strongestSkill = false
                    })
                }

                const skillData = {
                    id: this.id,
                    name: skillLoaded.name,
                    stars: skillLoadeds.stars,
                    notes: skillLoaded.notes,
                    strongestSkill: skillLoaded.strongestSkill
                }
                this.$store.dispatch('setSkill', skillData)

                this.clearValues()
            },
            deleteSkill () {
                let newSkillArr = this.$store.getters.user.skills.filter(skill => skill.id !== this.id)

            },
            updateSkill () {
                //This method takes the skills array from store, removes the matching skill,
                //and replaces it with the updated skill object.
                let id = this.$store.getters.getSkillEditing
                let newSkills = this.$store.getters.user.skills.filter(skill => skill.id !== id)

                if (this.skillLoaded.strongestSkill) {
                    this.user.skills.map(function(currentValue) {
                        currentValue.strongestSkill = false
                    })
                }
                newSkills.push({
                    id: id,
                    icon: this.$store.getters.getTechIcons[this.skillLoaded.name],
                    name: this.skillLoaded.name,
                    stars: this.skillLoaded.stars,
                    notes: this.skillLoaded.notes,
                    strongestSkill: this.skillLoaded.strongestSkill
                })

                this.$store.dispatch('updateSkills', newSkills)
            }
        }
    }
</script>

<style scoped>

</style>

