<template>
  <div class="container">
      <div class="modal fade" id="addEducationModal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content" role="document">
            <div class="modal-header py-1 bg-primary text-white border-primary">
              <div class="modal-title pt-2" id="modalLabel">
                <h4>Add Education</h4>
              </div>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Organization</span>
                    </div>
                    <input v-model="organization" type="text" class="form-control">
                  </div>
                  <div class="row my-3">
                    <div class="col">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">Degree
                            </span>
                        </div>
                        <input v-model="degree" type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="row my-3">
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
                      {{ state }}
                    </div>
                  </div>

                  <div class="row my-3">
                    <div class="col-6">
                      <select v-model="fromYear" class="custom-select">
                        <option value="null" selected disabled>From</option>
                        <option v-for="year in yearsArray()" :key="year.key" :value="year">{{ year }}</option>
                        </select>
                    </div>
                    <div class="col-6">
                      <select v-model="toYear" class="custom-select">
                        <option value="null" selected disabled>To</option>
                        <option v-for="year in yearsArray()" :key="year.key">{{ year }}</option>
                        </select>
                    </div>
                  </div>
                  <p v-if="keepToYearHigher" class="text-center" style="color:red;">{{ keepToYearHigher }}</p>
                  <div class="row my-3">
                    <div class="col">
                      <select v-model="completed" class="custom-select">
                        <option value="null" disabled selected>Completed?</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                      </select>
                      {{ completed }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <a 
                href="#" 
                @click="clearValues"
                class="btn btn-danger ml-3"
                data-toggle="modal"
                data-target="#educationModal">Cancel</a>
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
              states: [
                "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",  
                "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",  
                "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",  
                "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",  
                "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"
              ],
              organization: '',
              degree: '',
              city: '',
              state: '',
              fromYear: null,
              toYear: null,
              completed: null
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
          clearValues () {
            this.organization = '',
            this.degree = '',
            this.city = '',
            this.state = '',
            this.fromYear = null,
            this.toYear = null,
            this.completed = null
            console.log("clear values was called")
          }
      },
      created() {

      }
  }


</script>
