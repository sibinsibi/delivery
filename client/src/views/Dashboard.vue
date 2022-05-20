<template>
  <div>
    <Layout />
    
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
  mounted() {
    //setTimeout(() => this.checkAuth(), 1000);
  },
  methods: {},
};
</script>
