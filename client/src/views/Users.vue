<template>
  <div class="home">
    <Users />
  </div>
</template>

<script>
// @ is an alias to /src
import Users from '@/components/user.vue'

export default {
  name: 'User',
  components: {
    Users
  }
}
</script>
