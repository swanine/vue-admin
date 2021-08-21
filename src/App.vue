<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$storage.setItem('userInfo', {
      name: '严鸿浩',
      age: 25
    })
    console.log(this.$storage.getItem('userInfo'))
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
</style>
