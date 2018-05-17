<template>
  <div class="login-page">
    <el-col :span="8" :offset="8">
      <div class="login-cont">
        <h2>智慧音乐教室管理后台</h2>
        <el-form label-width="60px">
          <el-form-item label="用户名">
            <el-input v-model="userName" placeholder="请输入内容" required></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="userPwd" placeholder="请输入内容" required></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      userPwd: ''
    }
  },
  methods: {
    onSubmit: function() {
      this.$http.post('/schoolManager/login.json', {phone: this.userName, password: this.userPwd}).then(response => {
        const body = response.body;
        if(body.code == 200) {
            this.userName = '';
            this.userPwd = '';
            this.$store.commit('userStatus', body.detail);
            this.$store.commit('isLogin', true);
            // sessionStorage.setItem('schoolName', body.detail.schoolName);
            // sessionStorage.setItem('schoolId', body.detail.schoolId);
            this.$router.push({ path: this.$route.query.redirect ? this.$route.query.redirect : '/'});
        }
      }, response => {})
    }
  }
}
</script>
anqi
<style scoped>
.login-page {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fff;
}
/* 62958364 */
.login-cont {
  padding: 50px 0;
}
.login-cont h2 {
  text-align: center;
  padding-bottom: 15px;
}
</style>
