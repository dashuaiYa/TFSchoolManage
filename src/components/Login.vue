<template>
  <el-col :span="16">
    <el-form label-width="80px">
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
  </el-col>
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
            this.$router.push({ path: this.$route.query.redirect ? this.$route.query.redirect : '/'});
        }
      }, response => {})
    }
  }
}
</script>
