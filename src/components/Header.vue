<template>
  <div class="header">
    <!--折叠按钮 -->
    <div class="collapse-btn">
      <i class="el-icon-s-fold"></i>
      <i class="el-icon-s-unfold"></i>
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
        <el-dropdown class="user-name" trigger="click" >
          <span class="el-dropdown-link">姚泽宇
            <i class="el-icon-caret-bottom"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <a href="">
                <el-dropdown-item>项目仓库</el-dropdown-item>
              </a>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
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
      message: 2
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
