<template>
  <form class="box">
    <div v-show="!showReg" class="login-signup-form">
      <div>
        <h1>KOKACHI</h1>
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
      <input
        type="email"
        name=""
        placeholder="Email"
        v-model="email"
      />
      <input
        type="password"
        name=""
        placeholder="Password"
        v-model="password"
      />
      <a class="forgot" href="#">Forgot password?</a>
      <input type="button" name="" value="Login" @click="login" />
      <div class="text-center">
        No Account? Sign up
        <a class="text-link text-light" @click="showReg = !showReg">here</a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        style=" fill:#000000;"
        @click="signInWithGoogle"
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        ></path>
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        ></path>
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        ></path>
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        ></path>
      </svg>
    </div>
    <div v-show="showReg" class="login-signup-form">
      <h5>Register with us</h5>

      <input type="text" name="" placeholder="Name" v-model="name" />
      <input type="email" name="" placeholder="Email" v-model="signupEmail" />
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
    await this.setUserState();
  },
  components: { Loader },
};
</script>
