<template>
  <div class="login-wrapper">
    <form :model="user">
      <div class="title">
        <h1>登&emsp;录</h1>
      </div>
      <input type="text" placeholder="用户名" v-model="user.userName">
      <input type="password" placeholder="密码" v-model="user.userPwd">
      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        userName: 'admin',
        userPwd: '123456'
      }
    };
  },
  methods: {
    login(){
      this.$api.login(this.user).then((res) => {
        this.$store.commit('saveUserInfo', res)
        this.$router.push('/welcome')
      })
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes pulse{
  50% {
    box-shadow: 0 0 0 50px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
.login-wrapper{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #09203f 0%, #537895 100%);
  overflow: hidden;
  &::before{
    position: absolute;
    content: "";
    z-index: 2;
    width: 350px;
    height: 350px;
    top: 50%;
    left: 50%;
    transform: translate(-120%, -90%);
    background-color: #ffe53b;
background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, .2);
    animation: pulse 1.5s infinite;
  }
  &::after{
    position: absolute;
    content: "";
    z-index: 2;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(10%, 0%);
    background-color: #ff8bff;
    background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%);
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, .2);
    animation: pulse 1.6s infinite;
  }
  form{
    position: relative;
    padding: 50px 30px 30px;
    width: 350px;
    z-index: 3;
    border: 1px solid rgba(255, 255, 255, .2);
    border-right: 1px solid rgba(255, 255, 255, .1);
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, .1);
    border-radius: 8px;
    backdrop-filter: blur(20px);
    .title{
      text-align: center;
      font-size: 2.6em;
      color: #ffffff;
      font-weight: 600;
      margin-bottom: 50px;
    }
    input{
      width: 100%;
      height: 50px;
      padding: 5px 10px;
      border-radius: 8px;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, .5);
      margin-bottom: 15px;
      font-size: 16px;
      color: #fff;
      outline: none;
      &::placeholder{
        color: rgba(255, 255, 255, 0.5);
      }
    }
    button{
      width: 100%;
      height: 50px;
      margin-top: 10px;
      border: 0;
      background-color: #f68084;
      background-image: linear-gradient(to right , #009efd 0%, #2af598 100%);
      background-size: 200% ;
      border-radius: 8px;
      color: #fff;
      outline: none;
      cursor: pointer;
      box-shadow: 0 20px 40px rgba(0, 0, 0, .1);
      transition: ease .4s;
      &:hover{
        background-position: right center;
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
