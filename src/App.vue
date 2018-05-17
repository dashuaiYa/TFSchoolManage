<template>
  <div id="app">
    <el-container>
      <el-header>
        <header-view></header-view>
      </el-header>
      <el-container>
        <el-aside width="220px">
          <el-menu :default-active="activeNav" @open="handleOpen" @close="handleClose" router>
            <!-- <el-menu-item index="/" route="/">
              <i class="el-icon-setting"></i>
              <span slot="title">首页</span>
            </el-menu-item> -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>学生管理</span>
              </template>
              <el-menu-item index="/student_add" route="/student_add">
                <i class="el-icon-setting"></i>
                <span slot="title">添加学生</span>
              </el-menu-item>
              <el-menu-item index="/student_list" route="/student_list">
                <i class="el-icon-setting"></i>
                <span slot="title">学生列表</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>教师管理</span>
              </template>
              <el-menu-item index="/teacher_add" route="/teacher_add">
                <i class="el-icon-setting"></i>
                <span slot="title">添加教师</span>
              </el-menu-item>
              <el-menu-item index="/teacher" route="/teacher">
                <i class="el-icon-setting"></i>
                <span slot="title">教师列表</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>班级管理</span>
              </template>
              <el-menu-item index="/class_add" route="/class_add">
                <i class="el-icon-setting"></i>
                <span slot="title">添加年级班级</span>
              </el-menu-item>
              <el-menu-item index="/class_list" route="/class_list">
                <i class="el-icon-setting"></i>
                <span slot="title">班级列表</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>设备管理</span>
              </template>
              <el-menu-item index="/devices_add" route="/devices_add">
                <i class="el-icon-setting"></i>
                <span slot="title">添加设备</span>
              </el-menu-item>
              <el-menu-item index="/devices" route="/devices">
                <i class="el-icon-setting"></i>
                <span slot="title">设备列表</span>
              </el-menu-item>
            </el-submenu>

            <el-menu-item index="/download" route="/download">
              <i class="el-icon-setting"></i>
              <span slot="title">课件下载</span>
            </el-menu-item>
            <!-- <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>年级管理</span>
              </template>
              <el-menu-item index="/grade" route="/grade">
                <i class="el-icon-setting"></i>
                <span slot="title">添加年级</span>
              </el-menu-item>
            </el-submenu> -->
            <!-- <el-menu-item index="/classroom" route="/classroom">
              <i class="el-icon-setting"></i>
              <span slot="title">教室管理</span>
            </el-menu-item>
            <el-menu-item index="/notice" route="/notice">
              <i class="el-icon-setting"></i>
              <span slot="title">通知中心</span>
            </el-menu-item> -->
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  data(){
    return {
      schoolName: this.$store.state.user.schoolName,
      activeNav: this.$route.path
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.activeNav);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    "header-view": Header
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
.el-header {
  line-height: 60px;
  text-align: center;
  border-bottom: 1px solid #999;
}
.el-breadcrumb {
  margin-bottom: 25px;
}
.filter-cont {
  margin-bottom: 15px;
}
.pager-cont {
  margin: 20px 0;
  text-align: center;
}
</style>
