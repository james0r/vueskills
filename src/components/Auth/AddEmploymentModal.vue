<template>
<div class="modal fade" id="addEmploymentModal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" role="document">
      <div class="modal-header py-1 bg-primary text-white border-primary">
        <div class="modal-title pt-2" id="modalLabel">
          <h4>Add Employment</h4>
        </div>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col">
            <div class="row mb-3">
              <div class="col">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">Employer</span>
                  </div>
                  <input v-model="employer" type="text" class="form-control">
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">Job Title</span>
                  </div>
                  <input v-model="jobTitle" type="text" class="form-control">
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-8">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">City</span>
                  </div>
                  <input v-model="city" type="text" class="form-control">
                </div>
              </div>
              <div class="col-4">
                <select v-model="state" class="custom-select" placeholder="State">
                  <option value="" selected disabled>State</option>
                  <option v-for="state in states" :key="state.key">{{ state }}</option>
                </select>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-6">
                <select v-model="fromYear" class="custom-select" placeholder="From">
                  <option value="null" selected disabled>From</option>
                  <option v-for="year in yearsArray()" :key="year.key" :value="year">{{ year }}</option>
                </select>
              </div>
              <div class="col-6">
                <select v-model="toYear" class="custom-select" placeholder="From">
                  <option value="null" selected disabled>To</option>
                  <option v-for="year in yearsArray()" :key="year.key">{{ year }}</option>
                </select>
              </div>
            </div>
            <p v-if="keepToYearHigher" class="text-center" style="color:red;">{{ keepToYearHigher }}</p>
            <div class="row mb-3">
              <div class="col">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">Achievement 1</span>
                  </div>
                  <input v-model="ach1" type="text" class="form-control">
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">Achievement 2</span>
                  </div>
                  <input v-model="ach2" type="text" class="form-control">
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">Achievement 3</span>
                  </div>
                  <input v-model="ach3" type="text" class="form-control">
                </div>
              </div>
            </div>
            <p v-if="requiredAlert" class="text-center" style="color: red">Complete All Required Fields</p>
          </div>
        </div>
        <div class="modal-footer">
          <a href="#" 
          @click="clearValues" 
          class="btn btn-danger ml-3" 
          data-toggle="modal" 
          data-target="#addEmploymentModal">Cancel</a>
          <a href="#" 
          @click="save"
          data-toggle="modal" 
          data-target="#addEmploymentModal"
          class="btn btn-primary ml-2 px-3">Save</a>
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
              states: [
                "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",  
                "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",  
                "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",  
                "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",  
                "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"
              ],
              id: '',
              employer: '',
              jobTitle: '',
              city: '',
              state: '',
              ach1: '',
              ach2: '',
              ach3: '',
              fromYear: null,
              toYear: null,
              requiredAlert: null
          }
      },
      computed: {
          keepToYearHigher () {
              if (this.toYear <= this.fromYear && this.fromYear !== null && this.toYear !== null) {
                  return 'Invalid year range.'
              }
          }
      },
      methods: {
            yearsArray() {
              let years = []
              for (let i = 1950; i < 2019 ; i++) {
                  years.push(i)
              }
              return years;
            },
            save () {
            if (this.employer == '' ||
                this.jobTitle == '' ||
                this.city == '' ||
                this.state == '' ||
                this.fromYear == null ||
                this.toYear == null) {
                  this.requiredAlert = true
                  return
                  //Dispatch info
                } else {
                  this.requiredAlert = false
                  let employmentItem = {
                    id: this.makeid(),  
                    employer: this.employer,
                    jobTitle: this.jobTitle,
                    city: this.city,
                    state: this.state,
                    fromYear: this.fromYear,
                    toYear: this.toYear,
                    ach1: this.ach1,
                    ach2: this.ach2,
                    ach3: this.ach3
                  }
                  this.$store.dispatch('setEmployment', employmentItem)
                  this.clearValues()
                }
          },
            clearValues () {
                this.employer = '',
                this.jobTitle = '',
                this.city = '',
                this.state = '',
                this.fromYear = null,
                this.toYear = null,
                this.ach1 = '',
                this.ach2 = '',
                this.ach3 = ''

            },
             makeid() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 10; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            }
      },
      created() {

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
