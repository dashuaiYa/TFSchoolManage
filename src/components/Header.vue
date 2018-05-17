<template>
  <div class="cu-header">
    <span>{{schoolName}}</span>
    <el-button v-if="islogin" type="text" size="small" @click="signOut">退出登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    schoolName() {
      return this.$store.state.user.schoolName
    },
    islogin() {
      return true
    }
  },
  methods: {
    signOut: function() {
      this.$http.get('/schoolManager/logout.json').then(response => {
        if (response.body.code == 200) {
          this.$store.commit('userStatus', {});
          this.$store.commit('isLogin', false);
          this.$router.push({ path: "/login" });
        }
      }, response => {})
    }
  }
}
</script>

<style>
  .cu-header .el-button {
    float: right;
    position: relative;
    top: 20px;
  }
</style>
