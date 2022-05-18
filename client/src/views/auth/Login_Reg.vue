<template>
  <form class="box">
    <h1>KOKACHI</h1>
    <div v-show="!showReg">
      <input type="email" name="" placeholder="Email" />
      <input type="password" name="" placeholder="Password" />
      <a class="forgot" href="#">Forgot password?</a>
      <input type="button" name="" value="Login" />
      <div class="text-center">
        No Account? Sign up
        <a class="text-link text-light" @click="showReg = !showReg">here</a>
      </div>
    </div>
    <div v-show="showReg">
      <input type="text" name="" placeholder="Name" v-model="name"/>
      <input type="email" name="" placeholder="Email" v-model="signupEmail"/>
      <input type="password" name="" placeholder="Password"  v-model="signupPassword"/>
      <input type="password" name="" placeholder="Confirm Password"  v-model="cPassword"/>
      <input type="button" name="" value="Sign Up" @click="signup"/>
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
