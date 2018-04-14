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
              <input type="text" class="form-control" placeholder="Jane">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">Last Name</span>
              </div>
              <input type="text" class="form-control" placeholder="Doe">
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Title</span>
            </div>
            <input type="text" class="form-control" placeholder="Enter a title that will appear under your name in candidate listings.">
          </div>
          <div class="input-group mb-3">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile02">
              <label class="custom-file-label" for="inputGroupFile02">Choose Avatar File</label>
            </div>
            <div class="input-group-append">
              <span class="input-group-text" id="">Upload</span>
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Email</span>
            </div>
            <input type="text" class="form-control" placeholder="example@example.com">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Twitter Handle</span>
            </div>
            <input type="text" class="form-control" placeholder="@handle">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Facebook URL</span>
            </div>
            <input type="text" class="form-control" placeholder="www.facebook.com/me">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Instagram URL</span>
            </div>
            <input type="text" class="form-control" placeholder="www.instagram.com/me">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">LinkedIn URL</span>
            </div>
            <input type="text" class="form-control" placeholder="www.linkedin.com/me">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Website</span>
            </div>
            <input type="text" class="form-control" placeholder="www.mywebsite.com">
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
            <div class="card border-primary mb-3 mx-2" style="width: 12rem;">
              <div class="card-header text-center">Javascript
                <i class="fab fa-js"></i>
              </div>
              <div class="card-body text-primary pt-3 pb-2">
                <h5 class="card-title text-center">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half"></i>
                </h5>
              </div>
            </div>
            <div class="card border-primary mb-3 mx-2" style="width: 12rem;">
              <div class="card-header text-center">Node.js
                <i class="fab fa-node-js"></i>
              </div>
              <div class="card-body text-primary pt-3 pb-2">
                <h5 class="card-title text-center">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half"></i>
                </h5>
              </div>
            </div>
            <div class="card border-primary mb-3 mx-2" style="width: 12rem;">
              <div class="card-header text-center">Vue.js
                <i class="fab fa-vuejs"></i>
              </div>
              <div class="card-body text-primary pt-3 pb-2">
                <h5 class="card-title text-center">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </h5>
              </div>
            </div>
            <div class="card border-primary mb-3 mx-2" style="width: 12rem;">
              <div class="card-header text-center">React
                <i class="fab fa-react"></i>
              </div>
              <div class="card-body text-primary pt-3 pb-2">
                <h5 class="card-title text-center">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </h5>
              </div>
            </div>
            <div class="card border-primary mb-3 mx-2" style="width: 12rem;">
              <div class="card-header text-center">PHP
                <i class="fab fa-php"></i>
              </div>
              <div class="card-body text-primary pt-3 pb-2">
                <h5 class="card-title text-center">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </h5>
              </div>
            </div>
          </div>
          <div class="text-center mb-3">
            <button class="btn btn-primary button-shadow" data-toggle="modal" data-target="#addSkillModal">Add Skill</button>
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
</div>

</template>

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
</style>

<script>
    export default {
        
    }

</script>
