<template>
  <div class="basic-layout">
    <div :class="['nav-side',isCollapse?'fold':'unfold']">
      <!-- 系统logo -->
      <div class="logo">
        <img src="" alt="">
        <span>Manager</span>
      </div>
      <!-- 导航菜单 -->
      <el-menu
      default-active="2"
      router
      background-color="#001529"
      :collapse="isCollapse"
      text-color="#fff"
      class="nav-menu">
      <TreeMenu :userMenu="userMenu"/>
    </el-menu>

    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">
          <i class="el-icon-s-fold" @click="toggle"></i>
          <BreadCrumb/>
        </div>
        <div class="user-info">
          <el-badge :is-dot="noticeCount>0" class="item">
            <i class="el-icon-bell"></i>
          </el-badge>
          <el-dropdown @command="handleLogout">
            <span class="el-dropdown-link">
              {{userInfo.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email">邮箱：{{userInfo.userEmail}}</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

        </div>
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
import TreeMenu from './TreeMenu.vue'
import BreadCrumb from './BreadCrumb.vue'
export default {
  name: 'Home',
  components: {
    TreeMenu,
    BreadCrumb
  },
  data() {
    return {
      isCollapse: false,
      userInfo: this.$store.state.userInfo,
      noticeCount: 0,
      userMenu:[]
    }
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse
    },
    handleLogout(key) {
      if (key == 'email') return
      this.$store.commit('saveUserInfo', '')
      this.userInfo = null
      this.$router.push('/login')
    },
    async getNoticeCount() {
      try{
        const count = await this.$api.noticeCount()
        this.noticeCount = count
      }catch(err) {
        console.error(err)
      }
    },
    async getMenuList() {
      try{
        const list = await this.$api.getMenuList()
        this.userMenu = list
        console.log(this.userMenu)
      }catch(err) {
        console.error(err)
      }
    }

  },
  mounted() {
    this.getNoticeCount()
    this.getMenuList()
  }
}
</script>

<style scoped lang="scss">
.basic-layout{
  display: flex;
  height: 100vh;
  .fold{
    width: 64px;
  }
  .unfold{
    width: 200px;
  }
  .nav-side{
    height: 100%;
    background-color: #001529;
    color: #fff;
    overflow: hidden;
    transition: width .3s ease-in-out;
    .logo{
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    .nav-menu{
      border: none;
    }
  }
  .content-right{
    flex: 1;
    .nav-top{
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      background-color: rgb(255, 255, 255);
      padding:0 20px;
      .bread{
        display: flex;
        gap: 16px;
        align-items: center;
        i{
          display: inline-block;
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 26px;
        }
      }
      .user-info{
        .item{
          margin: 5px 16px 0 0;
          height: 30px;
          line-height: 20px;
          i{
            font-size: 20px;
            line-height: 20px;
          }
        }
        .el-dropdown-link{
          cursor: pointer;
          color: #409eff;
        }
      }
    }
    .wrapper{
      background-color: #eef0f3;
      padding: 20px 0 0 20px;
      height: calc(100vh - 50px);
      .main-page{
        background-color: #fff;
        height: 100%;
      }
    }
  }
}
</style>
