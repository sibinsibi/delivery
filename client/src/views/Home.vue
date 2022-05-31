<template>
  <div>
    <Layout />
    <button @click="logout">lo</button>
  </div>
</template>

<script>
import Layout from "@/components/layout/layout.vue";
import auth from "@/mixins/auth/auth.js";

export default {
  components: { Layout },
  mixins: [auth],
  data() {
    return {
      test: "",
    };
  },
  methods: {},
};
</script>
