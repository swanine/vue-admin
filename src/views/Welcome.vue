<template>
  <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎体验</div>
      <div class="title">通用后台管理系统</div>
      <div class="desc">Vue3+ElementPlus+Node+Mongo打造通用后台管理系统</div>
    </div>
    <div class="img">
    </div>
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

<style scoped lang="scss">
.welcome{
  display: flex;
  justify-content: space-around;
  align-items: center;
  .content{
    margin-left: 80px;
    .sub-title{
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }
    .title{
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    .desc{
      font-size: 14px;
      color: #999;
    }
  }
  .img{
    background: url('./../assets/img/Working on Laptop.png');
    background-size: cover;
    margin-top: 30px;
    width: 700px;
    height: 600px;
  }
}
</style>
