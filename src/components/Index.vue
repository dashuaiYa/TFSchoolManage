<template>
  <div>
      {{test}} 您好，欢迎您使用天赋音乐智慧音乐教师管理后台！
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    test() {
      return this.$store.state.user.schoolName
    }
  }
}
</script>
