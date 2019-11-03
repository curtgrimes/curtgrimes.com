<template>
  <footer id="contact" class="bg-primary">
    <div class="container py-6">
      <div class="col-md-11 col-lg-9 mx-auto">
        <div class="row">
          <div class="col-md-5">
            <h2 class="text-white">
              Contact
              <br class="d-none d-sm-block" />Curt Grimes
            </h2>
          </div>
          <div class="col-md-7 mt-2">
            <div class="row">
              <div class="col-sm-3 font-weight-bold">Email</div>
              <div class="col-auto">
                <a href="mailto:curt@curtgrimes.com" class="text-secondary">
                  <fa icon="envelope" fixed-width class="mr-2" />curt@curtgrimes.com
                </a>
              </div>
              <div class="w-100 mb-3 mb-sm-1"></div>
              <div class="col-sm-3 font-weight-bold">LinkedIn</div>
              <div class="col-auto">
                <a href="https://linkedin.com/in/curtgrimes" class="text-secondary">
                  <fa :icon="['fab','linkedin-in']" fixed-width class="mr-2" />curtgrimes
                </a>
              </div>
              <div class="w-100 mb-3 mb-sm-1"></div>
              <div class="col-sm-3 font-weight-bold">GitHub</div>
              <div class="col-auto">
                <a href="https://github.com/curtgrimes" class="text-secondary">
                  <fa :icon="['fab','github']" fixed-width class="mr-2" />curtgrimes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
