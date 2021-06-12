<template>
  <div class="header">
    <!--折叠按钮 -->
    <div class="collapse-btn" @click="collapseChange">
      <i class="el-icon-s-fold" v-if="!collapse"></i>
      <i class="el-icon-s-unfold" v-else></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!--消息中心 -->
        <div class="btn-bell">
          <el-tooltip :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom" effect="dark" >
            <router-link to="/tabs"> <!-- 点击这个小铃铛会导航到tabs页面 -->
            <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span><!-- badge 徽章标记 显示信息地红点-->
        </div>
        <!--用户头像 -->
        <div class="user-avator">
          <img src="../assets/img/img.jpg" alt="">
        </div>
        <!-- 用户下拉菜单 -->
        <el-dropdown class="user-name" trigger="hover" @command="handleCommand">
          <span class="el-dropdown-link">姚泽宇
            <i class="el-icon-caret-bottom"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <a href="">
                <el-dropdown-item>项目仓库</el-dropdown-item>
              </a>
              <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 3,
      name: 'yaozeyu'
    }
  },
  computed: {
    collapse () {
      return this.$store.state.collapse
    }, // collapse调用的结果就是collapse的初始值为false
    username () {
      const username = localStorage.getItem('ms_username')
      return username || this.name
    }
  },
  methods: {
    collapseChange () {
      // 组件中提交mutation
      this.$store.commit('handlecollapse', !this.collapse)
    },
    handleCommand (command) {
      if (command === 'loginout') {
        localStorage.removeItem('ms_username')
      }// 意味着已经退出了登录要导航到登录页面
      this.$router.push('/login')
    }
  },
  mounted () {
    if (document.body.clientHeight < 1500) {
      this.collapseChange()
    }
  }
}
</script>

<style scoped>
  .header {
    position:relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
  }
  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  .header .logo{
    float: left;
    width: 250px;
    line-height: 70px;
  }
  .header-right {
    float: right;
    padding-right:50px
  }
  .header-user-con {
    display: flex;
    height: 70px;
    align-items: center; /* flex子元素垂直居中 */
  }
  .btn-bell {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius:15px ;
    cursor: pointer;
  }
  .btn-bell-badge{
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius:4px ;
    background: #f56c6c;
    color: #fff;
  }
  .user-name {
    margin-left: 10px;
  }
  .user-avator {
    margin-left: 20px;
  }
  .user-avator img {
    display: block;/* 使得img 是块元素设置狂高 */
    width: 40px;
    height: 40px;
    border-radius:50% ;
  }
  .el-dropdown-link {
    color:#fff;
    cursor: pointer;
  }
</style>
