<template>
  <form class="box">
    <div v-show="!showReg" class="login-signup-form">
      <div>
        <h1>Mr.ചങ്ങായി</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          style=" fill:#000000;"
        >
          <path
            fill="#f80"
            d="M30,43H9c-2.209,0-4-1.791-4-4V18c0-2.209,1.791-4,4-4h21c2.209,0,4,1.791,4,4v21 C34,41.209,32.209,43,30,43z M28,34V23c0-1.657-1.343-3-3-3H14c-1.657,0-3,1.343-3,3v11c0,1.657,1.343,3,3,3h11 C26.657,37,28,35.657,28,34z"
          ></path>
          <path
            d="M34,27v8h-6.18c0.12-0.31,0.18-0.65,0.18-1v-7H34z"
            opacity=".07"
          ></path>
          <path
            d="M34,27.5v7h-6.05C27.99,34.34,28,34.17,28,34v-6.5H34z"
            opacity=".07"
          ></path>
          <path
            fill="#25a2e5"
            d="M39,5H18c-2.21,0-4,1.79-4,4v5h6c0-1.66,1.34-3,3-3h11c1.66,0,3,1.34,3,3v11c0,1.66-1.34,3-3,3H23 c-1.66,0-3-1.34-3-3v-5h-6v10c0,2.21,1.79,4,4,4h21c2.21,0,4-1.79,4-4V9C43,6.79,41.21,5,39,5z"
          ></path>
          <path
            d="M20.18,13C20.06,13.31,20,13.65,20,14h-6.02v-1H20.18z"
            opacity=".05"
          ></path>
          <path
            d="M20.05,13.5C20.01,13.66,20,13.83,20,14h-6.02v-0.5H20.05z"
            opacity=".07"
          ></path>
          <rect
            width="6.019"
            height="1"
            x="13.981"
            y="20"
            opacity=".05"
            transform="rotate(-180 16.99 20.5)"
          ></rect>
          <rect
            width="6.019"
            height=".5"
            x="13.981"
            y="20"
            opacity=".07"
            transform="rotate(-180 16.99 20.25)"
          ></rect>
        </svg>
      </div>
      <input type="email" name="" placeholder="Email" v-model="email" />
      <input
        type="password"
        name=""
        placeholder="Password"
        v-model="password"
      />
      <a class="forgot" href="#">Forgot password?</a>
      <input type="button" name="" value="Login" @click="login" />
      <div class="text-center">
        No Account?         <!--<a class="text-light fs-5" @click="showReg = !showReg">HERE</a> -->

        <div class="waviy"  @click="showReg = !showReg">
          <span style="--i:1">S</span>
          <span style="--i:2">I</span>
          <span style="--i:3">G</span>
          <span style="--i:4">N</span>
          <span style="--i:5">&nbsp;</span>
          <span style="--i:6">U</span>
          <span style="--i:7">P</span>
          <span style="--i:8">&nbsp;</span>
          <span style="--i:9">H</span>
          <span style="--i:10">E</span>
          <span style="--i:11">R</span>
          <span style="--i:12">E</span>
        </div>
      </div>
    </div>
    <div v-show="showReg" class="login-signup-form">
      <h5>Register with us</h5>

      <input
        type="text"
        name=""
        placeholder="Name"
        v-model="name"
        autocomplete="off"
      />
      <input type="email" name="" placeholder="Email" v-model="signupEmail" />
      <input
        type="number"
        name=""
        placeholder="Mobile"
        v-model="signupMobile"
      />
      <input
        type="password"
        name=""
        placeholder="Password"
        v-model="signupPassword"
        id="signupPassword"
      />
      <input
        type="password"
        name=""
        placeholder="Confirm Password"
        v-model="cPassword"
        id="cPassword"
      />

      <span
        class="material-icons md-18"
        @click="showPassword(true)"
        v-show="!showPwd"
        >visibility</span
      >
      <span
        class="material-icons md-18"
        @click="showPassword(false)"
        v-show="showPwd"
        >visibility_off</span
      >

      <input type="button" name="" value="Sign Up" @click="signup" />
      <div class="text-center ">
        Already have an account?
        <a class="text-link text-light" @click="showReg = !showReg">Log in</a>
      </div>
    </div>
    <Loader v-show="loader" />
  </form>
</template>

<script>
import auth from "@/mixins/auth/auth.js";
import Loader from "@/components/loader";
export default {
  mixins: [auth],
  async created() {
    await this.checkAuth();
  },
  components: { Loader },
};
</script>
