<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>教师管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-col :span="18">
      <el-form label-width="160px">
        <el-form-item label="教师姓名">
          <el-input type="text" v-model="teacherName" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="sex">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input type="number" v-model="age" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input type="number" v-model="phone" placeholder="请输入内容" maxlength="11" required></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input type="text" v-model="address" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="教师等级">
          <el-select v-model="level">
            <el-option label="高级" value="1"></el-option>
            <el-option label="中级" value="2"></el-option>
            <el-option label="低级" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排课班级">
          <el-select v-model="classIds" placeholder="筛选年级" multiple>
            <el-option
              v-for="item in options"
              :key="item.classId"
              :label="item.className"
              :value="item.classId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="毕业院校">
          <el-input type="text" v-model="graduated" placeholder="请输入内容" required></el-input>
        </el-form-item>
        <el-form-item label="教龄">
          <el-input type="number" v-model="teachTime" placeholder="请输入内容" required></el-input>
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
      teacherName: '',
      sex: 1,
      age: 0,
      phone: '',
      address: '',
      level: 1,
      classIds: [],
      options: [],
      graduated: '',
      teachTime: ''
    }
  },
  mounted: function() {
    this.$http.get('/schoolManager/class/classList.json').then(response => {
      const body = response.body;
      if(body.code == 200) {
        this.options = body.detail.rows;
      }
    }, response => {})
  },
  methods: {
    onSubmit: function() {
      const query = '/schoolManager/teacher/addTeacher.json';
      const param = {
        teacherName: this.teacherName,
        sex: this.sex,
        age: this.age,
        phone: this.phone,
        address: this.address,
        level: this.level,
        classIds: this.classIds,
        graduated: this.graduated,
        teachTime: this.teachTime
      }
      console.log(param);
      this.$http.post(query, param, {emulateJSON: false}).then(response => {
        const body = response.body;
        if(body.code == 200) {
          this.$router.push({path: '/teacher'});
        }
      })
    }
  }
}
</script>
