<template>
  <div class="row g-0 app-auth-wrapper">
    <div class="col-12 col-md-12 col-lg-12 auth-main-col text-center p-5">
      <div class="d-flex flex-column align-content-end">
        <div class="app-auth-body mx-auto">
          <div class="app-auth-branding mb-4">
            <a class="app-logo" href="index.html"
              ><img class="logo-icon me-2" src="img/web/app-logo.svg" alt="logo"
            /></a>
          </div>
          <h2 class="auth-heading text-center mb-5" v-show="!showReg">
            Mr.Changay
          </h2>
          <h2 class="auth-heading text-center mb-5" v-show="showReg">
            Sign up to Portal
          </h2>
          <div class="auth-form-container text-start" v-show="!showReg">
            <form class="auth-form login-form">
              <div class="email mb-3">
                <label class="sr-only" for="signin-email">Email</label>
                <input
                  id="signin-email"
                  name="signin-email"
                  type="email"
                  class="form-control signin-email"
                  placeholder="Email address"
                  required="required"
                  v-model="email"
                />
              </div>
              <!--//form-group-->
              <div class="password mb-3">
                <label class="sr-only" for="signin-password">Password</label>
                <input
                  id="signin-password"
                  name="signin-password"
                  type="password"
                  class="form-control signin-password"
                  placeholder="Password"
                  required="required"
                  v-model="password"
                />
                <div class="extra mt-3 row justify-content-between">
                  <div class="col-6">
                    <!--  <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="RememberPassword"
                      />
                      <label class="form-check-label" for="RememberPassword">
                        Remember me
                      </label>
                    </div> -->
                  </div>
                  <!--//col-6-->
                 <!-- <div class="col-6">
                    <div class="forgot-password text-end">
                      <a href="reset-password.html">Forgot password?</a>
                    </div>
                  </div> -->
                  <!--//col-6-->
                </div>
                <!--//extra-->
              </div>
              <!--//form-group-->
              <div class="text-center">
                <button
                  type="button"
                  @click="login"
                  class="btn app-btn-primary w-100 theme-btn mx-auto"
                >
                  Log In
                </button>
              </div>
            </form>

            <div class="auth-option text-center pt-5">
              No Account? Sign up
              <a class="text-link" @click="showReg = !showReg">here</a>.
            </div>
          </div>
          <div class="auth-form-container text-start mx-auto" v-show="showReg">
            <form class="auth-form auth-signup-form">
              <div class="email mb-3">
                <label class="sr-only" for="signup-email">Your Name</label>
                <input
                  id="signup-name"
                  name="signup-name"
                  type="text"
                  class="form-control signup-name"
                  placeholder="Full name"
                  required="required"
                  v-model="name"
                />
              </div>
              <div class="email mb-3">
                <label class="sr-only" for="signup-email">Your Email</label>
                <input
                  id="signup-email"
                  name="signup-email"
                  type="email"
                  class="form-control signup-email"
                  placeholder="Email"
                  required="required"
                  v-model="signupEmail"
                />
              </div>
              <div class="password mb-3">
                <label class="sr-only" for="signup-password">Password</label>
                <input
                  id="signup-password"
                  name="signup-password"
                  type="password"
                  class="form-control signup-password"
                  placeholder="Create a password"
                  required="required"
                  v-model="signupPassword"
                />
              </div>
                <div class="password mb-3">
                <label class="sr-only" for="signup-password">Password</label>
                <input
                  id="signup-password1"
                  name="signup-password"
                  type="password"
                  class="form-control signup-password"
                  placeholder="Confirm password"
                  required="required"
                  v-model="cPassword"
                />
              </div>
              <!--//extra-->

              <div class="text-center">
                <button
                  type="button" @click="signup"
                  class="btn app-btn-primary w-100 theme-btn mx-auto"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <!--//auth-form-->

            <div class="auth-option text-center pt-5">
              Already have an account?
              <a class="text-link" @click="showReg = !showReg">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader v-show="loader"/>
  </div>
</template>

<script>
import auth from "@/mixins/auth/auth.js";
import Loader from "@/components/loader"
export default {
  mixins: [auth],
  async created() {
    await this.setUserState();
  },
  components: { Loader }
};
</script>
