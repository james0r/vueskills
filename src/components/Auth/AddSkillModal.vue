<template>
    <div class="row">
        <div class="modal fade" id="addSkillModal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content" role="document">
                <div class="modal-header py-1 bg-primary text-white border-primary">
                <div class="modal-title pt-2" id="modalLabel">
                    <h4>New Skill</h4>
                </div>
                </div>
                <div class="modal-body">
                <div class="row">
                    <div class="col-8 offset-2 text-center">
                        <div class="my-3">
                            <v-select v-model="selected" :options="[
                            'Javascript',
                            'Node.js',
                            'Vue.js',
                            'PHP',
                            'Webpack'
                            ]"></v-select>
                        </div>
                    <form>
                        <div class="form-group">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option selected>Rate your ability</option>
                            <option>1 (Weakest)</option>
                            <option>1.5</option>
                            <option>2</option>
                            <option>2.5</option>
                            <option>3</option>
                            <option>3.5</option>
                            <option>4</option>
                            <option>4.5</option>
                            <option>5 (Strongest)</option>
                        </select>
                        </div>
                        <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Optional Notes"></textarea>
                        </div>
                        <div class="btn-groupmb-2">
                        <label class="btn btn-primary">
                            <input type="checkbox" name="field" value="NO"> Strongest
                        </label>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn btn-danger ml-3">Cancel</a>
                    <a href="#" class="btn btn-primary ml-3">Register</a>
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
              selected: ''
          }
      }
  }
</script>
