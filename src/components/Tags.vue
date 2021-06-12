<template>
  <div class="tags">
    <ul>
      <li class="tags-li" v-for="(item,index) in tagsList" :key="index">
        <router-link class="tags-li-title" :to="item.path">{{item.title}}</router-link>
        <span class="tags-li-icon">
          <i class="el-icon-close"></i> <!-- 关闭的小× -->
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown>
        <el-button type="primary" size="mini">
          标签选项
          <i class="el-icon-arrow-down el-icon--left"></i>
        </el-button>
        <template #dropdown>
            <el-dropdown-menu size="small">
              <el-dropdown-item command="other">关闭其他</el-dropdown-item>
              <el-dropdown-item command="all">关闭所有</el-dropdown-item>
              </el-dropdown-menu> <!-- 通过具名插槽将el-dropdown-menu 组件注入 name值为el-dropdown的内置element子组件中-->
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tagsList () {
      return this.$store.state.tagsList
    }
  }
}
</script>

<style>
  .tags {
    position: relative;
    height: 30px;
    overflow: hidden;
    background: #fff;
    padding-right: 120px;
    box-shadow: 0 5px 10px #ddd;
  }
  .tags ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .tags-li {
    float: left;
    margin: 3px 5px 2px 3px;
    border-radius: 3px;
    font-size: 15px;
    overflow: hidden;
    cursor: pointer;
    height: 23px;
    line-height: 23px;
    border: 1px solid #e9eaec;
    background: #fff;
    padding: 0 5px 0 12px;
    vertical-align: middle;
    color: #666;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
  }
  .tags-li:not(.active):hover {
    background: #f8f8f8;
  }
  .tags-li.active {
    color: #fff;
  }
  .tags-li-title {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: #666;
  }
  .tags-li.active .tags-li-title{
    color: #fff;
  }
  .tags-close-box{
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 110px;
    height: 30px;
    background: #fff;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
</style>
