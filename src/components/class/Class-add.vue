<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>班级管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加年级班级</el-breadcrumb-item>
    </el-breadcrumb>

    <el-col :span="18">
      <el-form label-width="160px">
        <el-form-item label="年级名称">
          <el-input type="text" v-model="gradeName" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="年级编号">
          <el-input type="number" v-model="gradeId" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="年级顺序">
          <el-input type="number" v-model="gradeOrder" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="班级名称">
          <el-input type="text" v-model="className" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="班级顺序">
          <el-input type="number" v-model="classOrder" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradeName: '',
      className: '',
      gradeId: 0,
      gradeOrder: 0,
      classOrder: 0
    }
  },
  methods: {
    onSubmit: function() {
      const url = '/schoolManager/class/addClass.json?gradeName=' + this.gradeName + '&gradeId=' + this.gradeId + '&gradeOrder=' + this.gradeOrder + '&className=' + this.className + '&classOrder=' + this.classOrder;
      this.$http.get(url).then(response => {
          const body = response.body;
          if(body.code == 200) {
              this.$router.push({ path: '/class_list'});
          }else{

          }
      }, response => {})
    }
  }
}
</script>

