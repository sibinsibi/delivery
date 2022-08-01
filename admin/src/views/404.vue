<template>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="main">
    <h1>404</h1>
    <p>It looks like you're lost...<br />That's a trouble?</p>
    <button type="button">
      <router-link  to="/" class="text-white"
        >HOME</router-link
      >
    </button>
  </div>
</template>
<script>
import auth from "../mixins/auth/auth.js";

export default {
  mixins: [auth],
  async created() {
    await this.setUserState();
  },
  methods: {
    toggleNavbar: function() {
      window.$("#app-sidepanel").toggleClass("sidepanel-visible");
    },
  },
};
</script>
<style scoped>


html {
  background: linear-gradient(#203075, #233581);
  overflow: hidden;
}
html:before {
  height: 105vmax;
  width: 105vmax;
  z-index: -4;
}
html:after {
  height: 80vmax;
  width: 80vmax;
  z-index: -3;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Varela Round", Sans-serif;
  text-shadow: 0 30px 10px rgba(0, 0, 0, 0.15);
}
body:before {
  height: 60vmax;
  width: 60vmax;
  z-index: -2;
}
body:after {
  height: 40vmax;
  width: 40vmax;
  z-index: -1;
}

.main {
  text-align: center;
  z-index: 5;
}

p {
  font-size: 18px;
  margin-top: 0;
}

h1 {
  font-size: 95px;
  margin: 0;
}

button {
  background: linear-gradient(#ec5dc1, #d61a6f);
  padding: 0 12px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
  outline: none;
  color: #fff;
  font: 400 16px/2.5 Nunito, "Varela Round", Sans-serif;
  text-transform: uppercase;
  cursor: pointer;
}

.bubble {
  background: linear-gradient(#ec5dc1, #d61a6f);
  border-radius: 50%;
  box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
}
.bubble:before,
.bubble:after {
  content: "";
  background: linear-gradient(#ec5dc1, #d61a6f);
  border-radius: 50%;
  box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
}
.bubble:nth-child(1) {
  top: 15vh;
  left: 5vw;
  height: 22vmin;
  width: 22vmin;
}
.bubble:nth-child(1):before {
  width: 13vmin;
  height: 13vmin;
  bottom: -25vh;
  right: -10vmin;
}
.bubble:nth-child(2) {
  top: 35vh;
  left: 38vw;
  height: 10vmin;
  width: 10vmin;
}
.bubble:nth-child(2):before {
  width: 5vmin;
  height: 5vmin;
  bottom: -10vh;
  left: -8vmin;
}
.bubble:nth-child(3) {
  top: 20vh;
  right: 25vw;
  height: 13vmin;
  width: 13vmin;
}
.bubble:nth-child(3):before {
  width: 3vmin;
  height: 3vmin;
  bottom: -15vh;
  left: -18vmin;
  z-index: 6;
}
.bubble:nth-child(4) {
  top: 30vh;
  right: 18vw;
  height: 18vmin;
  width: 18vmin;
}
.bubble:nth-child(4):before {
  width: 7vmin;
  height: 7vmin;
  bottom: -10vmin;
  left: -15vmin;
}
.bubble:nth-child(5) {
  top: 60vh;
  right: 18vw;
  height: 28vmin;
  width: 28vmin;
}
.bubble:nth-child(5):before {
  width: 10vmin;
  height: 10vmin;
  bottom: 5vmin;
  left: -25vmin;
}
</style>
