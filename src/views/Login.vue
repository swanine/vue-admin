<template>
  <div class="login-wrapper">
    <form>
      <div class="title">
        <h1>登&emsp;录</h1>
      </div>
      <input type="text" placeholder="用户名">
      <input type="password" placeholder="密码">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
      border-radius: 8px;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, .5);
      margin-bottom: 15px;
      color: #fff;
      outline: none;
      &::placeholder{
        color: #fff;
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
