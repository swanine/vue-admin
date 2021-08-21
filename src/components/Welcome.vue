<template>
  <div>
    <h1>{{msg}}</h1>
    <el-button type="primary" @click="toLogin">去登陆</el-button>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      msg: '欢迎页'
    }
  },
  methods: {
    toLogin() {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
</style>
