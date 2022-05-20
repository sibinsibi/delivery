<template>
<div><button @click="logout">logout</button></div>
</template>

<script>
import auth from "@/mixins/auth/auth.js";

export default {
  mixins: [auth],
  async mounted() {
    await this.setUserState();
  },
  methods: {
    toggleNavbar: function() {
      window.$("#app-sidepanel").toggleClass("sidepanel-visible");
    },
  },
};
</script>
