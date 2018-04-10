<template>
  <div class="container">
      <div class="modal fade" id="educationModal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content" role="document">
            <div class="modal-header py-1 bg-primary text-white border-primary">
              <div class="modal-title pt-2" id="modalLabel">
                <h4>New Education</h4>
              </div>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="">Organization</span>
                    </div>
                    <input type="text" class="form-control">
                  </div>
                  <div class="row my-3">
                    <div class="col">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">Degree
                            </span>
                        </div>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="row my-3">
                    <div class="col-8">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">City</span>
                        </div>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-4">
                      <select class="custom-select">
                        <option selected>State</option>
                        <option v-for="state in states" :key="state.key">{{ state }}</option>
                      </select>
                    </div>
                  </div>

                  <div class="row my-3">
                    <div class="col-6">
                      <select id="from-dropdown" class="custom-select">
                        <option selected>From</option>
                        <option v-for="year in yearsArray()" :key="year.key">{{ year }}</option>

                      </select>
                    </div>
                    <div class="col-6">
                      <select id="to-dropdown" class="custom-select">
                        <option selected>To</option>
                        <option v-for="year in yearsArray()" :key="year.key">{{ year }}</option>

                      </select>
                    </div>
                  </div>
                  <div class="row my-3">
                    <div class="col">
                      <select class="custom-select">
                        <option selected>Completed?</option>
                        <option value="1">No</option>
                        <option value="2">Yes</option>
                      </select>
                    </div>
                  </div>
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
              states: [
                "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",  
                "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",  
                "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",  
                "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",  
                "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"
              ]
          }
      },
      methods: {
          yearsArray() {
              let years = []
              for (let i = 1950; i < 2019 ; i++) {
                  years.push(i)
              }
              return years;
          }
      },
      created() {

      }
  }


</script>
