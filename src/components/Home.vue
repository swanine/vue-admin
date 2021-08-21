<template>
  <div class="basic-layout">
    <div class="nav-side"></div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">面包屑</div>
        <div class="user-info">用户</div>
      </div>
      <div class="wrapper">
        <div class="main-page">
        <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'swanine'
    }
  },
}
</script>

<style scoped lang="scss">
.basic-layout{
  position: relative;
  .nav-side{
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: yellowgreen;
    color: #fff;
    overflow-y: auto;
    transition: width .5s ease-in-out;
  }
  .content-right{
    margin-left: 200px;
    .nav-top{
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      background-color: antiquewhite;
      padding: 0 20px;
    }
    .wrapper{
      background-color: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      .main-page{
        background-color: #fff;
        height: 100%;
      }
    }
  }
}
</style>
